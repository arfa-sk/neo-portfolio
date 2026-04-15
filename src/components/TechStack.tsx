"use client";

import { motion, Variants } from 'framer-motion';

export default function TechStack() {
  const skills = [
    { name: "React / Next.js", color: "#ffd9e3", textColor: "#3e001f" },
    { name: "TypeScript", color: "#e10080", textColor: "white" },
    { name: "Tailwind CSS", color: "white", textColor: "#b40065" },
    { name: "Node.js", color: "#ffd9de", textColor: "#360c17" },
    { name: "PostgreSQL", color: "#b40065", textColor: "white" },
    { name: "GraphQL", color: "#8d004e", textColor: "white" },
    { name: "Framer Motion", color: "#ffffff", textColor: "black" },
    { name: "AWS / Cloudflare", color: "#ffdada", textColor: "#8e0f28" },
    { name: "Docker", color: "#ffb0ca", textColor: "#3e001f" },
    { name: "Rust", color: "#ffb6c1", textColor: "#7b444e" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const chipVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }
    }
  };

  return (
    <section style={{ padding: '160px 48px', backgroundColor: '#f9eaef', borderBottom: '4px solid black' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '400px 1fr', 
          gap: '120px', 
          alignItems: 'center' 
        }}>
          {/* Left Column: Stacked Editorial Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(4rem, 10vw, 7.5rem)', 
              fontWeight: 900, 
              fontFamily: 'var(--font-headline)', 
              textTransform: 'uppercase', 
              letterSpacing: '-0.05em', 
              lineHeight: 0.85, 
              margin: 0
            }}>
              THE <br /> STACK
            </h2>
            <p style={{ 
              color: '#5b3f48', 
              fontSize: '1.25rem', 
              fontWeight: 500, 
              lineHeight: 1.5,
              maxWidth: '320px',
              margin: 0
            }}>
              My toolkit is a curated selection of technologies chosen for their power, flexibility, and elegance in execution.
            </p>
          </motion.div>
          
          {/* Right Column: 5-per-line Grid with Cascade */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(5, auto)', 
              gap: '16px',
              width: 'fit-content'
            }}
          >
            {skills.map((s) => (
              <motion.div 
                key={s.name}
                variants={chipVariants}
                whileHover={{ 
                  x: -6, 
                  y: -6, 
                  boxShadow: '10px 10px 0px 0px #000'
                }}
                style={{ 
                  backgroundColor: s.color, 
                  color: s.textColor, 
                  border: '3px solid black', 
                  padding: '16px 24px', 
                  fontWeight: 900, 
                  fontFamily: 'var(--font-headline)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '-0.05em',
                  boxShadow: '4px 4px 0px 0px #000',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                {s.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
