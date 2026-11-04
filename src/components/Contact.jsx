import { useState } from "react";
import { email, links } from "../data/links";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="relative bg-ink text-paper overflow-hidden">
      {/* Soft gold glow in the corner */}
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 py-24">
        <Reveal>
          <p className="label text-gold">03 / Let's work together</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mt-4 max-w-3xl">
            Let's build something people remember.
          </h2>
          <p className="text-paper/70 text-lg mt-6 max-w-xl">
            Available for freelance projects, online stores, restaurant systems and full-time frontend roles.
          </p>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3 mt-14">
          {/* Email */}
          <Reveal className="lg:col-span-2 bg-paper/5 border border-paper/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="min-w-0">
              <p className="label text-gold !text-[10px]">Email</p>
              <p className="font-serif text-xl sm:text-2xl mt-2 break-all">{email}</p>
            </div>
            <div className="flex gap-2 sm:ms-auto">
              <button onClick={copyEmail} className="label !text-[10px] bg-gold text-ink rounded-lg px-5 py-3 hover:bg-paper transition-colors">
                {copied ? "Copied ✓" : "Copy email"}
              </button>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                aria-label="Write an email in Gmail"
                className="bg-paper/10 rounded-lg px-4 py-3 hover:bg-paper/20 transition-colors"
              >
                ↗
              </a>
            </div>
          </Reveal>

          {/* Location */}
          <Reveal delay={0.1} className="bg-paper/5 border border-paper/10 rounded-2xl p-6">
            <p className="label text-gold !text-[10px]">Location & time zone</p>
            <p className="mt-2">Palestine (GMT+2) · Remote worldwide</p>
            <p className="text-paper/60 text-sm mt-2">Working in English and Arabic.</p>
          </Reveal>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-paper/10 mt-14 pt-8">
          <p className="label text-paper/50 !text-[10px] me-auto">Find me on</p>
          {links
            .filter((l) => l.url)
            .map((l) => (
              <a key={l.name} href={l.url} target="_blank" className="label hover:text-gold transition-colors">
                {l.name} ↗
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
