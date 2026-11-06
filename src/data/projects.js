// Every project card on the portfolio, in the order they appear.
// badge: "Client project" (made for a real client) or "Personal project"
// size: how much space the card takes on big screens: "large", "half", "small", "row"
// image: a screenshot in public/projects
// github (optional): link to the code, shows a "Code" button
// focus (optional): which part of the screenshot stays visible when the card crops it, e.g. "object-right-top"
// Layout: each row adds up to the full width.
//   row = full-width card · large + small · half + half · small + small + small
export const projects = [
  {
    title: "Glossy — Skincare & Cosmetics Store",
    badge: "Client project",
    category: "E-commerce",
    size: "row",
    description:
    "A live makeup and skincare store built for a real client. Stock is tracked per product variant, items switch to SOLD OUT automatically, delivery fees are set by region, and an admin dashboard manages products and orders.",
    tech: ["JavaScript", "Supabase", "PostgreSQL", "Netlify"],
    image: "/projects/glossy-desktop.webp",
    live: "https://glossybyn.netlify.app/",
  },
  {
    title: "MediCare — Clinic Booking System",
    badge: "Personal project",
    category: "Healthcare · Booking",
    size: "large",
    description:
    "An Arabic clinic booking system. Patients see only the free time slots and book in seconds; the doctor sets working days, hours and appointment length from a secure dashboard. Data lives in a Cloudflare D1 SQL database.",
    tech: ["Next.js", "TypeScript", "Cloudflare D1", "Cloudflare Workers", "RTL"],
    image: "/projects/medicare-v2.webp",
    github: "https://github.com/ayakhamaysa/MediCare-Clinic-Appointment-System",
    live: "https://aya-medicare.vercel.app",
  },
  {
    title: "Basma Dental Clinic",
    badge: "Personal project",
    category: "Healthcare",
    size: "small",
    description:
    "A dental clinic landing page with an appointment form that checks the phone number and sends bookings by email, with no backend.",
    tech: ["React", "Formspree", "Framer Motion"],
    image: "/projects/clinic.webp",
    focus: "object-right-top",
    github: "https://github.com/ayakhamaysa/dental-clinic",
    live: "https://dental-clinic-tau-fawn.vercel.app",
  },
  {
    title: "MIZU Sushi — Menu with AI Chef",
    badge: "Personal project",
    category: "Restaurant · AI",
    size: "row",
    description:
    "A bilingual Arabic / English sushi menu with an AI chef chat. The chef explains dishes, avoids raw fish on request and builds dinners within a budget, using the real menu and prices. Answers stream word by word from a Vercel serverless function, so the API key never reaches the browser.",
    tech: ["React", "Gemini API", "Serverless Functions", "Streaming", "RTL / i18n"],
    image: "/projects/mizu.webp",
    live: "https://mizu-roan.vercel.app",
    github: "https://github.com/ayakhamaysa/mizu-sushi",
  },
  {
    title: "Pizzeria 450° Ordering System",
    badge: "Personal project",
    category: "Restaurant system",
    size: "half",
    description:
    "Customers order from the table by QR code, the kitchen sees orders live, and the cashier settles the bill. Staff login and secure database rules.",
    tech: ["React", "Supabase", "PostgreSQL", "Realtime"],
    image: "/projects/pizzeria-450-system.webp",
    github: "https://github.com/ayakhamaysa/restaurant-450-system",
    live: "https://pizzeria-450-system.vercel.app",
  },
  {
    title: "Pizzeria 450° Digital Menu",
    badge: "Personal project",
    category: "Restaurant",
    size: "half",
    description:
    "An Arabic digital menu for a Neapolitan pizzeria, with category tabs and every item and price loaded from one data file.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    image: "/projects/pizzeria-450.webp",
    github: "https://github.com/ayakhamaysa/restaurant-450-menu",
    live: "https://pizzeria-450.vercel.app",
  },
  {
    title: "EJT Perfume Store",
    badge: "Personal project",
    category: "E-commerce",
    size: "small",
    description: "An Arabic perfume store with product details, a cart drawer and a checkout that sends the order to the shop.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/ejt.webp",
    github: "https://github.com/ayakhamaysa/ejt-perfume",
    live: "https://ejt-perfume.vercel.app",
  },
  {
    title: "Jericho Forests Chalets",
    badge: "Personal project",
    category: "Hospitality",
    size: "small",
    description: "A chalet rental page with a scroll-driven sunset hero, a villa gallery with prices, and WhatsApp booking.",
    tech: ["React", "GSAP", "ScrollTrigger"],
    image: "/projects/jericho-forests.webp",
    github: "https://github.com/ayakhamaysa/jericho-forests",
    live: "https://jericho-forests.vercel.app",
  },
  {
    title: "Oday Shami Hair Salon",
    badge: "Personal project",
    category: "Beauty",
    size: "small",
    description: "A bilingual Arabic / English salon page with one-click RTL ↔ LTR switching and animated SVG hair.",
    tech: ["React", "Framer Motion", "RTL / i18n"],
    image: "/projects/oday-shami.webp",
    github: "https://github.com/ayakhamaysa/beauty-salon",
    live: "https://hair-salon-nine-hazel.vercel.app",
  },
  {
    title: "Al Tareeq Coffee House",
    badge: "Personal project",
    category: "Café",
    size: "row",
    description:
    "A coffee shop page with soft motion: a word-by-word hero, a floating mascot, scroll reveals and a menu filtered by category.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    image: "/projects/alatareeq.webp",
    github: "https://github.com/ayakhamaysa/alatareeq",
    live: "https://altareeq-iota.vercel.app",
  },
];
