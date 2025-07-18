'use client';

import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-accentPrimary relative overflow-hidden">
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                The first
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI-powered
                </span>{' '}
                <span className="text-white">Mortgage</span>
              </h1>
            </div>

            <div className="max-w-4xl mx-auto text-white/90 space-y-1 text-lg md:text-xl">
              <p>Our tech unlocks lower rates, higher chances of approval,</p>
              <p>
                and a lightning-fast process from approval to closing. Over $100 billion funded.
              </p>
            </div>

            <div className="pt-6">
              <Button className="bg-green-400 hover:bg-accentPrimary text-black hover:text-white font-semibold text-xl px-8 py-8 rounded-full shadow-lg transition-all hover:scale-105">
                <a href='/start'>Start my pre-approval</a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/80 text-sm pt-4">
              <Clock className="h-4 w-4" />
              <span>3 min</span>
              <span className="text-white/50">|</span>
              <span>No hard credit check</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}