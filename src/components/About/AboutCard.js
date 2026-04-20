import React from "react";

function AboutCard() {
  return (
    <div className="about-card">
      <p>
        I'm <span className="purple">Collin Burleigh</span>, a{" "}
        <span className="purple">Technical Support Engineer</span> focused on{" "}
        <span className="purple">SaaS and ecommerce systems</span> in production.
      </p>
      <p>
        Since June 2023 I've built and supported applications used by{" "}
        <span className="purple">~140 users</span>, handling onboarding, bug reports, and ongoing
        product issues. I'm the developer behind <span className="purple">M2 InstaCount</span> and{" "}
        <span className="purple">AutoSortPro</span>, where I've diagnosed and resolved issues
        across authentication, payments, file processing, and API-driven workflows with{" "}
        <span className="purple">Auth0, Stripe, and AWS</span>.
      </p>
      <p>
        Alongside my freelance work, I'm a{" "}
        <span className="purple">Technical Systems Engineer</span> for a family Magento ecommerce
        business processing <span className="purple">75+ daily orders</span>, where I support
        fulfillment, receiving, inventory, and catalog workflows, troubleshoot SKU and inventory
        discrepancies, and make day-to-day Magento admin and storefront updates.
      </p>
      <p>
        I'm strong at reproducing bugs, investigating issues with API responses, logs, and
        database checks, and closing tickets clearly for non-technical users — and I write the
        documentation that reduces repeat questions.
      </p>
    </div>
  );
}

export default AboutCard;
