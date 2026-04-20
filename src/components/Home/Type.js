import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Technical Support Engineer",
          "Application Support Specialist",
          "SaaS Troubleshooting",
          "Builder of M2 InstaCount & AutoSortPro",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
