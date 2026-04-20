import React from "react";

const experiences = [
  {
    role: "Freelance Software Developer",
    org: "Remote",
    period: "Jun 2023 – Present",
    stack: ["Python", "Flask", "FastAPI", "React", "PostgreSQL"],
    bullets: [
      "Built and supported SaaS products used by ~140 users — onboarding, bug reports, and ongoing product issues.",
      "Diagnosed and resolved issues across authentication, payments, file processing, and API-driven workflows (Auth0, Stripe, AWS).",
      "Reproduced bugs and investigated issues using API responses, logs, and database checks.",
      "Wrote documentation and improved workflows to reduce repeat support questions.",
    ],
  },
  {
    role: "Technical Systems Engineer · Ecommerce Operations",
    org: "Family Magento Business",
    period: "2022 – Present",
    stack: ["Magento 2", "Python", "Flask", "React", "PostgreSQL"],
    bullets: [
      "Hands-on support for fulfillment, receiving, inventory, and catalog workflows in a Magento environment processing 75+ daily orders.",
      "Built M2 InstaCount — a Python, Flask, React, and PostgreSQL inventory system integrated with Magento 2 APIs.",
      "Supported Amazon and eBay marketplace listing work, Magento admin tasks, and storefront HTML/CSS updates tied to day-to-day operations.",
      "Troubleshot inventory discrepancies, SKU mismatches, and workflow issues in day-to-day operations.",
    ],
  },
  {
    role: "Application Developer · Grant",
    org: "OpenHome",
    period: "Jan 2024 – Apr 2024",
    stack: ["Python", "AI / OpenAI"],
    bullets: [
      "Built a Python application for an AI-powered smart home OS, delivered as part of a prototype presented to 100+ potential investors.",
    ],
  },
];

function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experiences.map((exp, i) => (
        <div className="timeline__item" key={i}>
          <span className="timeline__dot" />
          <div className="timeline__card">
            <div className="timeline__head">
              <span className="timeline__period">{exp.period}</span>
              <h3 className="timeline__role">{exp.role}</h3>
              <span className="timeline__org">{exp.org}</span>
            </div>

            {exp.stack && (
              <div className="timeline__stack">
                {exp.stack.map((t) => (
                  <span className="timeline__tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            <ul className="timeline__bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
