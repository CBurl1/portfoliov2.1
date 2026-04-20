import React from "react";

function AboutVisual() {
  const orbitTags = [
    { label: "Python", angle: 0 },
    { label: "React", angle: 60 },
    { label: "Flask", angle: 120 },
    { label: "PostgreSQL", angle: 180 },
    { label: "AWS", angle: 240 },
    { label: "Magento 2", angle: 300 },
  ];

  return (
    <div className="about-visual" aria-hidden="true">
      <div className="about-visual__ring about-visual__ring--outer" />
      <div className="about-visual__ring about-visual__ring--mid" />

      <div className="about-visual__orb">
        <span className="about-visual__mono">CB</span>
        <div className="about-visual__orb-glow" />
      </div>

      <div className="about-visual__orbit">
        {orbitTags.map((t) => (
          <span
            key={t.label}
            className="about-visual__tag"
            style={{ "--angle": `${t.angle}deg` }}
          >
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AboutVisual;
