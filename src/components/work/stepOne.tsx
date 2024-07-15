import Image from "next/image";
import hljs from "highlight.js";
// import useHighlight from "@/helpers/hooks";

// hljs.registerLanguage("typescript", typescript);
const StepOne = () => {
  //   const highCode = hljs.highlight("<span>Hello</span>", {
  //     language: "typescript",
  //   }).value;

  //   hljs = require('highlight.js');
  const html = hljs.highlightAuto(`
    const convertSettingsToArray = (settings: TLandingPage) => {
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
};
    `).value;

  //   useHighlight();

  return (
    <div className="flex items-center py-10 ">
      <div className="w-2/3">
        <h2>Step one</h2>
        <p className="w-4/5 py-4">
          Companies can decide which fields they want present, the name of that
          field and whether or not the field is required. Choices are reflected
          on the preview.
        </p>
        <pre className="p-3 bg-gray-200/75 w-3/4">
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
        {/* <div>{highCode}</div> */}

        {/* <Image
          alt="Download preview code"
          className="w-[36rem] pl-4 pt-4"
          height={600}
          src="/previewCode.png"
          width={500}
        /> */}
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
