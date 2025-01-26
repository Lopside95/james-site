import { TypeSpeed } from "@/types/work";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  const [step, setStep] = useState<number>(1);
  //   const [isTyping, setIsTyping] = useState<string>("");
  const [fontSize, setFontSize] = useState<string>("1.5rem");
  const [typeSpeed, setTypeSpeed] = useState<TypeSpeed>(30);

  //   const lineTwo = "I'm a Software Engineer.";

  useEffect(() => {
    console.log("step", step);
  }, [step]);

  //   useEffect(() => {
  //     if (step === 2) {
  //       setTypeSpeed(40);
  //     }
  //   }, [step]);

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
          whiteSpace: "pre-line",
          fontSize: "1.5rem",
          //   fontSize: step === 1 ? "1.5rem" : "4rem",
          display: "inline-block",
        }}
      />
      <div className="h-20">
        {step === 2 && (
          <TypeAnimation
            sequence={["I'm a Software Engineer.", 1000]}
            //   sequence={["Hi, 👋", 1000, "Hi, I'm James", 1000, "Hi, I'm James", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2.5rem", display: "inline-block" }}
            className="py-5"
          />
        )}
      </div>
    </div>
  );
};

export default Typewriter;

// export const lineTwo: React.FC<string> = () => {
//   return (
//     <div>
//       <p className="text-3xl">I'm a Software Engineer.</p>
//     </div>
//   );
// };
