"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { links, navItems } from "@/data/site";

export function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = navItems
        .map((item) => item.href.replace("#", ""))
        .findLast((id) => {
          const element = document.getElementById(id);
          return element ? element.offsetTop - 160 <= window.scrollY : false;
        });
      if (current) setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition duration-300 ${
          scrolled ? "glass" : "border border-white/8 bg-white/[0.03] backdrop-blur-md"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan/15 text-cyan">
            <Send size={16} />
          </span>
          learshyjourney
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm transition ${
                  active === id ? "text-white" : "text-white/52 hover:text-white"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </div>

        <a
          href={links.channel}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan"
        >
          Join
        </a>
      </nav>
    </motion.header>
  );
}
