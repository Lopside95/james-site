import Image from "next/image";
import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import TechStack from "../components/techStack";
import Intro from "../components/Intro";
import RootLayout from "../layout";
import NavItems from "../components/navItems";
import GeneralInfo from "../components/generalInfo";

export default function Home() {
  return (
    <div className="w-full items-center align-middle flex flex-col min-h-screen bg-base-bg text-base-txtClr ">
      <Navbar />
      <section className="w-3/5">
        <Intro />
        <article className="flex">
          <GeneralInfo />
          <span className="w-4/5 h-52 border border-base-txtClr text-center ">
            Resume
          </span>
        </article>
        <TechStack />
      </section>
    </div>
  );
}

{
  /* <div className="w-full items-center p-5 align-middle flex flex-col min-h-screen bg-gray-700">
<div className="align-middle w-3/4 bg-slate-600 h-full self-center justify-center">
  <Card className="w-2/3 bg-transparent border-none">
    <CardHeader>
      <CardTitle className="text-3xl">{`Hi, I'm James.`}</CardTitle>
    </CardHeader>
    <CardContent className="text-xl">
      {`I’m a frontend developer and have just finished a six month internship at Regulars, where I helped to develop web and mobile components.`}
    </CardContent>
  </Card>
  <TechStack />
</div> */
}
// import Image from "next/image";
// import Navbar from "../components/Navbar";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardTitle,
//   CardFooter,
//   CardHeader,
// } from "../components/ui/card";
// import TechStack from "../components/techStack";

// export default function Home() {
//   return (
//     <div className="w-full items-center p-5 align-middle flex flex-col min-h-screen bg-gray-700">
//       {/* <Navbar /> */}
//       <section className=" flex flex-row w-3/4 bg-slate-600 h-full px-5 pt-5">
//         <article className="w-3/5 h-52">
//           <h1 className="text-3xl">{`Hi, I'm James`}</h1>
//           <h2 className="text-2xl">{`I'm a frontend developer and have just finished a six month internship at Regulars,
//           where I helped to develop web and mobile components. `}</h2>
//         </article>
//         <article>

//         </article>
//         {/* <Card className="w-2/3 bg-transparent border-none">
//           <CardHeader>
//             <CardTitle className="text-3xl">{`Hi, I'm James.`}</CardTitle>
//           </CardHeader>
//           <CardContent className="text-xl">
//             {`I’m a frontend developer and have just finished a six month internship at Regulars, where I helped to develop web and mobile components.`}
//           </CardContent>
//         </Card> */}
//       </section>
//       <TechStack />
//     </div>
//   );
// }

// {
//   /* <div className="w-full items-center p-5 align-middle flex flex-col min-h-screen bg-gray-700">
// <div className="align-middle w-3/4 bg-slate-600 h-full self-center justify-center">
//   <Card className="w-2/3 bg-transparent border-none">
//     <CardHeader>
//       <CardTitle className="text-3xl">{`Hi, I'm James.`}</CardTitle>
//     </CardHeader>
//     <CardContent className="text-xl">
//       {`I’m a frontend developer and have just finished a six month internship at Regulars, where I helped to develop web and mobile components.`}
//     </CardContent>
//   </Card>
//   <TechStack />
// </div> */
// }
