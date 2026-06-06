"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  ChartCandlestick,
  Check,
  ChevronRight,
  Github,
  Globe2,
  MessageCircle,
  MousePointer2,
  Send,
  Sparkles,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { features, links, posts, principles, reasons, stats, testimonials } from "@/data/site";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

function AnimatedSubtitle() {
  const labels = ["Crypto", "AI", "Modern Tools"];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-5 flex flex-wrap justify-center gap-2 text-sm font-medium text-white/70 sm:text-base"
    >
      {labels.map((label, index) => (
        <motion.span key={label} variants={item} className="flex items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
            {label}
          </span>
          {index < labels.length - 1 && <span className="text-cyan/80">•</span>}
        </motion.span>
      ))}
    </motion.div>
  );
}

function TiltCard({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { damping: 24, stiffness: 220 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { damping: 24, stiffness: 220 });

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [shown, setShown] = useState(value === "24/7" ? "0/7" : "0");

  useEffect(() => {
    if (!inView) return;
    const timer = window.setTimeout(() => setShown(value), 160);
    return () => window.clearTimeout(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
      <motion.p
        animate={{ opacity: inView ? 1 : 0.4, y: inView ? 0 : 8 }}
        className="text-3xl font-semibold text-white sm:text-4xl"
      >
        {shown}
      </motion.p>
      <p className="mt-2 text-sm text-white/52">{label}</p>
    </div>
  );
}

function TelegramMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-4xl overflow-hidden rounded-[8px] border border-white/10 bg-[#0b1018]/92 shadow-2xl shadow-cyan/10"
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/15 text-cyan">
            <Send size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">@learshyjourney</p>
            <p className="text-xs text-white/45">Crypto • AI • Tools</p>
          </div>
        </div>
        <div className="hidden rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs text-cyan sm:block">
          Live feed
        </div>
      </div>

      <div className="space-y-4 p-4 sm:p-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            className="group rounded-[8px] border border-white/10 bg-white/[0.045] p-4 transition hover:border-cyan/35 hover:bg-cyan/[0.06]"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="rounded-full bg-violet/15 px-3 py-1 text-xs font-medium text-violet">
                {post.tag}
              </span>
              <span className="text-xs text-white/38">{post.time}</span>
            </div>
            <h3 className="text-base font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/58">{post.body}</p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <LoadingOverlay />
      <CustomCursor />
      <Navbar />

      <main id="top" className="relative overflow-hidden">
        <section className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="grid-bg absolute inset-0 opacity-70" />
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan/18 blur-3xl"
            animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-violet/16 blur-3xl"
            animate={{ y: [0, -24, 0], opacity: [0.28, 0.5, 0.28] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/65 backdrop-blur"
            >
              <Sparkles size={14} className="text-cyan" />
              Telegram channel for modern digital operators
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl"
            >
              learshyjourney
            </motion.h1>

            <AnimatedSubtitle />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.75 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/62 sm:text-xl"
            >
              Daily updates about crypto, AI tools, automation, and modern digital resources.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.7 }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button href={links.channel} target="_blank" rel="noreferrer">
                Join Telegram <Send size={17} />
              </Button>
              <Button href="#preview" variant="secondary">
                Explore Content <ArrowRight size={17} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.75 }}
              className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {principles.map((principle) => (
                <div key={principle.title} className="glass rounded-[8px] p-4 text-left">
                  <principle.icon size={18} className="text-cyan" />
                  <p className="mt-3 text-sm font-semibold text-white">{principle.title}</p>
                  <p className="mt-1 text-xs leading-5 text-white/52">{principle.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <Section
          id="about"
          eyebrow="About channel"
          title="A clean signal feed for crypto, AI, tools, and internet workflows."
          description="learshyjourney is built for people who want fast context, useful resources, and modern digital workflows without scrolling through noisy feeds."
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                "Crypto updates",
                "AI ecosystem",
                "Productivity tools",
                "Automation workflow",
                "Digital resources",
                "Modern internet trends"
              ].map((topic) => (
                <motion.div key={topic} variants={item} className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                  <Check className="mb-4 text-cyan" size={19} />
                  <p className="font-medium text-white">{topic}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="glass rounded-[8px] p-6">
              <div className="mb-6 flex items-center gap-3">
                <BadgeCheck className="text-cyan" />
                <h3 className="text-xl font-semibold text-white">Why join</h3>
              </div>
              <div className="space-y-3">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-3 rounded-[8px] bg-white/[0.04] px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-cyan shadow-glow" />
                    <span className="text-sm text-white/72">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="features"
          eyebrow="Features"
          title="Everything curated for speed, clarity, and execution."
          description="Modern cards, quick reads, and practical resources for builders, creators, and operators."
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <TiltCard key={feature.title} className="group">
                <motion.article
                  variants={item}
                  className="relative h-full overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:bg-white/[0.07] hover:shadow-glow"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan/0 blur-2xl transition group-hover:bg-cyan/18" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.06] text-cyan">
                    <feature.icon size={21} />
                  </div>
                  <h3 className="relative mt-6 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-white/58">{feature.description}</p>
                </motion.article>
              </TiltCard>
            ))}
          </motion.div>
        </Section>

        <Section
          id="preview"
          eyebrow="Content preview"
          title="Telegram-style updates that feel clean, useful, and scannable."
          description="Preview of the kind of posts members can expect: market notes, AI tools, workflows, automation tutorials, and resource drops."
        >
          <TelegramMockup />
        </Section>

        <Section
          id="community"
          eyebrow="Community"
          title="Built around fast updates and useful digital trends."
          description="A focused channel for people who care about early signals, practical tools, and high-leverage internet workflows."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Counter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { title: "Growing Community", icon: Users },
              { title: "Active Discussions", icon: MessageCircle },
              { title: "Fast Updates", icon: Zap },
              { title: "Digital Trends", icon: TrendingUp },
              { title: "AI Workflows", icon: BrainCircuit },
              { title: "Crypto Signal", icon: ChartCandlestick }
            ].map((entry) => (
              <div key={entry.title} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] p-4">
                <entry.icon size={19} className="text-cyan" />
                <span className="text-sm font-medium text-white/76">{entry.title}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Testimonials"
          title="Simple feedback from people who like clean signal."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.figure
                key={testimonial.quote}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6"
              >
                <Sparkles className="text-violet" size={19} />
                <blockquote className="mt-6 text-lg font-medium leading-8 text-white">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-white/45">{testimonial.name}</figcaption>
              </motion.figure>
            ))}
          </div>
        </Section>

        <section className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-8 text-center shadow-violet backdrop-blur sm:p-14">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan/15 text-cyan">
              <MousePointer2 />
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-6xl">
              Join the Future of Digital Trends
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/58">
              Follow @learshyjourney for curated crypto updates, AI tools, automation workflows, and modern resources.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={links.channel} target="_blank" rel="noreferrer">
                Join @learshyjourney <ChevronRight size={17} />
              </Button>
              <Button href="https://web.telegram.org/" target="_blank" rel="noreferrer" variant="secondary">
                Open Telegram <Globe2 size={17} />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">learshyjourney</p>
            <p className="mt-1">© 2026 Learshy. Built for modern digital operators.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-cyan" href={links.channel} target="_blank" rel="noreferrer">
              Telegram channel
            </a>
            <a className="transition hover:text-cyan" href={links.owner} target="_blank" rel="noreferrer">
              @LearshyZx
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-cyan" href={links.github} target="_blank" rel="noreferrer">
              <Github size={15} /> Github
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
