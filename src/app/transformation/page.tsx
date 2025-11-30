"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Sparkles } from "lucide-react";

export default function Transformation() {
  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-[#ffd700] text-sm font-medium mb-4">ACT 3 • 51:00-60:00</p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The <span className="gradient-text">Transformation</span>
          </h1>
        </motion.div>

        {/* Meta Demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-[#00d4ff]/10 to-[#ffd700]/10 border border-[#00d4ff]/30 rounded-2xl p-8 mb-12 text-center"
        >
          <Sparkles className="w-12 h-12 text-[#ffd700] mx-auto mb-4" />
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The Meta-Demonstration
          </h2>
          <p className="text-xl text-[#94a3b8] mb-8">
            This entire session—what you&apos;re experiencing right now—was built with AI using the same methodology I&apos;m teaching you.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="stat-card text-center">
              <p className="text-5xl font-bold text-[#00d4ff]">47</p>
              <p className="text-[#94a3b8]">User Stories</p>
            </div>
            <div className="stat-card text-center">
              <p className="text-5xl font-bold text-[#ffd700]">6</p>
              <p className="text-[#94a3b8]">Epics</p>
            </div>
            <div className="stat-card text-center">
              <p className="text-5xl font-bold text-[#10b981]">1</p>
              <p className="text-[#94a3b8]">Page Plan</p>
            </div>
          </div>
          <p className="text-[#64748b] mt-6">
            The product IS the proof. Not because I&apos;m a better coder. Because I&apos;m a better planner now.
          </p>
        </motion.div>

        {/* Industry Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2
            className="text-2xl font-bold text-center mb-8"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The Industry is <span className="gradient-text">Changing</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: "25%",
                desc: "of YC Winter 2025 startups have 95%+ AI-generated codebases",
                source: "Y Combinator",
              },
              {
                stat: "75%",
                desc: "of Replit customers never write a single line of code",
                source: "Replit",
              },
              {
                stat: "4.5M+",
                desc: "views on Karpathy's 'vibe coding' tweet",
                source: "Twitter/X",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="stat-card text-center"
              >
                <p className="text-4xl font-bold gradient-text mb-3">{item.stat}</p>
                <p className="text-[#94a3b8] text-sm mb-2">{item.desc}</p>
                <p className="text-[#00d4ff] text-xs">{item.source}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Return */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="quote-card p-8 mb-12"
        >
          <h3 className="text-xl font-bold mb-4 text-[#00d4ff]">The Return to the Hero&apos;s Journey</h3>
          <p className="text-lg text-[#94a3b8] mb-4">
            At the start, I said I was like you six months ago.
          </p>
          <p className="text-lg text-[#94a3b8] mb-4">
            &quot;Not technical enough.&quot; &quot;I&apos;ll let IT handle that.&quot;
          </p>
          <p className="text-lg text-white">
            The only thing that changed was this: I learned to plan for AI like an architect, not like a desperate person shouting at a magic box.
          </p>
          <p className="text-lg text-[#94a3b8] mt-4">
            That is literally the gap between me burning 20 hours... and me using AI to build this entire training program.
          </p>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center mb-16 py-12"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            From &quot;I Can&apos;t&quot; to
            <br />
            &quot;I&apos;m <span className="gradient-text">Building</span>&quot;
          </h2>
          <p className="text-xl text-[#94a3b8] mb-4 max-w-2xl mx-auto">
            You do not need to become a hardcore developer.
            <br />
            You need to become <span className="text-white font-medium">ruthless about planning clearly</span>.
          </p>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Let AI be the one typing late into the night. Your job is to tell it what to build and how you&apos;ll know it worked.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center mb-16"
        >
          <a
            href="https://github.com/longytravel/bankingCommunicationSystem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#00d4ff] text-[#0a0f1a] rounded-full font-bold text-lg hover:bg-[#00b8d9] transition-all glow-cyan mb-6"
          >
            <Github className="w-6 h-6" />
            Explore the Code
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-[#64748b] text-sm">
            Session 3 is where we pick your real problems and tune these plans. After that: build time.
          </p>
        </motion.div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center mb-16 py-8 border-t border-b border-[#00d4ff]/20"
        >
          <p className="text-2xl text-[#94a3b8] italic mb-4">
            &quot;That&apos;s how you go from &apos;I can&apos;t&apos;... to &apos;I&apos;m building.&apos;&quot;
          </p>
          <p className="text-[#00d4ff] font-medium">See you in Session 3.</p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-between"
        >
          <Link
            href="/the-proof"
            className="flex items-center gap-2 px-6 py-3 border border-[#00d4ff]/30 text-[#00d4ff] rounded-full hover:bg-[#00d4ff]/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            The Proof
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-4 bg-[#ffd700] text-[#0a0f1a] rounded-full font-semibold hover:bg-[#e5c100] transition-all"
          >
            Start Over
            <Sparkles className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
