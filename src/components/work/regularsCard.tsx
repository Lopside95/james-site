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
import Emoji from "../ui/emoji";

type CardProps = {
  emoji?: string;
  label?: string;
  desc?: string;
};

const RegularsCard = ({ label, emoji, desc }: CardProps) => {
  return (
    <Card className="bg-green-200 h-60 w-72">
      <CardTitle>
        <Emoji label={label} emoji={emoji} />
      </CardTitle>
      <CardContent>{desc}</CardContent>
    </Card>
  );
};

export default RegularsCard;
