"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Play,
  Mail,
  MessageSquare,
  Volume2,
  Shield,
  Brain,
  Mic,
  Eye,
  CheckCircle,
  AlertTriangle,
  Github,
  ExternalLink,
} from "lucide-react";

const modules = [
  {
    id: "shared-brain",
    name: "Shared Brain",
    icon: Brain,
    color: "#ffd700",
    desc: "Analyzes letter + customer data ONCE. All modules share this intelligence.",
    input: "Raw letter text + Customer CSV data",
    output: "SharedContext object with insights, personalization strategy, tone",
    code: `class SharedBrain:
    """
    The intelligence layer
    Analyzes ONCE, shares everywhere
    """

    def analyze_everything(self, letter, customer):
        # Extract key points from letter
        key_points = self._extract_key_points(letter)

        # Build customer profile
        profile = self._build_profile(customer)

        # Determine personalization strategy
        strategy = self._determine_strategy(profile)

        return SharedContext(
            key_points=key_points,
            customer=profile,
            strategy=strategy
        )`,
  },
  {
    id: "voice-gen",
    name: "Voice Generator",
    icon: Mic,
    color: "#10b981",
    desc: "Creates audio voice notes in 15+ languages using OpenAI TTS.",
    input: "SharedContext with personalization strategy",
    output: "VoiceResult with .mp3 file path and transcript",
    code: `class SmartVoiceGenerator:
    """
    Voice notes in 15+ languages
    OpenAI TTS integration
    """

    SUPPORTED_LANGUAGES = [
        'English', 'Spanish', 'French',
        'German', 'Chinese', 'Japanese',
        'Arabic', 'Hindi', 'Portuguese'...
    ]

    def generate(self, context):
        # Generate personalized script
        script = self._create_script(context)

        # Convert to audio
        audio = self._text_to_speech(script)

        return VoiceResult(
            content=script,
            audio_file=audio,
            language=context.language
        )`,
  },
  {
    id: "hallucination",
    name: "Hallucination Detector",
    icon: Eye,
    color: "#ef4444",
    desc: "Uses Claude to verify AI output against source data. Catches lies.",
    input: "Generated content + Original letter + Customer data",
    output: "HallucinationReport with findings and risk score",
    code: `class HallucinationDetector:
    """
    Safety built into the foundation
    NOT bolted on at the end
    """

    def detect(self, generated, original, customer):
        # Build truth database
        truth = self._build_truth_db(original, customer)

        # Check each claim in generated content
        findings = []
        for claim in self._extract_claims(generated):
            if not self._verify_claim(claim, truth):
                findings.append(HallucinationFinding(
                    claim=claim,
                    severity='HIGH'
                ))

        return HallucinationReport(
            findings=findings,
            risk_score=self._calculate_risk(findings)
        )`,
  },
  {
    id: "sentiment",
    name: "Sentiment Analyzer",
    icon: Shield,
    color: "#60a5fa",
    desc: "Checks FCA compliance, NPS impact, customer complaint risk.",
    input: "Generated email content",
    output: "BankingSentimentReport with compliance scores",
    code: `class BankingSentimentAnalyzer:
    """
    Banking-specific analysis
    FCA TCF compliance checking
    """

    def analyze(self, content):
        return {
            'compliance': {
                'tcf_compliant': True,
                'score': 95
            },
            'nps_impact': {
                'predicted': +2,
                'reason': 'Warm, personal tone'
            },
            'complaint_risk': 'LOW',
            'ready_to_send': True
        }`,
  },
];

export default function TheProof() {
  const [activeView, setActiveView] = useState<"before" | "after">("before");
  const [activeModule, setActiveModule] = useState<string | null>(null);

  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[#ffd700] text-sm font-medium mb-4">ACT 3 • 28:00-51:00</p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            The <span className="gradient-text">Proof</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            The same project that broke me... rebuilt with proper planning.
            <br />
            <span className="text-white font-medium">Touch it. Explore it. This is real.</span>
          </p>
        </motion.div>

        {/* Before/After Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveView("before")}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
              activeView === "before"
                ? "bg-[#ef4444] text-white glow-cyan"
                : "bg-[#0a0f1a] border-2 border-[#ef4444]/30 text-[#ef4444] hover:border-[#ef4444]"
            }`}
          >
            ❌ Before: The Problem
          </button>
          <button
            onClick={() => setActiveView("after")}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
              activeView === "after"
                ? "bg-[#10b981] text-white"
                : "bg-[#0a0f1a] border-2 border-[#10b981]/30 text-[#10b981] hover:border-[#10b981]"
            }`}
          >
            ✓ After: The Solution
          </button>
        </motion.div>

        {/* Before/After Content */}
        <AnimatePresence mode="wait">
          {activeView === "before" && (
            <motion.div
              key="before"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="mb-16"
            >
              <div className="bg-[#0a0f1a] rounded-2xl border-2 border-[#ef4444]/30 p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#ef4444]">The Boring Bank Letter</h3>
                <div className="bg-white text-black rounded-xl p-8 font-serif leading-relaxed shadow-2xl">
                  <p className="font-bold text-lg mb-4">Important: Changes to your account terms and conditions</p>
                  <p className="mb-4">Dear [Customer Name],</p>
                  <p className="mb-4 text-sm">
                    We are writing to inform you of important changes to the terms and conditions of your [Account Name] with Lloyds Bank (account number: [XXXXXX]). These changes will take effect on [Effective Date], in accordance with clause [X] of your current account agreement and in line with our obligations under the Payment Services Regulations 2017.
                  </p>
                  <p className="font-bold mb-2">Summary of changes</p>
                  <p className="mb-4 text-sm">From [Effective Date], we are:</p>
                  <ul className="list-disc ml-6 mb-4 text-sm space-y-2">
                    <li>Changing the way we calculate overdraft interest: Interest will be calculated using a daily rate based on the end-of-day balance...</li>
                    <li>Revising the fees associated with unpaid transactions: The fee for returning an unpaid Direct Debit will increase from £5 to £7.50...</li>
                    <li>Updating your rights to cancel certain transactions...</li>
                  </ul>
                  <p className="text-gray-500 italic text-sm">...continues for 3 more paragraphs of legal jargon...</p>
                </div>
                <div className="mt-6 text-center">
                  <AlertTriangle className="inline w-6 h-6 mr-2 text-[#f59e0b]" />
                  <span className="text-[#94a3b8] text-lg">Dense. Impersonal. Nobody reads these.</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeView === "after" && (
            <motion.div
              key="after"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="mb-16"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personalised Email */}
                <div className="bg-[#0a0f1a] rounded-2xl border border-[#00d4ff]/30 p-6 hover:border-[#00d4ff] transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#00d4ff]" />
                    </div>
                    <span className="font-bold text-lg">Personalised Email</span>
                  </div>
                  <div className="bg-[#162033] rounded-xl p-5">
                    <p className="text-[#94a3b8]">
                      Hi Sarah,
                      <br /><br />
                      We know you&apos;ve been with us for <span className="text-[#00d4ff] font-semibold">12 years</span> - and we genuinely value that loyalty.
                      <br /><br />
                      There are some changes coming to your Club Lloyds account that we wanted to explain in <span className="text-white">plain English</span>...
                    </p>
                  </div>
                </div>

                {/* Voice Note */}
                <div className="bg-[#0a0f1a] rounded-2xl border border-[#10b981]/30 p-6 hover:border-[#10b981] transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#10b981]/20 flex items-center justify-center">
                      <Volume2 className="w-5 h-5 text-[#10b981]" />
                    </div>
                    <span className="font-bold text-lg">Voice Note</span>
                    <span className="text-xs bg-[#10b981]/20 text-[#10b981] px-2 py-1 rounded-full">15+ languages!</span>
                  </div>
                  <div className="bg-[#162033] rounded-xl p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-[#10b981]/20 flex items-center justify-center cursor-pointer hover:bg-[#10b981]/30 transition-all">
                        <Play className="w-7 h-7 text-[#10b981]" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Sarah&apos;s Personal Update</p>
                        <p className="text-[#64748b] text-sm">0:45 • English (UK)</p>
                      </div>
                    </div>
                    <p className="text-[#94a3b8] text-sm italic">
                      &quot;Hi Sarah, this is Lloyds calling with a quick update about your account. I know you&apos;ve been with us for over a decade, and I wanted to personally explain...&quot;
                    </p>
                  </div>
                </div>

                {/* SMS */}
                <div className="bg-[#0a0f1a] rounded-2xl border border-[#ffd700]/30 p-6 hover:border-[#ffd700] transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ffd700]/20 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-[#ffd700]" />
                    </div>
                    <span className="font-bold text-lg">Smart SMS</span>
                  </div>
                  <div className="bg-[#162033] rounded-xl p-5">
                    <p className="text-[#94a3b8]">
                      Hi Sarah! Quick heads up about your Club Lloyds account. We&apos;ve sent you a voice note + email with the details. Tap here to listen: [link]
                    </p>
                  </div>
                </div>

                {/* Safety Check */}
                <div className="bg-[#0a0f1a] rounded-2xl border border-[#ef4444]/30 p-6 hover:border-[#ef4444] transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ef4444]/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#ef4444]" />
                    </div>
                    <span className="font-bold text-lg">Hallucination Detection</span>
                  </div>
                  <div className="bg-[#162033] rounded-xl p-5">
                    <div className="flex items-center gap-2 text-[#10b981] mb-3">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">0 hallucinations detected</span>
                    </div>
                    <p className="text-[#64748b] text-sm">AI verified all facts against source letter and customer data. Safe to send.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Touch the Modules
          </h2>
          <p className="text-center text-[#64748b] mb-8">
            Click any module to see its code and how it works
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((mod) => (
              <motion.div
                key={mod.id}
                onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
                className="module-card p-6 cursor-pointer transition-all"
                style={{
                  borderColor: activeModule === mod.id ? mod.color : undefined,
                  boxShadow: activeModule === mod.id ? `0 0 0 2px ${mod.color}` : undefined
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${mod.color}20` }}
                >
                  <mod.icon className="w-7 h-7" style={{ color: mod.color }} />
                </div>
                <h4 className="font-bold text-lg mb-2">{mod.name}</h4>
                <p className="text-sm text-[#64748b]">{mod.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Expanded Module View */}
          <AnimatePresence>
            {activeModule && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6"
              >
                {modules
                  .filter((m) => m.id === activeModule)
                  .map((mod) => (
                    <div
                      key={mod.id}
                      className="bg-[#0a0f1a] rounded-2xl border p-6"
                      style={{ borderColor: `${mod.color}50` }}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-xl mb-4" style={{ color: mod.color }}>
                            {mod.name}
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-[#10b981] font-medium mb-1">INPUT</p>
                              <p className="text-[#94a3b8]">{mod.input}</p>
                            </div>
                            <div>
                              <p className="text-sm text-[#00d4ff] font-medium mb-1">OUTPUT</p>
                              <p className="text-[#94a3b8]">{mod.output}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-[#64748b] font-medium mb-2">CODE PREVIEW</p>
                          <pre className="bg-[#162033] rounded-xl p-4 text-xs text-[#94a3b8] overflow-x-auto">
                            {mod.code}
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <a
            href="https://github.com/longytravel/bankingCommunicationSystem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#00d4ff] text-[#0a0f1a] rounded-full font-bold text-lg hover:bg-[#00b8d9] transition-all glow-cyan"
          >
            <Github className="w-6 h-6" />
            Explore the Full Codebase
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-between"
        >
          <Link
            href="/framework"
            className="flex items-center gap-2 px-6 py-3 border border-[#00d4ff]/30 text-[#00d4ff] rounded-full hover:bg-[#00d4ff]/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            The Framework
          </Link>
          <Link
            href="/transformation"
            className="flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#0a0f1a] rounded-full font-semibold hover:bg-[#00b8d9] transition-all glow-cyan"
          >
            The Transformation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
