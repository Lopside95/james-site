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
  title?: string;
  desc?: string;
};

const RegularsCard = ({ title, desc }: CardProps) => {
  return (
    <div className="w-full">
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default RegularsCard;
