import React from 'react';
import { Logo } from './components/Logo';
import AiBuddyDemo from './components/AiBuddyDemo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0b1a] relative overflow-hidden flex flex-col">
      {/* Immersive brand background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/30 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]"></div>
      </div>

      {/* Header */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center group cursor-pointer">
          <Logo size="sm" />
          {/* We keep the text here as a backup in case the small logo is just an icon */}
          <span className="ml-2 text-2xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors">TrackPay</span>
        </div>
        <div className="hidden sm:flex items-center">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm shadow-lg shadow-blue-500/10">
            Coming Soon
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* The Hero Logo */}
        <div className="mb-12 transform hover:scale-105 transition-transform duration-700 animate-fade-in">
          <Logo size="xl" />
        </div>

        <div className="max-w-3xl space-y-10 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1]">
              The Future of <br/> 
              <span className="text-gradient">Personal Finance.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
              Automate your UPI tracking, hit your savings goals, and consult your personal AI buddy.
            </p>
          </div>

          <div className="pt-4">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 px-12 py-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-white/20">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </div>
                <span className="text-white font-black text-4xl tracking-[0.1em] uppercase">Join Waitlist</span>
              </div>
              <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">Redefining the way you spend.</p>
            </div>
          </div>
        </div>
      </main>

      {/* AI Buddy Preview */}
      <section className="relative z-10 py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-[#050510]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Meet your AI <br/>
                <span className="text-blue-500">Finance Buddy.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Integrated directly with your transaction history, TrackPay Buddy provides instant insights and helps you optimize your path to financial freedom.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FeatureMinimal icon="⚡" text="Smart UPI Tracking" />
              <FeatureMinimal icon="🎯" text="Auto Savings" />
              <FeatureMinimal icon="📊" text="Deep Insights" />
              <FeatureMinimal icon="🛡️" text="Encrypted Data" />
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-6 bg-blue-600/10 blur-3xl rounded-[4rem] group-hover:bg-blue-600/20 transition-all"></div>
              <AiBuddyDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-20 px-6 border-t border-white/5 text-center bg-[#050510]">
        <div className="flex flex-col items-center gap-6 opacity-60">
          <Logo size="sm" />
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em] font-black">
            TrackPay Fintech &copy; 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureMinimal = ({ icon, text }: { icon: string, text: string }) => (
  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.08]">
    <span className="text-2xl bg-white/5 p-2 rounded-xl">{icon}</span>
    <span className="text-sm font-bold text-slate-200">{text}</span>
  </div>
);

export default App;
