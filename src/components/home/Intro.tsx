import { Card, CardContent, CardTitle, CardHeader } from "@ui/card";
import Emoji from "../ui/emoji";
import Typewriter from "./typewriter";

const Intro = () => {
  return (
    <Card className="w-full bg-transparent border-none md:text-3xl ">
      <CardHeader>
        <Typewriter />
        {/* <CardTitle className="md:text-4xl">
          Hi, I'm James <Emoji label="engineer" symbol="🧑‍🔧" />
        </CardTitle> */}
      </CardHeader>
      <CardContent className="md:text-3xl flex gap-4 md:gap-2  flex-col">
        <p>
          I've always appreciated the challenges and satisfactions that come
          with making things.
        </p>
        <p>
          As a copywriter I created and told stories. I make furniture as a
          hobby and, as a developer, I build websites and apps.
        </p>
      </CardContent>
    </Card>
  );
};

export default Intro;
