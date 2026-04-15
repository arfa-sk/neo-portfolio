"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Works', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'About', href: '/about' },
    { name: 'Stack', href: '/tech' },
    { name: 'Voices', href: '/testimonials' }
  ];

  return (
    <nav style={{ 
      position: 'fixed',
      top: 0,
      zIndex: 100,
      width: '100%',
      backgroundColor: '#b40065',
      borderBottom: '4px solid black',
      boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
      fontFamily: 'var(--font-headline)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '16px 32px', 
        maxWidth: '100%',
        margin: '0 auto'
      }}>
        {/* Branding - Leads to Home */}
        <Link href="/" style={{ 
          fontSize: '1.875rem', 
          fontWeight: 900, 
          fontStyle: 'italic',
          color: 'black',
          textTransform: 'uppercase',
          letterSpacing: '-0.05em', 
          textDecoration: 'none'
        }}>
          ARFA.SK
        </Link>

        {/* Nav Links */}
        <div style={{ 
          display: 'none', 
          gap: '32px', 
          alignItems: 'center' 
        }} className="md:flex">
          {navLinks.map((link) => {
            const isCurrent = pathname === link.href || (link.href !== '/' && pathname?.includes(link.href));
            
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className="nav-link"
                style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: isCurrent ? 900 : 700, 
                  color: 'black',
                  textDecoration: isCurrent ? 'underline' : 'none',
                  textDecorationThickness: '4px',
                  textUnderlineOffset: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'all 0.2s',
                  display: 'inline-block'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Let's Build Button */}
        <Link href="/contact" style={{ 
          backgroundColor: 'white',
          color: 'black', 
          padding: '8px 24px', 
          fontSize: '1.125rem', 
          fontWeight: 900, 
          textTransform: 'uppercase', 
          letterSpacing: '-0.05em',
          border: '4px solid black', 
          boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.5)',
          cursor: 'pointer',
          transition: 'all 0.2s',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(4px, 4px)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0)';
          e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,0.5)';
        }}
        >
          Let&apos;s Build
        </Link>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .md\:flex { display: flex !important; }
        }
        .nav-link:hover {
          transform: scale(1.05);
        }
      `}</style>
    </nav>
  );
}
