"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SelectedWorks() {
  const projects = [
    {
      title: "NOIR MAGAZINE",
      category: "E-Commerce",
      desc: "A headless commerce solution for a luxury streetwear boutique, prioritizing speed and cinematic aesthetics.",
      src: "/images/noir.png",
      color: "#e10080"
    },
    {
      title: "FLUX ENGINE",
      category: "DevOps Tool",
      desc: "Custom CI/CD orchestration engine designed for high-frequency deployment environments.",
      src: "/images/flux.png",
      color: "#b40065",
      offset: true
    },
    {
      title: "SYNTH UI",
      category: "Library",
      desc: "An open-source React component library inspired by early 2000s Japanese print design.",
      src: "/images/foundry.png",
      color: "#f3e4e9",
      textColor: "#b40065"
    },
    {
      title: "PULSE BI",
      category: "Analytics",
      desc: "Data visualization suite for fashion industry marketing teams, focusing on real-time trends.",
      src: "/images/pulse.png",
      color: "#8d004e",
      offset: true
    }
  ];

  return (
    <section style={{ padding: '96px 32px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '64px' }} className="md:flex-row md:justify-between md:items-end">
          <h2 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 900, fontFamily: 'var(--font-headline)', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.05em' }}>
            SELECTED <br /> WORKS
          </h2>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em', borderBottom: '8px solid #e10080', paddingBottom: '8px', fontFamily: 'var(--font-headline)' }}>
            Case Studies / 2024
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '48px' }}>
          {projects.map((p, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ 
                x: -4, 
                y: -4, 
                boxShadow: '12px 12px 0px 0px #000' 
              }}
              style={{ 
                backgroundColor: p.color, 
                border: '4px solid black', 
                boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
                marginTop: p.offset ? '96px' : '0',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <div style={{ aspectRatio: '16/9', position: 'relative', borderBottom: '4px solid black', overflow: 'hidden' }}>
                <Image 
                  src={p.src} 
                  alt={p.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-headline)', color: p.textColor || 'white', textTransform: 'uppercase', letterSpacing: '-0.05em' }}>{p.title}</h3>
                  <span style={{ backgroundColor: 'black', color: 'white', padding: '4px 12px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', border: '2px solid black' }}>{p.category}</span>
                </div>
                <p style={{ color: p.textColor === '#b40065' ? 'rgba(180,0,101,0.8)' : 'rgba(255,255,255,0.8)', fontSize: '1.125rem', marginBottom: '32px', fontWeight: 500, maxWidth: '400px' }}>{p.desc}</p>
                <div style={{ 
                  backgroundColor: 'white', 
                  color: 'black', 
                  border: '4px solid black', 
                  padding: '8px 24px', 
                  fontWeight: 900, 
                  textTransform: 'uppercase',
                  boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                  display: 'inline-block',
                  fontFamily: 'var(--font-headline)'
                }}>
                  View Project
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .md\:flex-row { flex-direction: row !important; }
          .md\:justify-between { justify-content: space-between !important; }
          .md\:items-end { align-items: flex-end !important; }
        }
      `}</style>
    </section>
  );
}
