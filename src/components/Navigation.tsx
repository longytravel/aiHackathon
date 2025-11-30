"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Brain, ChevronRight, Home, User, Lightbulb, Layers, Rocket, Sparkles } from "lucide-react";

const journeySteps = [
  { href: "/", label: "Start", icon: Home, time: "0:00" },
  { href: "/my-story", label: "My Story", icon: User, time: "0:00-13:00" },
  { href: "/the-revelation", label: "The Revelation", icon: Lightbulb, time: "13:00-18:00" },
  { href: "/framework", label: "The Framework", icon: Layers, time: "18:00-28:00" },
  { href: "/the-proof", label: "The Proof", icon: Rocket, time: "28:00-51:00" },
  { href: "/transformation", label: "Transform", icon: Sparkles, time: "51:00-60:00" },
];

export default function Navigation() {
  const pathname = usePathname();
  const currentIndex = journeySteps.findIndex((step) => step.href === pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-[#00d4ff]/10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#ffd700] flex items-center justify-center">
              <Brain className="w-5 h-5 text-[#0a0f1a]" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>
                Session 2
              </p>
              <p className="text-xs text-[#64748b]">The Art of Planning</p>
            </div>
          </Link>

          {/* Journey Progress */}
          <div className="hidden lg:flex items-center gap-1">
            {journeySteps.map((step, idx) => {
              const isActive = pathname === step.href;
              const isPast = idx < currentIndex;
              const Icon = step.icon;

              return (
                <div key={step.href} className="flex items-center">
                  <Link
                    href={step.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-[#00d4ff] text-[#0a0f1a]"
                        : isPast
                        ? "text-[#00d4ff] hover:bg-[#00d4ff]/10"
                        : "text-[#64748b] hover:text-[#94a3b8] hover:bg-[#162033]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{step.label}</span>
                  </Link>
                  {idx < journeySteps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-[#64748b]/50 mx-1" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Progress */}
          <div className="lg:hidden flex items-center gap-2">
            <span className="text-sm text-[#64748b]">
              {currentIndex + 1}/{journeySteps.length}
            </span>
            <div className="flex gap-1">
              {journeySteps.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx <= currentIndex ? "bg-[#00d4ff]" : "bg-[#64748b]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
