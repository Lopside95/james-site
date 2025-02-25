import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  image,
  href,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-lg  lg:w-1/2  transition-colors"
    >
      <div className="flex relative px-2 gap-3  justify-center xl:gap-10 items-center ">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={200}
          height={450}
          className="w-52 transition-transform duration-300 group-hover:scale-105"
        />
        <p className="xl:hidden md:w-1/2">
          A fullstack web app with authentication, content creation and
          deletion.
        </p>
        <p className="hidden xl:block lg:w-[53%]">
          A platform for users to find their lost dogs or to create posts
          signalling the sighting and location of a dog they’ve seen.
        </p>
      </div>
      <div className="p-4">
        <h3 className="font-semibold tracking-tight underline">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
