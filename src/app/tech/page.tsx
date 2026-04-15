"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function TechPage() {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '160px 24px 128px'
  };

  const bentoGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '32px',
    marginBottom: '96px'
  };

  const cardBaseStyle: React.CSSProperties = {
    border: '4px solid black',
    padding: '32px',
    position: 'relative'
  };

  return (
    <main style={{ backgroundColor: '#fff8f8', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      <div style={containerStyle}>
        {/* Hero Section */}
        <header style={{ marginBottom: '80px' }}>
          <span style={{ 
            backgroundColor: '#ffd9e3', 
            color: '#8d004e', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em', 
            padding: '4px 16px', 
            fontSize: '0.75rem', 
            border: '2px solid black', 
            marginBottom: '24px', 
            display: 'inline-block',
            boxShadow: '2px 2px 0px 0px #000'
          }}>
            Technical Arsenal
          </span>
          <h1 style={{ 
            fontSize: 'clamp(4rem, 12vw, 9rem)', 
            fontWeight: 900, 
            textTransform: 'uppercase', 
            letterSpacing: '-0.05em', 
            lineHeight: 1, 
            marginBottom: '32px',
            fontFamily: 'var(--font-headline)'
          }}>
            THE <span style={{ color: '#b40065', fontStyle: 'italic' }}>STACK</span>
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '650px', fontWeight: 500, lineHeight: 1.4 }}>
            A highly curated ecosystem of tools and technologies engineered for maximum impact, scalability, and aesthetic precision.
          </p>
        </header>

        {/* Bento Grid */}
        <div style={bentoGridStyle}>
          {/* Frontend Card */}
          <section style={{ 
            gridColumn: 'span 7', 
            backgroundColor: 'white', 
            ...cardBaseStyle, 
            boxShadow: '8px 8px 0px 0px rgba(180,0,101,1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.05em', fontFamily: 'var(--font-headline)' }}>
                Frontend<br />Architecture
              </h2>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#b40065' }}>web</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {["REACT 18+", "TYPESCRIPT", "NEXT.JS", "TAILWIND CSS", "FRAMER MOTION", "REDUX TOOLKIT", "THREE.JS", "WEB COMPONENTS"].map((tag, i) => (
                <span key={tag} style={{ 
                  padding: '8px 16px', 
                  border: '2px solid black', 
                  fontWeight: 900, 
                  fontSize: '1.125rem',
                  backgroundColor: tag === 'TYPESCRIPT' || tag === 'FRAMER MOTION' ? (tag === 'TYPESCRIPT' ? '#b40065' : '#e10080') : 'white',
                  color: tag === 'TYPESCRIPT' || tag === 'FRAMER MOTION' ? 'white' : 'black',
                  boxShadow: '2px 2px 0px 0px #000'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Visual Asset Image Block */}
          <div style={{ gridColumn: 'span 5', height: '400px', ...cardBaseStyle, overflow: 'hidden', padding: 0 }}>
            <Image 
              src="/images/tech-code.png" 
              alt="Code background" 
              fill 
              style={{ objectFit: 'cover', filter: 'grayscale(1)', transition: 'filter 0.5s' }} 
              onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0)'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(1)'}
            />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(180,0,101,0.2)', mixBlendMode: 'multiply' }}></div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', backgroundColor: 'white', border: '4px solid black', padding: '16px', boxShadow: '4px 4px 0px 0px #000' }}>
              <p style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '0.75rem', color: '#b40065', letterSpacing: '0.2em', marginBottom: '4px' }}>Status: Optimized</p>
              <p style={{ fontWeight: 900, fontSize: '1.25rem', textTransform: 'uppercase', fontFamily: 'var(--font-headline)' }}>PIXEL-PERFECT EXECUTION</p>
            </div>
          </div>

          {/* Backend Card */}
          <section style={{ gridColumn: 'span 5', backgroundColor: '#18181b', color: 'white', ...cardBaseStyle, boxShadow: '8px 8px 0px 0px #000' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.05em', fontFamily: 'var(--font-headline)' }}>
                Backend &<br />Systems
              </h2>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#b40065' }}>terminal</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: "Node.js / Bun", level: "Expert" },
                { name: "PostgreSQL", level: "Advanced" },
                { name: "Redis / Caching", level: "Expert" },
                { name: "GraphQL / Apollo", level: "Advanced" },
                { name: "Go (Golang)", level: "Intermediate" }
              ].map(item => (
                <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #27272a', paddingBottom: '8px' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.25rem', textTransform: 'uppercase' }}>{item.name}</span>
                  <span style={{ color: '#b40065', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase' }}>{item.level}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Infra Card */}
          <section style={{ gridColumn: 'span 7', backgroundColor: '#b40065', color: 'white', ...cardBaseStyle, boxShadow: '8px 8px 0px 0px #000', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                <h2 style={{ fontSize: '3.5rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.05em', fontFamily: 'var(--font-headline)' }}>
                  Infrastructure<br />& Cloud
                </h2>
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'white' }}>cloud</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', marginBottom: '32px', fontWeight: 500, maxWidth: '450px' }}>
                Deploying scalable, resilient environments using infrastructure-as-code and modern CI/CD pipelines.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {["Docker", "Kubernetes", "AWS (S3/EC2)", "Terraform"].map(item => (
                <div key={item} style={{ backgroundColor: 'white', border: '2px solid black', padding: '12px', textAlign: 'center', color: 'black' }}>
                  <p style={{ fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Current Obsessions Section */}
        <section style={{ marginBottom: '96px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em', fontFamily: 'var(--font-headline)' }}>Current Obsessions</h2>
            <div style={{ flex: 1, height: '4px', backgroundColor: 'black' }}></div>
            <span style={{ color: '#b40065', fontWeight: 900, fontSize: '1.25rem', textTransform: 'uppercase', fontStyle: 'italic' }}>BETA TESTING</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {[
              { title: "AI AGENTS", desc: "Exploring autonomous LLM agents using LangChain and AutoGPT for workflow automation.", progress: 75, icon: "psychology" },
              { title: "WEB3 LAYERS", desc: "Deep diving into Solidity and Ethereum L2 scaling solutions like Optimism and Arbitrum.", progress: 45, icon: "diamond" },
              { title: "WEBGL / GLSL", desc: "Crafting high-performance custom shaders for immersive 3D web experiences.", progress: 60, icon: "animation" }
            ].map(obs => (
              <div key={obs.title} style={{ 
                backgroundColor: '#f3e4e9', 
                border: '4px solid black', 
                padding: '32px', 
                position: 'relative', 
                transition: 'transform 0.3s' 
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ position: 'absolute', top: '-24px', right: '-16px', backgroundColor: '#b40065', color: 'white', padding: '12px', border: '4px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined">{obs.icon}</span>
                </div>
                <h3 style={{ fontSize: '1.875rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '-0.05em', fontFamily: 'var(--font-headline)' }}>{obs.title}</h3>
                <p style={{ color: '#5b3f48', fontWeight: 500, marginBottom: '24px', lineHeight: 1.4 }}>{obs.desc}</p>
                <div style={{ height: '8px', width: '100%', backgroundColor: '#e5d6db', border: '2px solid black' }}>
                  <div style={{ height: '100%', backgroundColor: '#b40065', width: `${obs.progress}%` }}></div>
                </div>
                <p style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginTop: '8px' }}>Proficiency: {obs.progress}% Load</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tooling Section */}
        <section style={{ backgroundColor: '#e10080', padding: '4px', border: '4px solid black', boxShadow: '12px 12px 0px 0px #000' }}>
          <div style={{ backgroundColor: 'white', padding: '64px 32px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', textAlign: 'center', marginBottom: '64px', letterSpacing: '-0.05em' }}>THE DAILY DRIVERS</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '64px' }}>
              {[
                { name: "VS CODE", icon: "edit_square" },
                { name: "FIGMA", icon: "brush" },
                { name: "GIT/GITHUB", icon: "history" },
                { name: "POSTMAN", icon: "token" },
                { name: "VERCEL", icon: "deployed_code" },
                { name: "SUPABASE", icon: "database" }
              ].map(tool => (
                <div key={tool.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                   <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>{tool.icon}</span>
                   <span style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    </main>
  );
}
