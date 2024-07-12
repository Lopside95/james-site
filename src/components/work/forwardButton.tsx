// import { motion, useAnimationControls } from "framer-motion";
// import { Milestone } from "lucide-react";

// const ForwardButton = (handleNext: () => Promise<void>) => {
//   const tapControls = useAnimationControls();

//   return (
//     <motion.div
//       className="absolute bottom-10 cursor-pointer right-10"
//       // whileTap={{
//       //   rotateY: "360deg",
//       //   transition: {
//       //     duration: 0.8,
//       //   },
//       // }}
//       onClick={() => {
//         handleNext();
//         tapControls.start("spin");
//       }}
//       variants={{
//         spin: {
//           rotateY: "360deg",
//           transition: {
//             duration: 0.8,
//           },
//         },
//       }}
//       animate={tapControls}
//       // onClick={tapControls.start({
//       //   rotateY: "360deg",
//       //   transition: {
//       //     duration: 0.8
//       //   }
//       // })}
//     >
//       <Milestone className=" w-10 h-10" />
//     </motion.div>
//   );
// };

// export default ForwardButton;
