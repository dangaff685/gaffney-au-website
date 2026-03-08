"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, BookOpen, Compass, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 overflow-hidden selection:bg-rose-500/30 relative">

      {/* Hero Sunset Background */}
      <div
        className="absolute top-0 left-0 w-full h-[850px] md:h-[950px] z-0"
        style={{
          backgroundImage: 'url(/gaffney_sunset_bg.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlays to ensure text legibility and fade smoothly into the white page below */}
        <div className="absolute inset-0 bg-stone-950/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-50" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-stone-950/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
            <div className="w-8 h-8 bg-white text-stone-900 rounded-md flex items-center justify-center font-black text-xl tracking-tighter">
              G
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight drop-shadow-sm">The Gaffney Family.</span>
          </div>
          <a
            href="http://localhost:3000"
            className="flex items-center space-x-2 bg-rose-800 hover:bg-rose-700 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all shadow-lg shadow-rose-900/20 group"
          >
            <LayoutDashboard className="w-4 h-4 text-rose-200 group-hover:text-white transition-colors" />
            <span>Weekender</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="flex flex-col items-center w-full"
          >
            {/* Central Family Logo (Moved to Top) */}
            <motion.div variants={fadeInUp} className="w-full max-w-4xl aspect-video rounded-3xl p-4 flex items-center justify-center relative mb-10 mx-auto group">
              <img
                src="/family-logo.png"
                alt="The Gaffney Family Seal"
                className="relative z-10 w-full h-full max-h-[450px] object-contain opacity-95 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 drop-shadow-2xl"
              />
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold tracking-tight mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              The Gaffney Family
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-stone-50 font-medium max-w-2xl leading-relaxed drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              Anchored in faith. Dedicated to hard work. Committed to radically caring for others.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section id="vision" className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6 text-stone-900">Who We Are</h2>
            <p className="text-stone-600 max-w-3xl text-lg md:text-xl mx-auto font-light leading-relaxed">Everything we do is built on three unbreakable pillars. It defines how we operate, how we treat people, and the legacy we are striving to leave behind.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col text-center items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-rose-700 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-serif font-medium tracking-tight mb-4 text-stone-900">Caring For Others</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                True success isn't measured by what we accumulate, but by who we uplift. Whether it's our team, our clients, or the vulnerable in our community, we are fiercely committed to going out of our way to care for people and radically change lives.
              </p>
              <div className="mt-auto pt-6">
                <p className="text-sm md:text-base font-serif text-stone-700 italic leading-relaxed">
                  "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves."
                  <span className="block text-rose-700 not-italic text-xs font-sans font-bold uppercase tracking-widest mt-3">Philippians 2:3</span>
                </p>
              </div>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col text-center items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <LayoutDashboard className="w-8 h-8 text-amber-600 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-serif font-medium tracking-tight mb-4 text-stone-900">Working Hard</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                Greatness requires grit. As a family, we roll up our sleeves and put in the exhausting, relentless work required to build something lasting. We don't shy away from the mud; we stand shoulder-to-shoulder in the trenches.
              </p>
              <div className="mt-auto pt-6">
                <p className="text-sm md:text-base font-serif text-stone-700 italic leading-relaxed">
                  "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
                  <span className="block text-amber-600 not-italic text-xs font-sans font-bold uppercase tracking-widest mt-3">Colossians 3:23</span>
                </p>
              </div>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col text-center items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-stone-800 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-serif font-medium tracking-tight mb-4 text-stone-900">Striving for Excellence</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                We refuse to settle for average. We want to be the absolute best we can be, pushing the limits of our potential. Our future vision is to create an environment where everyone who joins us is empowered to reach their absolute peak.
              </p>
              <div className="mt-auto pt-6">
                <p className="text-sm md:text-base font-serif text-stone-700 italic leading-relaxed">
                  "In the same way, let your light shine before others, that they may see your good deeds."
                  <span className="block text-stone-900 not-italic text-xs font-sans font-bold uppercase tracking-widest mt-3">Matthew 5:16</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2 text-stone-500">
            <span className="font-bold text-stone-900 tracking-tight">The Gaffney Family.</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex space-x-6 text-sm font-medium text-stone-500">
            <a href="http://localhost:3000" className="hover:text-rose-700 transition-colors bg-white px-4 py-2 rounded-lg border border-stone-200 shadow-sm">Weekender App Login</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
