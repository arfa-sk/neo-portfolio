export default function TheStack() {
  const skills = [
    { name: "React / Next.js", color: "var(--surface-container-highest)" },
    { name: "TypeScript", color: "var(--primary-container)" },
    { name: "Tailwind CSS", color: "white" },
    { name: "Node.js", color: "var(--surface-container)" },
    { name: "PostgreSQL", color: "var(--primary)" },
    { name: "GraphQL", color: "#8d004e" },
    { name: "Framer Motion", color: "var(--background)" },
    { name: "AWS / Cloudflare", color: "var(--surface-container-high)" },
    { name: "Docker", color: "var(--surface-container-highest)" },
    { name: "Rust", color: "var(--surface-container-highest)" }
  ];

  return (
    <section id="stack" style={{ backgroundColor: 'var(--surface-container)', padding: 'calc(var(--spacing-scale) * 16) 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'calc(var(--spacing-scale) * 8)', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '5rem', marginBottom: '24px' }}>THE <br /> STACK</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--on-surface-variant)' }}>My toolkit is a curated selection of technologies chosen for their power, flexibility, and elegance in execution.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {skills.map((skill, index) => (
              <div key={index} className="neo-border neo-shadow" style={{ 
                padding: '16px 32px', 
                backgroundColor: skill.color,
                color: (skill.color === 'var(--primary)' || skill.color === 'var(--primary-container)' || skill.color === '#8d004e') ? 'white' : 'black',
                fontFamily: 'var(--font-headline)',
                fontWeight: 900,
                textTransform: 'uppercase',
                fontSize: '1.1rem'
              }}>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
