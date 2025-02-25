import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
}

export function RegularsProjectCard({
  title,
  description,
  image,
  href,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-lg  lg:w-1/2 justify-between  transition-colors"
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={500}
        height={400}
        className="transition-transform duration-300 pt-10 group-hover:scale-105 self-center md:my-auto"
      />

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
