import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Settings = () => {
  const isLaptop = useMediaQuery({
    query: "(min-width: 1100px)",
  });

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
          src="/settingsLaptop.png"
          width={600}
        />
      </article>
      <article className="flex justify-evenly max-md:py-8 items-center mr-10">
        <Image
          alt="Mobile settings view"
          className="md:w-1/4 max-sm:pr-10 sm:w-72 h-auto"
          height={600}
          src="/settingsMobile.png"
          width={600}
        />
        {isLaptop ? (
          <pre className="-ml-10 p-5 rounded-sm bg-gray-200/75">
            <code>
              {`
updateUserSettings: protectedProcedure
.input(userSettingsSchema)
.mutation(async ({ input, ctx }) => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      id: ctx.session.user.id,
      },
      });
      `}
            </code>
          </pre>
        ) : (
          <Image
            alt="Mobile settings view"
            className="md:w-1/4  w-72 h-auto"
            height={600}
            src="/settingsBar.png"
            width={600}
          />
        )}
      </article>
    </div>
  );
};

export default Settings;
