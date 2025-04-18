import Image from "next/image";

const SignUp = () => {
  return (
    <div>
      <article className="flex max:md-py-5 lg:justify-around  xl:pl-10  ">
        <div className="flex flex-col md:w-2/3 gap-10 md:gap-1 py-10   ">
          <h1 className="self-start pb-4 ">Signing up</h1>
          <p className="lg:w-[30rem]  ">
            The sign up process uses Zod and React-Hook-Form for validation, and
            JWT and bcrypt for authorisation.
          </p>
          <p className="lg:w-[30rem]">
            The sign up process uses Zod and React-Hook-Form for validation, and
            JWT and bcrypt for authorisation.
          </p>
        </div>
        <Image
          alt="Account SignUp"
          className="max-md:py-8 w-72"
          height={600}
          src="/findmydog/signup-2.png"
          width={600}
        />
      </article>
    </div>
  );
};

export default SignUp;
