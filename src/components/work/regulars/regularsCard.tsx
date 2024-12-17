import { Card, CardContent, CardTitle } from "../ui/card";
import Emoji from "../ui/emoji";

type CardProps = {
  emoji?: string;
  label?: string;
  desc?: string;
  title?: string;
};

const RegularsCard = ({ label, emoji, desc, title }: CardProps) => {
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
