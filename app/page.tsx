"use client"

import { Search, Mic, ArrowUp } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  const playAnimation = () => {
    setIsAnimating(true)
    // Reset after animation completes (0.7s + 0.2s delay = 0.9s, plus buffer)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4 relative overflow-hidden">
      <button
        onClick={playAnimation}
        disabled={isAnimating}
        className={`absolute top-8 left-1/2 -translate-x-1/2 py-2 text-sm border-gray-600 transition-colors z-30 bg-[rgba(255,255,255,0.11956521739130435)] border-0 rounded-full px-[18px] ${
          isAnimating
            ? "text-[rgba(203,203,203,0.4)] cursor-not-allowed"
            : "text-[rgba(203,203,203,1)] hover:text-gray-200 hover:bg-[rgba(255,255,255,0.2)] hover:border-gray-400 cursor-pointer"
        }`}
      >
        {isAnimating ? "Playing" : "Play Animation"}
      </button>

      {isAnimating && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0" style={{ clipPath: "inset(47% 0 0 0)" }}>
            <Image
              src="/images/design-mode/Group%201.png"
              alt=""
              width={1200}
              height={800}
              className="absolute left-1/2 opacity-40 animate-float-up"
              priority
            />
          </div>
        </div>
      )}

      <div className="w-full max-w-[600px] relative z-10">
        <div className="flex justify-center mb-8">
          <Image src="/images/logo.png" alt="Logo" width={60} height={60} className="object-contain" />
        </div>

        <div className="relative">
          {isAnimating && (
            <div className="absolute -inset-[2px] rounded-3xl overflow-hidden pointer-events-none z-20">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 604 108"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <radialGradient id="pulseGradient">
                    <stop offset="1%" stopColor="#F5E6E4" stopOpacity="1" />
                    <stop offset="3%" stopColor="#F5E6E4" stopOpacity="0.8" />
                    <stop offset="20%" stopColor="#F5E6E4" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#F5E6E4" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#F5E6E4" stopOpacity="0" />
                  </radialGradient>
                  <mask id="borderMask">
                    <rect width="604" height="108" fill="white" />
                    <rect x="2" y="2" width="600" height="104" rx="24" ry="24" fill="black" />
                  </mask>
                </defs>
                <g mask="url(#borderMask)">
                  <circle r="85" fill="url('#pulseGradient')" filter="blur(6px)" className="lightning-left" />
                  <circle r="85" fill="url('#pulseGradient')" filter="blur(6px)" className="lightning-right" />
                </g>
              </svg>
            </div>
          )}

          <div className="bg-[#2a2a2a] rounded-3xl border border-[#3a3a3a] p-6 shadow-2xl relative">
            <div className="flex items-center gap-4">
              <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
              <div className="flex-1">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full bg-transparent text-gray-200 text-xl placeholder:text-gray-500 outline-none"
                />
              </div>
            </div>
            <div className="flex justify-end items-center gap-3 mt-4">
              <button className="text-gray-400 hover:text-gray-300 transition-colors">
                <Mic className="w-5 h-5" />
              </button>
              <button
                className={`p-2 rounded-full transition-all ${
                  prompt.trim()
                    ? "bg-[#c5b8d4] text-black hover:bg-[#b5a8c4]"
                    : "bg-[#3a3a3a] text-gray-400 hover:bg-[#4a4a4a]"
                }`}
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
