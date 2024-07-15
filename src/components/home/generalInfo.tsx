import { Card, CardContent, CardTitle, CardHeader } from "@ui/card";

const GeneralInfo = () => {
  return (
    <div className=" py-5 pr-3 w-full flex h-full bg-transparent  ">
      <Card className=" w-full bg-transparent border-none ">
        <CardHeader>
          <CardTitle className="sm:text-3xl text-2xl -mb-4">
            I have always appreciated the challenges and satisfactions that come
            with making things.
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          As a copywriter , I created and told stories. For a brief while I made
          furniture – only as a hobby but the pieces were good enough for me and
          I still use them. Now, as a developer, I want to build websites and
          apps.
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneralInfo;
