import React from 'react';
import { Music, Video, Database } from 'lucide-react';

import sheetMusicPreview from './assets/sheet-music-preview.png';

const projects = [
  {
    id: 1,
    title: "Real-Time Collaborative Sheet Music Editor",
    icon: <Music size={32} />,
    tech: ["TypeScript", "React", "WebSocket", "CRDTs"],
    previewImage: sheetMusicPreview,
    metrics: [
      "Consistent State: 50+ Concurrent Users",
      "Payload Reduction: 65% vs JSON",
      "Rendering: 60 FPS (Optimized)"
    ],
    description: "A conflict-free collaborative editor using Yjs CRDTs to synchronize sheet music state across multiple clients in real-time."
  },
  {
    id: 2,
    title: "Film Emulation Engine",
    icon: <Video size={32} />,
    tech: ["Rust", "WASM", "WebGL", "React"],
    metrics: [
      "Render Speed: ~8x faster (SIMD vs Naive)",
      "UI Blocking: Eliminated (GPU Offloading)",
      "Processing: 4K Image Support"
    ],
    description: "High-performance image processing pipeline leveraging WebAssembly and WebGL shaders for professional film grain and blur effects."
  },
  {
    id: 3,
    title: "Smart Meal Prep Manager",
    icon: <Database size={32} />,
    tech: ["Python", "React", "PostgreSQL", "CSP"],
    metrics: [
      "Macro Accuracy: <5% Error Margin",
      "Shopping Optimization: 35% SKU Reduction",
      "Recalculation: <15ms Latency"
    ],
    description: "An intelligent meal planner using Constraint Satisfaction Algorithms to optimize nutrition targets and grocery lists."
  }
];

function App() {
  return (
    <div className="app-container">
      <header className="hero">
        <h1>William Kerr</h1>
        <p className="subtitle">High-Performance Systems & Visual Computing</p>
      </header>

      <main className="projects-grid">
        {projects.map(project => (
          <article key={project.id} className="project-card">
            <div className="card-header">
              <div>
                <h2>{project.title}</h2>
                <div className="tags">
                  {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="project-icon">
                {project.icon}
              </div>
            </div>

            <p className="description">{project.description}</p>

            {project.previewImage && (
              <div className="project-preview-container">
                <img src={project.previewImage} alt={`${project.title} Preview`} className="project-preview" />
              </div>
            )}

            <div className="metrics-container">
              <h3>Verified Metrics</h3>
              <ul>
                {project.metrics.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </main>

      <footer>
        <p>© 2026 Engineering Portfolio. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
