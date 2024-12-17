import Image from "next/image";

export const RegsIntro = () => (
  <article className="flex max-md:flex-col items-center">
    <div className="flex flex-col">
      <p>
        The company helps cafes by building customer loyalty, turning guests
        into regulars.
      </p>
      <p>
        Built on the idea that retaining guests is cheaper and more effective
        than acquiring new ones, Regulars provides a seamless shift from
        traditional loyalty methods – cutting paper waste, elevating customer
        engagement and changing the loyalty game.
      </p>
      <p>I have helped to develop Regulars’ website and mobile components.</p>
    </div>
    <Image
      alt="Regulars home page"
      className="md:w-3/5 max-md:py-5"
      height={600}
      src="/regularsHome.png"
      width={600}
    />
  </article>
);

{
  /* <h1 className="">Regulars</h1>
        <h2 className="pt-1">Junior frontend developer</h2>

        <article className="flex max-md:flex-col items-center">
          <div className="flex flex-col">
            <p>
              The company helps cafes by building customer loyalty, turning
              guests into regulars.
            </p>
            <p>
              Built on the idea that retaining guests is cheaper and more
              effective than acquiring new ones, Regulars provides a seamless
              shift from traditional loyalty methods – cutting paper waste,
              elevating customer engagement and changing the loyalty game.
            </p>
            <p>
              I have helped to develop Regulars’ website and mobile components.
            </p>
          </div>
          <Image
            alt="Regulars home page"
            className="md:w-3/5 max-md:py-5"
            height={600}
            src="/regularsHome.png"
            width={600}
          />
        </article> */
}
