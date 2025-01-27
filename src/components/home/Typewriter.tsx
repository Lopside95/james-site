import { TypeSpeed } from "@/types/work";
import React, { SetStateAction, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

// type TypewriterProps = {
//   isCursorActive: boolean;
//   setIsCursorActive: React.Dispatch<SetStateAction<boolean>>;
// };

const Typewriter = () => {
  const [step, setStep] = useState<number>(1);
  //   const [isTyping, setIsTyping] = useState<string>("");
  const [fontSize, setFontSize] = useState<string>("1.5rem");
  const [typeSpeed, setTypeSpeed] = useState<TypeSpeed>(30);

  useEffect(() => {
    console.log("step", step);
  }, [step]);

  return (
    <div>
      <TypeAnimation
        sequence={[
          "Hi 👋",
          800,
          "Hi, I'm James.",
          1000,

          () => {
            setStep(2);
          },
        ]}
        cursor={false}
        // cursor={step === 2 ? false : true}
        wrapper="span"
        speed={typeSpeed}
        style={{
          fontSize: "1.8rem",
          //   fontSize: step === 1 ? "1.5rem" : "4rem",
          display: "inline-block",
        }}
      />
      <div className="h-16 py-2">
        {step === 2 && (
          <TypeAnimation
            sequence={["I'm a Software Engineer.", 1000]}
            //   sequence={["Hi, 👋", 1000, "Hi, I'm James", 1000, "Hi, I'm James", 1000]}
            wrapper="span"
            speed={40}
            style={{ fontSize: "2.5rem", display: "inline-block" }}
            cursor={false}
          />
        )}
      </div>
    </div>
  );
};

export default Typewriter;
