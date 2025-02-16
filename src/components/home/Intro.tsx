import { Card, CardContent, CardTitle, CardHeader } from "@ui/card";
import Emoji from "../ui/emoji";
import { useState } from "react";
import MyTypewriter from "./MyTypewriter";

const Intro = () => {
  return (
    <Card className="w-full  bg-transparent border-none md:text-3xl ">
      <CardHeader className="px-0 pb-0">
        <MyTypewriter />
        {/* <CardTitle className="md:text-4xl">
          Hi, I'm James <Emoji label="engineer" symbol="🧑‍🔧" />
        </CardTitle> */}
      </CardHeader>
      <CardContent className="md:text-3xl py-5  flex gap-4 md:gap-2  md:pr-4 lg:pr-0  flex-col px-0">
        {/* I'm a software engineer. */}
        <p className="">
          I've always appreciated the challenges and satisfactions that come
          with making things. As a copywriter I created and told stories. I make
          furniture as a hobby and, as a developer, I build websites and apps.
        </p>
      </CardContent>
    </Card>
  );
};

export default Intro;
