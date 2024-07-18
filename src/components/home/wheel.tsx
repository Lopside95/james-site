import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Question = {
  category: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  type: string;
};

const Wheel = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  //   const [current, setCurrent] = useState<Question>();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  const handleClick = () => {
    if (questions.length > 0) {
      const randomNum = Math.floor(Math.random() * questions.length);
      const specificQuestion = questions[randomNum];
      setCurrentQuestion(specificQuestion);
    }

    console.log("currentQuestion", currentQuestion);
  };

  //   const handleClick = () => {
  //     const amount = questions?.length;

  //     console.log("amount", amount);

  //     const randomNum = Math.floor(Math.random() * amount!);

  //     const specificQuestion = questions ? questions[randomNum] : {};

  //     console.log(specificQuestion);
  //   };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // const res = await fetch("https://the-trivia-api.com/v2/questions");
        const res = await fetch("https://opentdb.com/api.php?amount=10");

        if (!res.ok) {
          console.log("error");
        }

        const data = await res.json();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <Button onClick={handleClick}>handle</Button>
      {/* <Button onClick={()=> }>handle</Button> */}

      {/* <h1>{questions ? questions[0] : ""}</h1> */}
    </div>
  );
};

export default Wheel;
