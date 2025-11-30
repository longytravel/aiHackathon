"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const timelineStages = [
  {
    stage: "1. Excitement",
    emoji: "ROCKET",
    color: "from-[#10b981]/20 to-[#10b981]/5",
    border: "border-[#10b981]/40",
    title: "Day One: The Dream",
    text: "I open Claude's web interface. I describe the whole system in one massive prompt. 'Build me this. Make it do that. Include safety checks. Handle edge cases.'",
    detail: "The AI starts generating code. Beautiful, flowing code. I copy it into my editor. It works! Parts of it, anyway. I'm convinced I'll ship this in a weekend.",
  },
  {
    stage: "2. Frustration",
    emoji: "GRIT",
    color: "from-[#f59e0b]/20 to-[#f59e0b]/5",
    border: "border-[#f59e0b]/40",
    title: "Day Two: The Grind",
    text: "The file is now 500 lines. Then 700. Then 1,000.",
    detail: "I'm copying code from the web chat, pasting it into VS Code. Back and forth. Copy. Paste. Fix one bug, three more appear. Momentum stalls.",
  },
  {
    stage: "3. Bug-fix Hell",
    emoji: "FIRE",
    color: "from-[#ef4444]/20 to-[#ef4444]/5",
    border: "border-[#ef4444]/50",
    title: "20 Hours In: Nothing Shipped",
    text: "The AI starts contradicting itself. 'Earlier you said X, now you're saying Y.'",
    detail: "I remember: this thing needs a safety check. But the codebase is already 1,000 lines of spaghetti. Adding safety means ripping apart everything I've built.",
  },
  {
    stage: "4. The Realisation",
    emoji: "LIGHT",
    color: "from-[#60a5fa]/20 to-[#60a5fa]/5",
    border: "border-[#60a5fa]/40",
    title: "The Moment Everything Changed",
    text: "I didn't have an AI problem. I had a PLANNING problem.",
    detail: "I was asking the AI to hold 1,000 lines of context in its head. AI has a limited working memory - the context window. I filled it to bursting and the model forgot what we agreed 400 lines ago.",
  },
  {
    stage: "5. Clarity",
    emoji: "SPARK",
    color: "from-[#00d4ff]/20 to-[#00d4ff]/5",
    border: "border-[#00d4ff]/40",
    title: "The Truth",
    text: "The AI wasn't broken. My approach was.",
    detail: "The only thing that needed to change was me and my plan.",
  },
];

export default function MyStory() {
  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-[#ef4444] text-sm font-medium mb-4">ACT 1 | 0:00-13:00</p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            I Was <span className="text-[#ef4444]">You</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            If you&apos;d asked me to build something with AI six months ago, I would have smiled politely and thought: &quot;That&apos;s for the technical people. I&apos;ll wait for IT.&quot;
          </p>
        </motion.div>

        {/* The Project Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="quote-card p-8 mb-16"
        >
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The Banking Communication System
          </h2>
          <p className="text-lg text-[#94a3b8] mb-4">
            The idea was beautiful: take those boring standardised bank letters - you know the ones, dense paragraphs nobody reads - and transform them into <span className="text-[#00d4ff] font-semibold">personalised digital voice notes</span>.
          </p>
          <p className="text-lg text-[#94a3b8]">
            Customers could actually <span className="text-white font-medium">hear</span> their updates instead of decoding legal jargon.
          </p>
          <p className="text-xl text-white mt-6 italic">
            I was buzzing. I had AI tools. I had ambition. How hard could it be?
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <h2
            className="text-2xl font-bold text-center mb-12"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            What Actually Happened
          </h2>

          <div className="space-y-6">
            {timelineStages.map((item, idx) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.15 }}
                className={`bg-gradient-to-r ${item.color} border ${item.border} rounded-2xl p-8`}
              >
                <div className="flex items-start gap-6">
                  <span className="text-2xl font-bold text-[#64748b] tracking-widest">{item.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-medium text-[#64748b]">{item.stage}</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-lg text-white mb-3">{item.text}</p>
                    <p className="text-[#94a3b8]">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Question */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mb-16"
        >
          <p className="text-2xl text-[#94a3b8] italic">
            &quot;Anyone here ever had that thought?<br />
            <span className="text-white">&apos;Maybe this just isn&apos;t for me&apos;?</span>&quot;
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-between"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 border border-[#00d4ff]/30 text-[#00d4ff] rounded-full hover:bg-[#00d4ff]/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <Link
            href="/the-revelation"
            className="flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#0a0f1a] rounded-full font-semibold hover:bg-[#00b8d9] transition-all glow-cyan"
          >
            The Revelation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
