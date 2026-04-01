import React from 'react';

const projects = [
  {
    title: 'AOS (AgenticOS)',
    description: 'The core Python gateway and service layer. Connects models with energy-aware telemetry based on Intel RAPL.',
    link: 'https://github.com/maximilianwruhs-cyber/devstack_v2/tree/master/AOS',
    badge: 'Core'
  },
  {
    title: 'AOS VS Codium Extension',
    description: 'IDE integration for local AI coding. See real-time energy usage and local token throughput directly in your editor.',
    link: '#',
    badge: 'IDE'
  },
  {
    title: 'BitNet',
    description: 'Fast 1-bit LLM implementations for ultra-efficient, low-power edge inference.',
    link: '#',
    badge: '1-bit'
  },
  {
    title: 'TurboQuant',
    description: 'Custom 4-bit KV cache compression engines designed specifically for infinite-context sovereign workflows.',
    link: '#',
    badge: 'KV Cache'
  },
  {
    title: 'Obsidian_Vault',
    description: 'Markdown-based agent stigmergy and episodic memory core.',
    link: '#',
    badge: 'Memory'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-primary/20 text-slate-100 font-sans selection:bg-secondary selection:text-white">
      {/* Navbar Minimal */}
      <nav className="border-b border-white/10 glass-panel sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold shadow-lg shadow-primary/30">D</div>
            <span className="font-bold tracking-tight text-xl text-white">DevStack_v2</span>
          </div>
          <div>
            <a href="https://github.com/maximilianwruhs-cyber/devstack_v2/blob/master/AOS/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">AOS Architecture</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-accent bg-accent/10 border border-accent/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            Sovereign LLM Gateway v2.0
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-amber-400">
            AI Agent Workspace
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light">
            Welcome to the central repository for the Sovereign LLM Gateway and AI Agent Workspace. 
            A heavily optimized, completely local AI platform designed for extreme energy efficiency and privacy.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/maximilianwruhs-cyber/devstack_v2/blob/master/AOS/README.md" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-full shadow-lg hover:bg-blue-700 hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-dark-900 active:scale-95">
              Read AOS Docs
              <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </a>
            <a href="https://github.com/maximilianwruhs-cyber/devstack_v2" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-slate-300 transition-all duration-200 glass-card rounded-full hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 focus:ring-offset-dark-900 active:scale-95">
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
            <span className="bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text">Sub-Projects</span>
            <div className="h-px bg-white/10 grow"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {projects.map((project, index) => (
            <a href={project.link} key={index} className="group relative block p-6 glass-card rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-dark-800 rounded-lg shrink-0 border border-white/5 group-hover:border-primary/50 transition-colors">
                    <svg className="w-6 h-6 text-slate-300 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-semibold tracking-wide text-secondary bg-secondary/10 rounded-full border border-secondary/20">
                    {project.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed grow mb-4">{project.description}</p>
                <div className="flex items-center text-sm font-medium text-primary group-hover:text-blue-400 mt-auto">
                  Explore Project
                  <svg className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
