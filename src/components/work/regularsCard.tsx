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
  title: string;
  desc: string;
};

const RegularsCard = ({ image, title, desc }: CardProps) => {
  return (
    <>
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
        <CardContent>
          <Image width={800} height={800} src={image} alt="" />
        </CardContent>
      </Card>
    </>
  );
};

export default RegularsCard;
