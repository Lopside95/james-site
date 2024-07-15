import Image from "next/image";

const Settings = () => {
  return (
    <div>
      <article className="flex items-center">
        <div className="flex flex-col w-2/3 gap-4 ">
          <h1>User and Company Settings</h1>
          <p>
            A tabbed interface allowing companies and employees to update or
            delete their accounts.
          </p>
        </div>
        <Image
          alt="Regulars home page"
          className=""
          height={600}
          src="/settingsLaptop.png"
          width={600}
        />
      </article>
      <article className="flex items-center mr-10">
        <Image
          alt="Download preview"
          className="w-1/2 h-auto  "
          height={800}
          src="/settingsMobile.png"
          width={800}
        />
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
      </article>
    </div>
  );
};

export default Settings;
