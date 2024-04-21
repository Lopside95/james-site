import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "../ui/card";

const Experience = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl pl-5 py-5 ">Experience</h1>
      <Card className="flex flex-col justify-between border-none">
        <div className="">
          <CardHeader>
            <CardTitle className="text-2xl">
              Junior frontend developer
            </CardTitle>
            <CardDescription className="text-xl">Regulars</CardDescription>
            <CardDescription className="text-base-txtClr text-md">
              September 2023 - current
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent className="text-lg ">
          I have helped to develop the company’s website and mobile components.
          During this time I gained experience with TypeScript, Next.js and
          Tailwind CSS. The ongoing project also involves collaboration with
          other developers and using git for version control.
        </CardContent>
        <CardContent className="text-lg">
          Regulars is a company geared towards SME’s with B2B and B2C digital
          solutions and strategies that offer a new way for businesses to engage
          with and retain customers.
        </CardContent>
      </Card>
      <Card className="flex flex-col justify-between border-none py-10">
        <div className="">
          <CardHeader>
            <CardTitle className="text-2xl">
              Consulting strategist and copywriter
            </CardTitle>
            <CardDescription className="text-xl">
              Serious Moonlight Consulting
            </CardDescription>
            <CardDescription className="text-base-txtClr text-md">
              July 2020 – December 2023
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent className="text-lg">
          I have freelanced for Serious Moonlight Consulting, developing
          strategies, concepts and content for about three years. What often
          makes or breaks a strategy is the story it tells, and the uniqueness
          of this story. A brand’s identity can be complex, with many assets,
          aspects and asides. But at the end of the day, it’s a story, one which
          should be simple and cohesive and finds meaning in empty spaces.
        </CardContent>
        {/* <CardContent className="text-lg">
          {" "}
          Serious Moonlight’s philosophy – as well as its name, which David
          Bowie fans might recognise – comes from his song <i>Let’s Dance</i>.
          ‘Sway through the crowd to an empty place’, which is what the company
          does for its clients and itself.
        </CardContent> */}
      </Card>
    </div>
  );
};

export default Experience;
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardTitle,
//   CardFooter,
//   CardHeader,
// } from "../ui/card";

// const Experience = () => {
//   return (
//     <div className="w-full flex flex-col">
//       <h1 className="text-2xl pl-5 py-5 ">Experience</h1>
//       <Card className="flex justify-between border-none">
//         <div className="flex">
//           <CardHeader>
//             <CardTitle className="text-2xl">
//               Frontend developer intern
//             </CardTitle>
//             <CardDescription className="text-xl">Regulars</CardDescription>
//             <CardDescription className="text-base-txtClr text-md">
//               September 2023 - current
//             </CardDescription>
//           </CardHeader>
//         </div>

//         <CardContent className="text-lg w-1/2">
//           I have helped to develop the company’s website and mobile components.
//           During this time I gained experience with TypeScript, Next.js,
//           Tailwind CSS. The ongoing project also involved collaboration with
//           other developers and using git for version control.
//         </CardContent>
//       </Card>
//       <p>
//         Regulars is a company geared towards SME’s with B2B and B2C digital
//         solutions and strategies that offer a new way for businesses to engage
//         and retain customers.
//       </p>
//       <Card className="flex justify-between border-none py-10">
//         <div className="flex">
//           <CardHeader>
//             <CardTitle className="text-2xl">
//               Consulting strategist and copywriter
//             </CardTitle>

//             <CardDescription className="text-xl">
//               Serious Moonlight Consulting
//             </CardDescription>
//             <CardDescription className="text-base-txtClr text-md">
//               July 2020 – December 2023
//             </CardDescription>
//           </CardHeader>
//         </div>

//         <CardContent className="text-lg w-1/2">
//           Generated campaign strategies, concepts and adverts. Creating social
//           media posts, writing and editing copy for websites and intra-business
//           communication. Transcribing and proofreading.
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Experience;
