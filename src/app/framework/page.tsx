"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Target, Layers, Zap, CheckCircle } from "lucide-react";

const frameworkItems = [
  {
    num: "01",
    title: "A Clear Problem Statement",
    icon: Target,
    bad: "\"Build me a cool AI tool\"",
    good: "\"Customer service spends 3 hours a day answering repeat emails about account balances. Build something that answers those automatically.\"",
    explanation: "If you start with vibes, the AI guesses. And it guesses wrong. But if you define the job to be done, the constraint, the success condition—now it understands.",
  },
  {
    num: "02",
    title: "Small Pieces (Modules)",
    icon: Layers,
    bad: "One massive 1,000 line file",
    good: "Email Reader → Topic Detector → Response Generator → Quality Checker",
    explanation: "Remember the whiteboard? You can't dump 'the whole system' on it. Plan small pieces. Each piece fits on the whiteboard. The AI can handle it brilliantly. Then you connect them.",
  },
  {
    num: "03",
    title: "Inputs & Outputs (Contracts)",
    icon: ArrowRight,
    bad: "\"Can you just make it better?\"",
    good: "\"Takes raw email text. Outputs one of five categories: Balance Inquiry, Transaction Dispute, Account Access, Card Issues, or Other.\"",
    explanation: "Every piece gets a little contract. 'Takes X, produces Y.' This is how you stop chaos. Clear. Testable. The AI can't misunderstand.",
  },
  {
    num: "04",
    title: "Build Order (Dependencies)",
    icon: Zap,
    bad: "Bolt safety on at the end",
    good: "Build the hallucination detector EARLY. Then build fancy features on top of the safety layer.",
    explanation: "In my disaster, I bolted on safety last. Catastrophic. Planned properly? Safety comes early. Less rework. More sleep.",
  },
  {
    num: "05",
    title: "Verification Strategy",
    icon: CheckCircle,
    bad: "\"Hope it works\"",
    good: "For each piece: What's a pass? What's a fail? How do I test it before connecting it to the next piece?",
    explanation: "AI will hallucinate. It will be confidently wrong. Planning isn't just 'what to build.' It's 'how will I know it's working?'",
  },
];

export default function Framework() {
  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-[#00d4ff] text-sm font-medium mb-4">ACT 2 • 18:00-28:00</p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The 5 Things AI Needs You to{" "}
            <span className="gradient-text">Plan</span>
          </h1>
          <p className="text-xl text-[#94a3b8]">
            This is how you go from chaos to clarity
          </p>
        </motion.div>

        {/* Framework Items */}
        <div className="space-y-8 mb-16">
          {frameworkItems.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="framework-card"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-[#00d4ff]" />
                  </div>
                  <p className="text-center text-3xl font-bold text-[#00d4ff]/20 mt-2">{item.num}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-[#94a3b8] mb-6">{item.explanation}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-xl p-4">
                      <p className="text-sm text-[#ef4444] font-medium mb-1">❌ DON&apos;T</p>
                      <p className="text-[#94a3b8]">{item.bad}</p>
                    </div>
                    <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl p-4">
                      <p className="text-sm text-[#10b981] font-medium mb-1">✓ DO</p>
                      <p className="text-[#94a3b8]">{item.good}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Drucker Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="quote-card p-8 mb-16 text-center"
        >
          <p className="text-xl text-[#94a3b8] mb-4 italic">
            &quot;Plans are only good intentions unless they immediately degenerate into hard work.&quot;
          </p>
          <p className="text-[#64748b] mb-4">— Peter Drucker</p>
          <p className="text-[#00d4ff] text-lg font-medium">
            Our &apos;hard work&apos; isn&apos;t coding. It&apos;s planning clearly enough that AI can execute for us.
          </p>
        </motion.div>

        {/* Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-[#ffd700]/10 to-[#ffd700]/5 border border-[#ffd700]/30 rounded-2xl p-8 mb-16 text-center"
        >
          <p className="text-xl text-[#94a3b8] mb-4">
            Quick question: Which of these five do you already do in your day job—completely outside of tech?
          </p>
          <p className="text-[#ffd700] font-medium">
            Defining the problem clearly? Breaking big projects into pieces? Setting success criteria?
          </p>
          <p className="text-white text-lg mt-4 font-medium">
            You already have these skills. We&apos;re just pointing them at AI.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-between"
        >
          <Link
            href="/the-revelation"
            className="flex items-center gap-2 px-6 py-3 border border-[#00d4ff]/30 text-[#00d4ff] rounded-full hover:bg-[#00d4ff]/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            The Revelation
          </Link>
          <Link
            href="/the-proof"
            className="flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#0a0f1a] rounded-full font-semibold hover:bg-[#00b8d9] transition-all glow-cyan"
          >
            See the Proof
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
