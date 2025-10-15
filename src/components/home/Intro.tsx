import { Card, CardContent, CardTitle, CardHeader } from "@ui/card";
import Emoji from "../ui/emoji";
import { useState } from "react";
import MyTypewriter from "./MyTypewriter";

const Intro = () => {
  return (
    <Card className="w-full  bg-transparent border-none md:text-3xl ">
      <CardHeader className="px-0 pb-0">
        <MyTypewriter />
      </CardHeader>
      <CardContent className="md:text-3xl pt-3 pb-5 lg:py-1  flex gap-4 md:gap-2  md:pr-4 lg:pr-0  flex-col px-0">
        {/* <p className="">I Like making things.</p> */}
      </CardContent>
    </Card>
  );
};

export default Intro;
