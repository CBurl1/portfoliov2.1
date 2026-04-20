import React from "react";

function PageHeader({ eyebrow, title, accent, subtitle, children }) {
  return (
    <header className="page-header">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h1 className="page-header__title">
        {title} {accent && <span className="gradient-text">{accent}</span>}
      </h1>
      {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      {children && <div className="page-header__children">{children}</div>}
    </header>
  );
}

export default PageHeader;
