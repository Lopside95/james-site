import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const MyTypewriter = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="h-24">
      <TypeAnimation
        sequence={[
          "Hi 👋",
          1000,
          "Hi, I'm James.",
          800,
          () => {
            setStep(2);
          },
        ]}
        cursor={false}
        wrapper="span"
        speed={60}
        style={{
          fontSize: "1.8rem",
          display: "inline-block",
        }}
      />
      <div className="sm:pt-2">
        {step === 2 && (
          <TypeAnimation
            sequence={["I'm a Software Engineer.", 1000]}
            wrapper="span"
            speed={60}
            style={{ fontSize: "2.5rem", display: "inline-block" }}
            cursor={false}
          />
        )}
      </div>
    </div>
  );
};

export default MyTypewriter;
