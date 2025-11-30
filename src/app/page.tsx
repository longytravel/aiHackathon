"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ArrowRight,
  Code2,
  Brain,
  Zap,
  Target,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Github,
  ExternalLink,
  ChevronDown,
  Lightbulb,
  FileCode,
  Mic,
  Shield,
  BarChart3,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Home() {
  const [activeAct, setActiveAct] = useState(1);
  const [activeModule, setActiveModule] = useState("hallucination");

  return (
    <main className="relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-[#00d4ff]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#ffd700] flex items-center justify-center">
              <Brain className="w-5 h-5 text-[#0a0f1a]" />
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
              AI Hackathon
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#acts" className="text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors">
              The Journey
            </a>
            <a href="#framework" className="text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors">
              Framework
            </a>
            <a href="#demo" className="text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors">
              Live Demo
            </a>
            <a href="#code" className="text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors">
              Code
            </a>
            <a
              href="https://github.com/longytravel/bankingCommunicationSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-sm text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all"
            >
              <Github className="w-4 h-4" />
              View Repo
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen hero-gradient flex items-center justify-center pt-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            SESSION 2
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The Art of{" "}
            <span className="gradient-text">Planning</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#94a3b8] mb-4 max-w-3xl mx-auto"
          >
            How I Stopped Fighting AI and Started Shipping
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-[#64748b] mb-12 max-w-2xl mx-auto"
          >
            A 60-Minute Journey from &quot;I Can&apos;t&quot; to &quot;I&apos;m Building&quot;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#acts"
              className="flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#0a0f1a] rounded-full font-semibold hover:bg-[#00b8d9] transition-all glow-cyan"
            >
              Start the Journey
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="flex items-center gap-2 px-8 py-4 border border-[#00d4ff]/30 text-[#00d4ff] rounded-full font-semibold hover:bg-[#00d4ff]/10 transition-all"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-[#00d4ff]/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="quote-card p-8 md:p-12"
          >
            <p className="text-xl md:text-2xl text-[#94a3b8] leading-relaxed mb-6 relative z-10">
              &quot;There&apos;s a new kind of coding I call{" "}
              <span className="text-[#00d4ff] font-semibold">&apos;vibe coding&apos;</span>, where you
              fully give in to the vibes, embrace exponentials, and forget that the code even
              exists.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#ffd700]" />
              <div>
                <p className="font-semibold text-white">Andrej Karpathy</p>
                <p className="text-sm text-[#64748b]">Co-founder of OpenAI, February 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Three Acts */}
      <section id="acts" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              The Hero&apos;s Journey
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
              You walk in thinking &quot;I&apos;m not technical enough.&quot; You walk out knowing the secret.
            </motion.p>
          </motion.div>

          {/* Act Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 1, title: "I Was You", time: "0:00-13:00", icon: AlertCircle },
              { id: 2, title: "What AI Needs", time: "13:00-28:00", icon: Lightbulb },
              { id: 3, title: "Becoming Builders", time: "28:00-60:00", icon: Zap },
            ].map((act) => (
              <button
                key={act.id}
                onClick={() => setActiveAct(act.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all ${
                  activeAct === act.id
                    ? "bg-[#00d4ff] border-[#00d4ff] text-[#0a0f1a]"
                    : "bg-transparent border-[#00d4ff]/20 text-[#94a3b8] hover:border-[#00d4ff]/50"
                }`}
              >
                <act.icon className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-semibold">ACT {act.id}</p>
                  <p className="text-sm opacity-75">{act.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Act Content */}
          <AnimatePresence mode="wait">
            {activeAct === 1 && (
              <motion.div
                key="act1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* The Disaster Story Timeline */}
                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { stage: "Excitement", color: "stage-excitement", icon: "🎯", desc: "Day one. Beautiful code flowing. This is going to be easy!" },
                    { stage: "Frustration", color: "stage-frustration", icon: "😤", desc: "500 lines... 700... 1000. Copy-paste like it's 1998." },
                    { stage: "Bug-fix Hell", color: "stage-hell", icon: "🔥", desc: "Fix one bug, three more appear. 20 hours in. Nothing shipped." },
                    { stage: "Breakthrough", color: "stage-breakthrough", icon: "💡", desc: "I didn't have an AI problem. I had a PLANNING problem." },
                    { stage: "Clarity", color: "stage-clarity", icon: "✨", desc: "The AI wasn't broken. My approach was." },
                  ].map((item, idx) => (
                    <div
                      key={item.stage}
                      className={`${item.color} rounded-xl p-6 text-center`}
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h4 className="font-bold mb-2">{item.stage}</h4>
                      <p className="text-sm text-[#94a3b8]">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Video Placeholder */}
                <div className="video-placeholder cursor-pointer group">
                  <Play className="w-16 h-16 text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-[#94a3b8] font-medium">The Disaster Story</p>
                  <p className="text-sm text-[#64748b]">Video coming soon</p>
                </div>

                <div className="quote-card p-8">
                  <p className="text-lg text-[#94a3b8] mb-4">
                    &quot;Think of the AI&apos;s context window like a whiteboard. Everything you&apos;ve discussed gets written on that whiteboard. But the whiteboard has edges. When it fills up, the oldest stuff gets erased.&quot;
                  </p>
                  <p className="text-[#00d4ff] font-semibold">The Whiteboard Metaphor</p>
                </div>
              </motion.div>
            )}

            {activeAct === 2 && (
              <motion.div
                key="act2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="quote-card p-8 mb-8">
                  <p className="text-2xl font-bold text-white mb-2">
                    AI is your developer. You are the <span className="text-[#00d4ff]">architect</span>.
                  </p>
                  <p className="text-[#94a3b8]">
                    Architects don&apos;t lay bricks. They design the structure. That&apos;s you now.
                  </p>
                </div>

                <div className="quote-card p-8">
                  <p className="text-xl text-[#94a3b8] mb-4">
                    &quot;The hottest new programming language is <span className="text-[#ffd700] font-bold">English</span>.&quot;
                  </p>
                  <p className="text-sm text-[#64748b]">— Andrej Karpathy, 2023</p>
                </div>

                <div className="video-placeholder cursor-pointer group">
                  <Play className="w-16 h-16 text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-[#94a3b8] font-medium">The Mindset Shift</p>
                  <p className="text-sm text-[#64748b]">Video coming soon</p>
                </div>
              </motion.div>
            )}

            {activeAct === 3 && (
              <motion.div
                key="act3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#ffd700]/10 border border-[#00d4ff]/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                    The Meta-Demonstration
                  </h3>
                  <p className="text-[#94a3b8] text-lg mb-6">
                    This entire session—what you&apos;re experiencing right now—was built with AI using the same methodology I&apos;m teaching you.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="stat-card text-center">
                      <p className="text-4xl font-bold text-[#00d4ff]">47</p>
                      <p className="text-[#94a3b8]">User Stories</p>
                    </div>
                    <div className="stat-card text-center">
                      <p className="text-4xl font-bold text-[#ffd700]">6</p>
                      <p className="text-[#94a3b8]">Epics</p>
                    </div>
                    <div className="stat-card text-center">
                      <p className="text-4xl font-bold text-[#10b981]">1</p>
                      <p className="text-[#94a3b8]">Page Plan</p>
                    </div>
                  </div>
                </div>

                <div className="video-placeholder cursor-pointer group">
                  <Play className="w-16 h-16 text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-[#94a3b8] font-medium">The Proof: Building with AI</p>
                  <p className="text-sm text-[#64748b]">Video coming soon</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* The 5 Things Framework */}
      <section id="framework" className="py-24 px-6 bg-[#0f1729]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              The 5 Things AI Needs You to <span className="gradient-text">Plan</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
              This is how you go from chaos to clarity
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "A Clear Problem Statement",
                desc: "If you start with 'Build me a cool AI tool,' the AI guesses. And it guesses wrong.",
                example: "'Customer service spends 3 hours a day answering repeat emails. Build something that answers those automatically.'",
                icon: Target,
              },
              {
                num: "02",
                title: "Small Pieces (Modules)",
                desc: "Remember the whiteboard? You can't dump 'the whole system' on it.",
                example: "'Email Reader' → 'Topic Detector' → 'Response Generator' → 'Quality Checker'",
                icon: Code2,
              },
              {
                num: "03",
                title: "Inputs & Outputs (Contracts)",
                desc: "Every piece gets a little contract. 'Takes X, produces Y.'",
                example: "'Topic Detector takes raw email text. Outputs: Balance Inquiry, Transaction Dispute, Account Access, Card Issues, or Other.'",
                icon: ArrowRight,
              },
              {
                num: "04",
                title: "Build Order (Dependencies)",
                desc: "Safety first. Build the hallucination detector EARLY, not last.",
                example: "Don't bolt on safety at the end. Build it into the foundation.",
                icon: Zap,
              },
              {
                num: "05",
                title: "Verification Strategy",
                desc: "AI will hallucinate. It will be confidently wrong.",
                example: "For each piece: What's a pass? What's a fail? How do I test it before connecting it to the next piece?",
                icon: CheckCircle,
              },
            ].map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="framework-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <span className="text-4xl font-bold text-[#00d4ff]/20">{item.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#94a3b8] mb-4">{item.desc}</p>
                <div className="bg-[#0a0f1a] rounded-lg p-4 text-sm text-[#64748b] border-l-2 border-[#00d4ff]">
                  {item.example}
                </div>
              </motion.div>
            ))}

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="framework-card flex flex-col justify-center"
            >
              <p className="text-lg text-[#94a3b8] mb-4 italic">
                &quot;Plans are only good intentions unless they immediately degenerate into hard work.&quot;
              </p>
              <p className="text-sm text-[#64748b]">— Peter Drucker</p>
              <p className="text-[#00d4ff] mt-4 font-medium">
                Our &apos;hard work&apos; isn&apos;t coding. It&apos;s planning clearly enough that AI can execute for us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              The <span className="gradient-text">Banking Communication System</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
              Transform boring standardized bank letters into personalized digital voice notes.
              Built with AI using the methodology you just learned.
            </motion.p>
          </motion.div>

          {/* Architecture Diagram */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { name: "Letter Input", icon: FileCode, color: "#00d4ff" },
              { name: "AI Brain", icon: Brain, color: "#ffd700" },
              { name: "Voice Generator", icon: Mic, color: "#10b981" },
              { name: "Safety Check", icon: Shield, color: "#ef4444" },
            ].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="module-card p-6 text-center"
              >
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}40` }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h4 className="font-bold">{item.name}</h4>
                {idx < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-[#00d4ff]/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Main Demo Video */}
          <div className="video-placeholder cursor-pointer group mb-8">
            <Play className="w-20 h-20 text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-xl text-white font-semibold">Full System Demo</p>
            <p className="text-[#64748b]">Watch the Banking Communication System in action</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Modules", value: "8+", icon: Code2 },
              { label: "Languages", value: "15", icon: Users },
              { label: "AI Accuracy", value: "95%+", icon: TrendingUp },
              { label: "Build Time", value: "2 Days", icon: Clock },
            ].map((stat) => (
              <div key={stat.label} className="stat-card text-center">
                <stat.icon className="w-6 h-6 text-[#00d4ff] mx-auto mb-2" />
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-[#64748b]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Showcase */}
      <section id="code" className="py-24 px-6 bg-[#0f1729]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Modular <span className="gradient-text">Architecture</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
              Each module does ONE thing well. Small pieces. Clear contracts. This is the way.
            </motion.p>
          </motion.div>

          {/* Module Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { id: "hallucination", name: "Hallucination Detector", icon: Shield },
              { id: "voice", name: "Voice Generator", icon: Mic },
              { id: "sentiment", name: "Sentiment Analyzer", icon: BarChart3 },
              { id: "main", name: "Main App", icon: Code2 },
            ].map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                  activeModule === mod.id
                    ? "bg-[#00d4ff] text-[#0a0f1a]"
                    : "bg-[#0a0f1a] border border-[#00d4ff]/20 text-[#94a3b8] hover:border-[#00d4ff]/50"
                }`}
              >
                <mod.icon className="w-4 h-4" />
                {mod.name}
              </button>
            ))}
          </div>

          {/* Code Preview */}
          <div className="bg-[#0a0f1a] rounded-2xl border border-[#00d4ff]/20 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0f1729] border-b border-[#00d4ff]/10">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#ffd700]" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              <span className="ml-4 text-sm text-[#64748b] font-mono">
                {activeModule === "hallucination" && "hallucination_detector.py"}
                {activeModule === "voice" && "voice_note_generator_enhanced.py"}
                {activeModule === "sentiment" && "sentiment_analyzer_banking.py"}
                {activeModule === "main" && "main_modular.py"}
              </span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              {activeModule === "hallucination" && (
                <pre className="text-[#94a3b8]">
{`class HallucinationDetector:
    """
    AI-Powered Hallucination Detector
    Uses Claude Sonnet to identify fabricated content
    """

    def detect_hallucinations(
        self,
        generated_content: Dict[str, str],
        original_letter: str,
        customer_data: Dict[str, Any],
    ) -> HallucinationReport:
        """
        Main method to detect hallucinations

        Returns:
            HallucinationReport with all findings
        """
        # Build truth database from source data
        truth_db = self._build_truth_database(
            original_letter,
            customer_data
        )

        # Analyze each channel
        all_findings = []
        for channel, content in generated_content.items():
            findings = self._analyze_channel(
                channel, content, truth_db
            )
            all_findings.extend(findings)

        return HallucinationReport(
            total_hallucinations=len(all_findings),
            findings=all_findings,
            risk_score=self._calculate_risk_score(all_findings)
        )`}
                </pre>
              )}
              {activeModule === "voice" && (
                <pre className="text-[#94a3b8]">
{`class SmartVoiceGenerator:
    """
    Smart Voice Note Generator with Audio Generation
    Creates both scripts and playable audio files
    Supports 15+ languages!
    """

    VOICE_CONFIG = {
        'greetings': {
            'English': {
                'DIGITAL': 'Hi {name}, this is Sarah from Lloyds',
                'TRADITIONAL': 'Good {time} {title} {last_name}...'
            },
            'Spanish': {
                'DIGITAL': 'Hola {name}, soy Sarah de Lloyds',
                ...
            },
            'French': { ... },
            'German': { ... },
            'Chinese': { ... },
            'Japanese': { ... },
            # 15+ languages supported!
        }
    }

    def generate_voice_note(self, context) -> VoiceResult:
        # Generate script with AI
        script = self._generate_with_ai(context)

        # Generate actual audio file
        audio_path = self._generate_audio(script)

        return VoiceResult(
            content=script,
            audio_file_path=audio_path,
            language=context.language
        )`}
                </pre>
              )}
              {activeModule === "sentiment" && (
                <pre className="text-[#94a3b8]">
{`class BankingSentimentAnalyzer:
    """
    Banking-specific sentiment analyzer
    with FULL explanations
    """

    def analyze(self, email_content: str) -> Dict:
        """
        Analyze email with banking metrics:
        - Compliance (FCA TCF principles)
        - Customer Impact (complaint risk)
        - NPS Impact (promoter risk)
        - Emotional Tone
        - Regulatory Flags
        """

        result = self._run_ai_analysis(email_content)

        return {
            "overall_score": result['score'],
            "ready_to_send": result['compliant'],
            "compliance": {
                "tcf_compliant": True,
                "score": 95
            },
            "nps_impact": {
                "predicted_impact": +2,
                "why": "Warm, personalized tone..."
            },
            "red_flags": [],
            "quick_wins": [...]
        }`}
                </pre>
              )}
              {activeModule === "main" && (
                <pre className="text-[#94a3b8]">
{`class PersonalizationApp:
    """
    Lloyds AI Personalization Engine
    Modular Architecture
    """

    def __init__(self):
        # Each module is independent!
        self.generators = {
            'email': SmartEmailGenerator(),
            'sms': SmartSMSGenerator(),
            'letter': SmartLetterGenerator(),
            'voice': SmartVoiceGenerator()  # 15+ languages!
        }

        # Safety first - built into the foundation
        self.hallucination_detector = HallucinationDetector()
        self.sentiment_analyzer = BankingSentimentAnalyzer()

    def process_customer(self, letter, customer):
        # 1. Analyze with Shared Brain
        context = self.shared_brain.analyze(letter, customer)

        # 2. Generate for each channel
        results = {}
        for channel, generator in self.generators.items():
            results[channel] = generator.generate(context)

        # 3. Run hallucination detection (BUILT IN!)
        hallucinations = self.hallucination_detector.detect(
            results, letter, customer
        )

        return results, hallucinations`}
                </pre>
              )}
            </div>
          </div>

          {/* GitHub Link */}
          <div className="text-center mt-8">
            <a
              href="https://github.com/longytravel/bankingCommunicationSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all"
            >
              <Github className="w-5 h-5" />
              View Full Source Code
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              The <span className="gradient-text">Industry</span> is Changing
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "25%",
                desc: "of YC Winter 2025 startups have codebases that are 95%+ AI-generated",
                source: "Y Combinator",
              },
              {
                stat: "75%",
                desc: "of Replit customers never write a single line of code",
                source: "Replit",
              },
              {
                stat: "4.5M+",
                desc: "views on Karpathy's 'vibe coding' tweet that popularized the term",
                source: "Twitter/X",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="stat-card text-center"
              >
                <p className="text-5xl font-bold gradient-text mb-4">{item.stat}</p>
                <p className="text-[#94a3b8] mb-4">{item.desc}</p>
                <p className="text-sm text-[#00d4ff]">{item.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f1729] to-[#0a0f1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              From &quot;I Can&apos;t&quot; to &quot;I&apos;m <span className="gradient-text">Building</span>&quot;
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto">
              You do not need to become a hardcore developer. You need to become ruthless about planning clearly.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg text-[#64748b] mb-12">
              Let AI be the one typing late into the night. Your job is to tell it what to build and how you&apos;ll know it worked.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/longytravel/bankingCommunicationSystem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#0a0f1a] rounded-full font-semibold hover:bg-[#00b8d9] transition-all glow-cyan"
              >
                <Github className="w-5 h-5" />
                Explore the Code
              </a>
              <a
                href="#framework"
                className="flex items-center gap-2 px-8 py-4 border border-[#00d4ff]/30 text-[#00d4ff] rounded-full font-semibold hover:bg-[#00d4ff]/10 transition-all"
              >
                Review the Framework
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#00d4ff]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#ffd700] flex items-center justify-center">
              <Brain className="w-5 h-5 text-[#0a0f1a]" />
            </div>
            <div>
              <p className="font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
                AI Hackathon
              </p>
              <p className="text-sm text-[#64748b]">Session 2: The Art of Planning</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/longytravel/bankingCommunicationSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-[#64748b]">
            Built with AI, by <span className="text-[#00d4ff]">Longy</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
