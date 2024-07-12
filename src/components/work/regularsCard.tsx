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
    <Card className="bg-green-200 h-60 w-72">
      <CardTitle>{title}</CardTitle>
      <CardContent>{desc}</CardContent>
    </Card>
  );
};

export default RegularsCard;
