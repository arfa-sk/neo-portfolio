"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{ 
      backgroundColor: '#b40065', 
      minHeight: '100vh', 
      padding: '160px 24px 80px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '4px solid black'
    }}>
      {/* Background Decorative Blocks */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ 
          position: 'absolute', 
          top: '20%', 
          left: '1%', 
          width: '240px', 
          height: '300px', 
          border: '4px solid black', 
          boxShadow: '12px 12px 0px 0px #000',
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <Image src="/images/hero-tech.png" alt="CS Tech Illustration" fill style={{ objectFit: 'cover' }} />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1400px' }}>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ 
            backgroundColor: '#ffd9e3', 
            color: '#b40065', 
            padding: '8px 24px', 
            border: '4px solid black', 
            fontWeight: 900, 
            display: 'inline-block',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontSize: '1rem',
            marginBottom: '40px',
            boxShadow: '4px 4px 0px 0px #000'
          }}
        >
          Status: Peak Performance
        </motion.div>

        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          style={{ 
            fontSize: 'clamp(4rem, 12vw, 10rem)', 
            fontWeight: 900, 
            color: 'white', 
            lineHeight: 0.85, 
            textTransform: 'uppercase', 
            letterSpacing: '-0.05em',
            margin: 0,
            fontFamily: 'var(--font-headline)'
          }}
        >
          CODE & <br /> 
          <span style={{ fontStyle: 'italic', color: 'black' }}>CONFECTION</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ 
            marginTop: '48px', 
            fontSize: '1.5rem', 
            color: 'white', 
            fontWeight: 700, 
            maxWidth: '600px', 
            margin: '48px auto 0',
            lineHeight: 1.2
          }}
        >
          Engineering high-impact digital experiences with a radical, avant-garde aesthetic.
        </motion.p>
      </div>

      {/* Floating ARK Sticker */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          delay: 1 
        }}
        style={{ 
          position: 'absolute', 
          bottom: '15%', 
          right: '5%', 
          zIndex: 20 
        }}
      >
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ 
            width: '180px', 
            height: '180px', 
            backgroundColor: 'black', 
            color: '#b40065', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '4px solid white',
            boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.5)'
          }}
        >
          <span style={{ fontSize: '4rem', fontWeight: 900 }}>ARK</span>
        </motion.div>
      </motion.div>

      {/* Decorative Flux Block */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        style={{ 
          position: 'absolute', 
          bottom: '5%', 
          right: '5%', 
          width: '300px', 
          height: '200px', 
          border: '4px solid black', 
          backgroundColor: '#e10080',
          zIndex: 5,
          overflow: 'hidden',
          boxShadow: '12px 12px 0px 0px #000'
        }}
      >
        <Image src="/images/flux-tech.png" alt="Tech Pattern" fill style={{ objectFit: 'cover', opacity: 0.8, mixBlendMode: 'overlay' }} />
      </motion.div>
    </section>
  );
}
