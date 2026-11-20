import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, useTexture } from "@react-three/drei";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// The 3D hero: my real projects as curved screens on a slowly turning ring.
// Drag to spin it, hover a screen to see its name, click to open the live site.
// This file loads AFTER the text (it is "lazy" in Hero.jsx), so the page opens fast.
// ---------------------------------------------------------------------------

const RADIUS = 2.6; // size of the ring
const CARD_W = 1.5; // screen width
const CARD_H = 0.79; // the screenshots are 1200 × 630, so the height is width ÷ 1.9
const SPEED = 0.12; // how fast it turns by itself (radians per second)

// A flat card bent onto the ring, so every screen is a curved slice of it
function curvedCard(width, height, radius, angle) {
  const geo = new THREE.PlaneGeometry(width, height, 32, 1);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const a = angle + pos.getX(i) / radius; // where this point sits on the circle
    pos.setXYZ(i, Math.sin(a) * radius, pos.getY(i), Math.cos(a) * radius);
  }
  geo.computeVertexNormals();
  return geo;
}

function Ring({ cards, onHover, onOpen, spin, reduced }) {
  const ring = useRef();
  const tilt = useRef();
  const textures = useTexture(cards.map((c) => c.image));
  const [hovered, setHovered] = useState(-1);

  // Sharp screenshots: true colors and clean edges when seen at an angle
  useMemo(() => {
    textures.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
      // "cover": a wider screenshot is cropped at the sides instead of squeezed
      const ratio = CARD_W / CARD_H / (t.image.width / t.image.height);
      if (ratio < 1) {
        t.repeat.x = ratio;
        t.offset.x = (1 - ratio) / 2;
      }
    });
  }, [textures]);

  // One curved screen + a thin gold frame behind it, for each project
  const shapes = useMemo(() => {
    const step = (Math.PI * 2) / cards.length;
    return cards.map((_, i) => ({
      screen: curvedCard(CARD_W, CARD_H, RADIUS, i * step),
      frame: curvedCard(CARD_W + 0.05, CARD_H + 0.05, RADIUS - 0.012, i * step),
    }));
  }, [cards]);

  // Sizes of each screen (they grow a little on hover)
  const scales = useRef(cards.map(() => 1));
  const meshes = useRef([]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const s = spin.current;
    // Turns by itself (slower while a screen is hovered), plus the push from dragging
    if (!s.dragging) {
      s.velocity *= Math.pow(0.04, dt); // a drag push fades out smoothly
      const auto = reduced || hovered >= 0 ? 0 : SPEED;
      s.angle += (auto + s.velocity) * dt;
    }
    ring.current.rotation.y = s.angle;

    // Phones: the camera comes closer, so the screen in front is big enough to read
    const z = state.size.width < 640 ? 6.2 : 7.6;
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, z, 0.1);

    // The whole ring leans gently toward the mouse
    const px = state.pointer.x;
    const py = state.pointer.y;
    tilt.current.rotation.x = THREE.MathUtils.lerp(tilt.current.rotation.x, 0.12 - py * 0.08, 0.05);
    tilt.current.rotation.z = THREE.MathUtils.lerp(tilt.current.rotation.z, -0.06 + px * 0.04, 0.05);

    // The hovered screen comes forward a little
    meshes.current.forEach((m, i) => {
      if (!m) return;
      scales.current[i] = THREE.MathUtils.lerp(scales.current[i], i === hovered ? 1.07 : 1, 0.12);
      m.scale.setScalar(scales.current[i]);
    });
  });

  const hover = (i) => {
    setHovered(i);
    onHover(i);
    document.body.style.cursor = i >= 0 ? "pointer" : "";
  };

  return (
    <group ref={tilt}>
      <group ref={ring}>
        {cards.map((card, i) => (
          <group key={card.title} ref={(m) => (meshes.current[i] = m)}>
            <mesh geometry={shapes[i].frame}>
              <meshStandardMaterial color="#c8a24a" metalness={0.9} roughness={0.28} />
            </mesh>
            <mesh
              geometry={shapes[i].screen}
              onPointerOver={(e) => {
                e.stopPropagation();
                hover(i);
              }}
              onPointerOut={() => hover(-1)}
              onClick={(e) => {
                e.stopPropagation();
                if (!spin.current.moved) onOpen(card); // a drag is not a click
              }}
            >
              {/* toneMapped false: the screenshot keeps its real colors */}
              <meshBasicMaterial map={textures[i]} toneMapped={false} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

export default function HeroGallery({ cards }) {
  const box = useRef();
  const spin = useRef({ angle: 0, velocity: 0, dragging: false, moved: false, lastX: 0 });
  const [hovered, setHovered] = useState(-1);
  const [visible, setVisible] = useState(true);
  const reduced = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  // Stop drawing when the hero is scrolled away (saves battery)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(box.current);
    return () => io.disconnect();
  }, []);

  // Drag sideways to spin the ring
  const down = (e) => {
    Object.assign(spin.current, { dragging: true, moved: false, lastX: e.clientX, velocity: 0 });
  };
  const move = (e) => {
    const s = spin.current;
    if (!s.dragging) return;
    const dx = e.clientX - s.lastX;
    s.lastX = e.clientX;
    if (Math.abs(dx) > 2) s.moved = true;
    s.angle += dx * 0.006;
    s.velocity = dx * 0.35; // keeps turning a bit after letting go
  };
  const up = () => (spin.current.dragging = false);

  const card = cards[hovered];

  return (
    <div ref={box} className="relative h-full">
      {/* The left and right ends of the ring melt softly into the page */}
      <div className="h-full [mask-image:linear-gradient(90deg,transparent,#000_14%,#000_86%,transparent)]">
        <Canvas
          frameloop={visible ? "always" : "never"}
          dpr={[1, 2]}
          camera={{ position: [0, 0.3, 7.6], fov: 34 }}
          gl={{ antialias: true, alpha: true }}
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerLeave={up}
          className="touch-pan-y"
        >
          {/* The far side of the ring fades into the page color */}
          <fog attach="fog" args={["#f7f3ee", 5.4, 9.4]} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 5, 6]} intensity={1.2} />
          {/* Soft studio lights, only for the gold frames to reflect */}
          <Environment resolution={64}>
            <Lightformer intensity={3} position={[0, 4, 4]} scale={[8, 2, 1]} />
            <Lightformer intensity={1.5} position={[-5, 0, 2]} scale={[2, 6, 1]} />
            <Lightformer intensity={1.5} position={[5, 0, 2]} scale={[2, 6, 1]} />
          </Environment>

          <Ring
            cards={cards}
            onHover={setHovered}
            onOpen={(c) => window.open(c.live, "_blank", "noopener")}
            spin={spin}
            reduced={reduced}
          />
          <ContactShadows position={[0, -0.95, 0]} opacity={0.28} scale={10} blur={2.6} far={3} color="#5f4a1a" />
        </Canvas>
      </div>

      {/* Name of the screen under the mouse */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center text-center">
        <p className={`font-serif text-lg md:text-xl transition-opacity duration-300 ${card ? "opacity-100" : "opacity-0"}`}>
          {card?.title ?? "·"}
        </p>
        <p className="label !text-[10px] text-muted mt-1">{card ? "Click to open the live site ↗" : "Drag to explore my work"}</p>
      </div>
    </div>
  );
}
