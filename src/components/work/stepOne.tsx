import Image from "next/image";

const StepOne = () => {
  return (
    <div className="flex items-center pb-10 ">
      <div className="w-2/3">
        <h2>Step one</h2>
        <p className="w-4/5 py-4">
          Companies can decide which fields they want present, the name of that
          field and whether or not the field is required. Choices are reflected
          on the preview.
        </p>
        <pre className="p-3 bg-gray-200/75 rounded-sm w-[95%]">
          <code>
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
      </div>
      <Image
        alt="Download preview"
        className="w-72 pr-5"
        height={800}
        src="/cardPagePreview.png"
        width={800}
      />
    </div>
  );
};

export default StepOne;
