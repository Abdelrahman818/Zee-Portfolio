'use client';

import { Analytics } from "@vercel/analytics/next"
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiTwitch,
  SiYoutube,
  SiInstagram,
  SiTiktok,
  SiDiscord,
  SiKick,
  SiMoneygram
} from 'react-icons/si';

const mainImg = '/gqUKaQMgMG_1782884025625.png';
const chibiImg = '/f1810c5e-f308-4822-9d80-8adfebbf64fd_1782884025624.jpg';
const pixelImg = '/53f7a4db-045d-4e2f-8dc5-5436b3576a16_1782884025624.jpg';

const SOCIAL_LINKS = [
  { name: 'Watch Live', handle: 'Twitch', url: 'https://www.twitch.tv/zeeinpajamas', icon: SiTwitch, color: '#9146FF' },
  { name: 'Watch Live', handle: 'Kick', url: 'https://kick.com/zeeinpajamas ', icon: SiKick, color: '#9146FF' },
  { name: 'Watch Videos', handle: 'YouTube', url: 'https://www.youtube.com/channel/UCvxq_jq3jv3oijwCbw-_mVA', icon: SiYoutube, color: '#FF0000' },
  { name: 'Behind the Scenes', handle: 'Instagram', url: 'https://instagram.com/zeeinpajamas', icon: SiInstagram, color: '#E1306C' },
  { name: '@ZeeInPajamas', handle: 'TikTok', url: 'https://www.tiktok.com/@zeeinpajamas', icon: SiTiktok, color: '#00F2FE' },
  { name: 'Join the Server', handle: 'Discord', url: 'https://discord.gg/QweQFNr7H ', icon: SiDiscord, color: '#5865F2' },
  { name: 'Support the Stream', handle: 'Instapay', url: 'https://ipn.eg/S/zeehadidi/instapay/3htPui', icon: SiMoneygram, color: '#FF5E5B' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function Home() {
  return (
    <>
      <Analytics />
      <div className="min-h-screen w-full bg-background relative overflow-x-hidden selection:bg-primary/30 text-foreground pb-24">
        {/* Background Textures */}
        <div className="fixed inset-0 pointer-events-none hex-bg z-0" />
        <div className="fixed inset-0 pointer-events-none bg-scanline opacity-20 mix-blend-overlay z-50" />
        
        {/* Decorative Lights */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="fixed bottom-1/4 right-0 w-[30rem] h-[30rem] bg-secondary/5 blur-[150px] rounded-full pointer-events-none z-0" />
        
        {/* Chibi Sticker (Floating Element) */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="fixed top-24 right-[10%] w-24 h-24 z-20 pointer-events-none hidden lg:block opacity-80"
        >
          <img 
            src={chibiImg} 
            alt="Chibi zeenx" 
            className="w-full h-full object-cover rounded-full border-2 border-secondary box-glow-cyan drop-shadow-2xl"
            />
        </motion.div>

        <main className="relative z-10 max-w-3xl mx-auto px-4 pt-12 sm:pt-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {/* Hero Section */}
            <motion.header variants={itemVariants} className="text-center relative">
              <div className="relative inline-block mb-6">
                {/* Rotating glowing rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border border-dashed border-primary/50"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-t border-r border-secondary/30"
                />
                
                {/* Avatar */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary box-glow-cyan relative z-10 bg-card">
                  <img 
                    src={mainImg} 
                    alt="ZeeInPajamas avatar" 
                    className="w-full h-full object-cover"
                    />
                </div>

                {/* Online Badge */}
                <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 z-20 flex items-center justify-center">
                  <span className="relative flex h-5 w-5 sm:h-6 sm:w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 sm:h-6 sm:w-6 bg-green-500 border-2 border-background"></span>
                  </span>
                </div>
              </div>

              <h1 className="font-sans text-5xl sm:text-7xl font-bold uppercase tracking-wider text-white text-glow-cyan mb-2">
                ZeeInPajamas
              </h1>
              <p className="font-mono text-primary/80 tracking-widest uppercase text-sm sm:text-base flex items-center justify-center gap-2">
                <span className="text-secondary/50">{'//'}</span>
                Gamer · zeenx
              </p>
            </motion.header>

            {/* Stats Panel */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-3 top-0 bottom-0 w-1 bg-primary/30 box-glow-cyan"></div>
              <div className="absolute -left-3 top-1/4 h-1/2 w-1 bg-primary box-glow-cyan"></div>
              
              <div className="bg-card/80 backdrop-blur-md border border-white/5 clip-panel p-6 sm:p-8">
                <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-6">
                  
                  <div className="flex-1 w-full space-y-4">
                    <h2 className="font-sans text-2xl font-bold text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary block"></span>
                      Player Stats
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
                      <div className="flex flex-col bg-background/50 p-3 border border-white/5">
                        <span className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Role</span>
                        <span className="text-white font-bold">Gamer / Designer</span>
                      </div>
                      <div className="flex flex-col bg-background/50 p-3 border border-white/5">
                        <span className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Status</span>
                        <span className="text-primary font-bold">In the zone</span>
                      </div>
                      <div className="flex flex-col bg-background/50 p-3 border border-white/5">
                        <span className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Hours Logged</span>
                        <span className="text-white font-bold">∞</span>
                      </div>
                      <div className="flex flex-col bg-background/50 p-3 border border-white/5">
                        <span className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Main</span>
                        <span className="text-white font-bold">FPS / Strategy</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center justify-center w-full sm:w-auto mt-4 sm:mt-0">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-secondary/20 blur-xl group-hover:bg-secondary/40 transition-colors"></div>
                      <img 
                        src={pixelImg} 
                        alt="Achievement Badge" 
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border-2 border-secondary relative z-10 -rotate-3 transition-transform group-hover:rotate-0"
                        />
                      <div className="absolute -bottom-3 -right-3 bg-secondary text-background font-mono text-xs font-bold px-2 py-1 z-20 rotate-12 uppercase">
                        Lvl 99
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Missions / Objectives (Social Links) */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="font-sans text-xl font-bold text-white/50 uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="h-px bg-white/10 flex-1"></span>
                Current Objectives
                <span className="h-px bg-white/10 flex-1"></span>
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {SOCIAL_LINKS.map((link, idx) => (
                  <a
                  key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-card border-l-4 clip-mission p-4 flex items-center justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-card/90"
                    style={{ borderLeftColor: link.color }}
                    >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                      style={{ backgroundColor: link.color }}
                      />
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div 
                        className="w-10 h-10 flex items-center justify-center rounded bg-background border border-white/5 transition-transform duration-300 group-hover:scale-110"
                      >
                        <link.icon className="w-5 h-5" style={{ color: link.color }} />
                      </div>
                      <div>
                        <h3 className="font-sans text-xl font-bold text-white uppercase tracking-wide group-hover:text-glow-cyan transition-all">
                          {link.name}
                        </h3>
                        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                          {link.handle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white font-mono text-xs">
                      EXECUTE &gt;
                    </div>
                    
                    {/* Hover scanline inside button */}
                    <div className="absolute left-0 top-0 w-1 h-full bg-white opacity-0 group-hover:opacity-50 blur-[2px] group-hover:animate-[sweepRight_1s_ease-in-out_infinite]" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer */}
            <motion.footer variants={itemVariants} className="pt-12 pb-8 text-center border-t border-white/5 mt-12">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                Made with sleep deprivation &copy; ZeeInPajamas {new Date().getFullYear()}
              </p>
              <div className="mt-4 flex justify-center gap-1">
                <span className="w-2 h-1 bg-primary/20 block"></span>
                <span className="w-4 h-1 bg-primary/40 block"></span>
                <span className="w-8 h-1 bg-primary/60 block"></span>
                <span className="w-2 h-1 bg-secondary/60 block"></span>
              </div>
            </motion.footer>

          </motion.div>
        </main>

        <style>{`
          @keyframes scan {
            0% { top: -10%; }
            100% { top: 110%; }
            }
            @keyframes sweepRight {
              0% { left: -10%; }
              100% { left: 110%; }
              }
              `}</style>
      </div>
    </>
  );
}
