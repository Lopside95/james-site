import Image from "next/image";
import Emoji from "../ui/emoji";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";

const CardCreator = () => {
  return (
    <article className="flex-col flex ">
      <div className="w-[26rem]">
        <h1>The Card Creator</h1>
        <p className="pt-5 pb-3">
          Companies needed a way to generate their digital loyalty cards.
        </p>
        <p>
          We designed a 3-step process to create a card. beginning with the
          form, or ‘Card Page’, which will generate a card that customers can
          then download.{" "}
        </p>
      </div>
      <Image
        alt="Regulars home page"
        className="self-center w-2/3 "
        height={600}
        src="/regularsDownload.png"
        width={600}
      />
      <StepOne />
      <StepTwo />
      <StepThree />
    </article>
  );
};

export default CardCreator;
