import Link from "next/link";
import { Button } from "./ui/button";

export default function NavItems() {
  return (
    <div className="flex  w-1/3 border  pr-30">
      <Button className="text-lg" variant="link">
        <Link href="https://github.com/Lopside95">Github</Link>
      </Button>
      <Button className="text-lg " variant="link">
        <Link href="https://www.linkedin.com/in/james-wallington-2a122bb6/">
          LinkedIn
        </Link>
      </Button>
      <Button className="text-lg " variant="link">
        <Link href="/writing">Writing</Link>
      </Button>
    </div>
  );
}
