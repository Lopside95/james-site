import Image from "next/image";

const StepThree = () => {
  return (
    <div className="flex items-center py-10 ">
      <div className="w-2/3">
        <h2>Step one</h2>
        <p className="w-4/5 py-4">
          Finally, the backside of the card holds any links or relevant
          information, including options for customers to refer friends and
          potentially earn a stamp or two in the process.
        </p>
      </div>
      <Image
        alt="Backside preview"
        className="w-72 pr-5"
        height={600}
        src="/backsidePreview.png"
        width={500}
      />
    </div>
  );
};

export default StepThree;
