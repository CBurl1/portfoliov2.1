import React from "react";
import { GiMountainClimbing, GiBaseballBat } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";

const items = [
  {
    icon: <TbWorld />,
    title: "Global exploration",
    body: "20+ countries visited — broadens perspective and sharpens how I approach new systems and people.",
  },
  {
    icon: <GiMountainClimbing />,
    title: "Skiing",
    body: "A newfound love that keeps me connected to nature and comfortable with challenge.",
  },
  {
    icon: <GiBaseballBat />,
    title: "Coaching",
    body: "Coaching youth baseball — giving back and sharing lessons learned from my own experiences.",
  },
];

function OutsideWork() {
  return (
    <div className="interest-grid">
      {items.map((item) => (
        <div className="interest-card" key={item.title}>
          <div className="interest-card__icon">{item.icon}</div>
          <h4 className="interest-card__title">{item.title}</h4>
          <p className="interest-card__body">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default OutsideWork;
