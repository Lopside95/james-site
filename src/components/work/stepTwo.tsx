import Image from "next/image";

const StepTwo = () => {
  return (
    <div className="flex items-center py-10 gap-10">
      <Image
        alt="Design preview"
        className="w-3/5 pr-5"
        height={600}
        src="/designPage.png"
        width={500}
      />
      <div className="w-2/5">
        <h2>Step two</h2>
        <p className="md:w-2/3 py-4">
          Next, companies will design their cards - choosing, among other
          things, logos, colours and stamp icons.
        </p>
        <p>
          There is an option to prefill stamps as an added incentive for
          customers.
        </p>
      </div>
    </div>
  );
};

export default StepTwo;
