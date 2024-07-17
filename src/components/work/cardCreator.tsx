import Image from "next/image";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";

const CardCreator = () => {
  return (
    <article className="flex-col flex ">
      <div className="md:w-[32rem] pt-2 pb-8">
        <h1 className="">The Card Creator</h1>
        <p className="pt-5 pb-3">
          Companies needed a way to generate their digital loyalty cards.
        </p>
        <p>
          The card creator is a three step process, beginning with the form, or
          ‘Card Page’, from which customers can download the card.{" "}
        </p>
        <p>My role mostly involved the preview of the card page.</p>
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
