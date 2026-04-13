'use client';

import React from "react";
import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans flex flex-col items-center justify-center p-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-950 to-gray-950" />
      <div className="relative z-10 w-full max-w-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 rounded-3xl shadow-2xl text-center">
        <div className="mx-auto w-16 h-16 mb-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          PromptChain Studio
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Describe the interface you want to build in the left panel.
        </p>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Ready to build
        </div>
      </div>
    </div>
  );
}