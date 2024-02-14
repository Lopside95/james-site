import Navbar from "../components/Navbar";
import Copywriting from "../components/copywriting";
import NavItems from "../components/navItems";

export default function Writing() {
  return (
    <div className="w-full items-center align-middle flex flex-col min-h-screen bg-base-bg text-base-txtClr ">
      <Navbar />
      <div className="w-3/5">
        <Copywriting />
      </div>
    </div>
  );
}
