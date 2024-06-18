import { useRouter } from "next/router";
import React from "react";

function ProjectLink(props: { children: React.ReactNode; href: string }) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(props.href).then(() => {
      const storyEl = document.querySelector("#storyEl");
      storyEl?.scrollIntoView({ block: "end" });
    });
  };

  return (
    <a
      className="underline underline-offset-[6px] duration-1000 "
      href={props.href}
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
}

export default ProjectLink;
