import Image from "next/image";

const Settings = () => {
  return (
    <div>
      <article className="flex items-center">
        <div className="flex flex-col w-2/3 gap-4 ">
          <h1>User and Company Settings</h1>
          <p>
            Because companies change and employees come and go, the cafes and
            their employees needed a way to update, change or delete their
            accounts.
          </p>
          <p>
            Given that company admins will have both a user and company account,
            the movement between the two interfaces needed to be painless and
            efficient.
          </p>
          <p>
            I have helped to develop Regulars’ website and mobile components.
          </p>
        </div>
        <Image
          alt="Regulars home page"
          className=""
          height={600}
          src="/regularsHome.png"
          width={600}
        />
      </article>
    </div>
  );
};

export default Settings;
