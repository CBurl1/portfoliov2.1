import React from "react";

function HeroVisual() {
  const lines = [
    { prompt: "$", cmd: "open ticket/#1423" },
    { out: "status: resolved", tone: "good" },
    { prompt: "$", cmd: "trace stripe.webhook.signature" },
    { out: "200 OK · verified", tone: "good" },
    { prompt: "$", cmd: "magento/inventory --reconcile" },
    { out: "sku mismatch · 2 fixed", tone: "warn" },
    { prompt: "$", cmd: 'docs --update "refund flow"' },
    { out: "shipped · saves repeat questions", tone: "good" },
  ];

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__glow" />

      <div className="hero-visual__card">
        <div className="hero-visual__chrome">
          <span className="chrome-dot chrome-dot--red" />
          <span className="chrome-dot chrome-dot--yellow" />
          <span className="chrome-dot chrome-dot--green" />
          <span className="hero-visual__title">collin@support ~ tickets</span>
        </div>

        <div className="hero-visual__tabs">
          <span className="hv-chip hv-chip--active">autosortpro</span>
          <span className="hv-chip">m2-instacount</span>
          <span className="hv-chip">prod-logs</span>
        </div>

        <div className="hero-visual__body">
          {lines.map((line, i) =>
            line.prompt ? (
              <div className="hv-line" style={{ animationDelay: `${i * 160}ms` }} key={i}>
                <span className="hv-prompt">{line.prompt}</span>
                <span className="hv-cmd">{line.cmd}</span>
              </div>
            ) : (
              <div className="hv-line" style={{ animationDelay: `${i * 160}ms` }} key={i}>
                <span className="hv-arrow">↳</span>
                <span className={`hv-out hv-out--${line.tone}`}>{line.out}</span>
              </div>
            )
          )}
          <div className="hv-line hv-line--cursor" style={{ animationDelay: "1400ms" }}>
            <span className="hv-prompt">$</span>
            <span className="hv-caret" />
          </div>
        </div>
      </div>

      <div className="hero-visual__badge hero-visual__badge--top">
        <span className="hv-badge-dot" />
        <span>live · production</span>
      </div>
      <div className="hero-visual__badge hero-visual__badge--bottom">
        <span className="hv-badge-tag">Auth0</span>
        <span className="hv-badge-tag">Stripe</span>
        <span className="hv-badge-tag">AWS</span>
      </div>
    </div>
  );
}

export default HeroVisual;
