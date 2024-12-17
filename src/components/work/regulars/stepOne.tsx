import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const StepOne = () => {
  const isLaptop = useMediaQuery({
    query: "(min-width: 1100px)",
  });

  return (
    <div className="flex items-center justify-between md:justify-evenly pb-10 ">
      <div className="w-2/3">
        <h2>Step one</h2>
        <p className="md:w-4/5 pt-4 pb-6">
          Companies can decide which fields they want present, the name of that
          field and whether or not the field is required. Choices are reflected
          on the preview.
        </p>
        {/* {Boolean(isLaptop) && (
          <pre className="p-3 bg-gray-200/75 rounded-sm md:w-[95%]">
            <code className="max-md:w-80 ">
              {`const convertSettingsToArray = (settings: TLandingPage) => {
  const acc: TIssuingForm = [];
  
  if (settings?.issuingForm?.length > 0) {
    acc.push(
      ...settings.issuingForm.map((x) => ({
        header: "New field *",
        name: x.name,
        fieldType: x.fieldType
        ? x.fieldType.charAt(0).toLowerCase() + x.fieldType.slice(1)
        : undefined,
        required: x.required,
        })),
        );
        }
        
        return acc;
        };`}
            </code>
          </pre>
        )} */}
      </div>
      <Image
        alt="Download preview"
        className="w-48 md:w-72 py-5 md:mt-10 pr-5"
        height={800}
        src="/cardPagePreview.png"
        width={800}
      />
    </div>
  );
};

export default StepOne;
