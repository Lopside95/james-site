import { useRouter } from "next/router";
import React from "react";

function ProjectLink(props: { children: React.ReactNode; href: string }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === props.href ? "red" : "black",
  };

  // | React.KeyboardEvent<HTMLInputElement>
  // | React.KeyboardEvent<HTMLDivElement>
  // | KeyboardEvent,

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(props.href).then(() => {
      const storyEl = document.querySelector("#storyEl");
      storyEl?.scrollIntoView({ block: "end" });

      // setTimeout(() => {
      // const storyEl = document.querySelector("#storyEl");

      //   storyEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      // }, 300);
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
