"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Play } from "lucide-react";

export default function TheRevelation() {
  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-[#ffd700] text-sm font-medium mb-4">ACT 2 | 13:00-18:00</p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The <span className="text-[#ffd700]">Revelation</span>
          </h1>
        </motion.div>

        {/* Eisenhower Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="quote-card p-8 mb-12"
        >
          <p className="text-2xl text-[#94a3b8] mb-4 italic">
            &quot;Plans are useless, but planning is indispensable.&quot;
          </p>
          <p className="text-[#64748b]">- Dwight D. Eisenhower</p>
          <p className="text-[#94a3b8] mt-4 text-sm">
            He led the D-Day invasion - the largest amphibious assault in history. The plan will change. That&apos;s fine. But the act of planning forces you to break work into pieces. To decide what matters first. To define what &apos;done&apos; looks like.
          </p>
        </motion.div>

        {/* The Whiteboard Metaphor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#00d4ff]" style={{ fontFamily: "Syne, sans-serif" }}>
            The Whiteboard Metaphor
          </h2>
          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#00d4ff]/5 border border-[#00d4ff]/30 rounded-2xl p-8">
            <p className="text-lg text-[#94a3b8] mb-4">
              Think of the AI&apos;s context window like a <span className="text-white font-semibold">whiteboard</span>.
            </p>
            <p className="text-lg text-[#94a3b8] mb-4">
              Everything you&apos;ve discussed in a session - your prompts, its responses, the code it&apos;s generated - gets written on that whiteboard.
            </p>
            <p className="text-lg text-[#94a3b8]">
              But the whiteboard has edges. When it fills up, the oldest stuff gets <span className="text-[#ef4444] font-semibold">erased</span> to make room for new stuff. The AI isn&apos;t being dumb. It literally <span className="text-white italic">cannot see</span> what fell off the whiteboard.
            </p>
          </div>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="video-placeholder cursor-pointer group">
            <Play className="w-20 h-20 text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-xl text-white font-semibold">Context Windows Explained</p>
            <p className="text-[#64748b] mb-2">The key concept that changes everything</p>
            <p className="text-sm text-[#00d4ff]">[ Video placeholder - add your YouTube embed here ]</p>
          </div>
        </motion.div>

        {/* The Mindset Shift */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-16 py-12"
        >
          <p className="text-[#ffd700] text-sm font-medium mb-6">THE MINDSET SHIFT</p>
          <h2
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            AI is your <span className="text-[#00d4ff]">developer</span>.
            <br />
            You are the <span className="text-[#ffd700]">architect</span>.
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto mb-8">
            Architects don&apos;t lay bricks. They don&apos;t wire electricity. They design the structure. They define what each room does. They specify how the pieces connect.
          </p>
          <p className="text-2xl text-white font-medium">That&apos;s you now.</p>
        </motion.div>

        {/* Karpathy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="quote-card p-8 mb-16"
        >
          <p className="text-3xl text-[#94a3b8] mb-4">
            &quot;The hottest new programming language is <span className="text-[#ffd700] font-bold">English</span>.&quot;
          </p>
          <p className="text-[#64748b]">- Andrej Karpathy, 2023</p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-between"
        >
          <Link
            href="/my-story"
            className="flex items-center gap-2 px-6 py-3 border border-[#00d4ff]/30 text-[#00d4ff] rounded-full hover:bg-[#00d4ff]/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            My Story
          </Link>
          <Link
            href="/framework"
            className="flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#0a0f1a] rounded-full font-semibold hover:bg-[#00b8d9] transition-all glow-cyan"
          >
            The Framework
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
