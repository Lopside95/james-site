import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Variants, motion } from "framer-motion";

type CardProps = {
  image: string;
  title?: string;
  desc?: string;
};

const RegularsCard = ({ image, title, desc }: CardProps) => {
  return (
    <div className="w-full">
      <Card>
        <Image width={500} height={500} src={image} alt="" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default RegularsCard;
