"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen hero-gradient flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* The Hook - Fading in slowly */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mb-16"
        >
          <p className="text-3xl md:text-5xl text-[#94a3b8] font-light leading-relaxed">
            &quot;Six months ago, I was{" "}
            <motion.span
              initial={{ opacity: 0, color: "#94a3b8" }}
              animate={{ opacity: 1, color: "#ffffff" }}
              transition={{ delay: 1.5, duration: 1 }}
              className="font-medium"
            >
              terrified
            </motion.span>{" "}
            of this.&quot;
          </p>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            SESSION 2 | 60 MINUTES
          </div>

          <h1
            className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The Art of
            <br />
            <span className="gradient-text">Planning</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#94a3b8] mb-2">
            How I Stopped Fighting AI and Started Shipping
          </p>
          <p className="text-[#64748b] text-lg">
            A Journey from &quot;I Can&apos;t&quot; to &quot;I&apos;m Building&quot;
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="mt-12"
        >
          <Link
            href="/my-story"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#00d4ff] text-[#0a0f1a] rounded-full font-bold text-lg hover:bg-[#00b8d9] transition-all glow-cyan group"
          >
            Begin the Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <p className="text-[#64748b] text-sm italic">
            &quot;There&apos;s a new kind of coding I call &apos;vibe coding&apos;, where you fully give in to the vibes, embrace exponentials, and forget that the code even exists.&quot;
          </p>
          <p className="text-[#00d4ff] text-sm mt-2">â€” Andrej Karpathy, February 2025</p>
        </motion.div>
      </div>
    </main>
  );
}
