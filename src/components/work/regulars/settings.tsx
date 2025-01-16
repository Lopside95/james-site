import Image from "next/image";

const Settings = () => {
  return (
    <div>
      <article className="flex max:md-py-5 max-md:flex-col items-center">
        <div className="flex flex-col md:w-2/3 gap-4 ">
          <h1>User and Company Settings</h1>
          <p>
            A tabbed interface allowing companies and employees to update or
            delete their accounts.
          </p>
        </div>
        <Image
          alt="Account settings"
          className="max-md:py-8"
          height={600}
          src="/regulars/settingsLaptop.png"
          width={600}
        />
      </article>
    </div>
  );
};

export default Settings;
