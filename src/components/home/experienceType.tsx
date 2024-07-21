import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type ItemType = {
  name: string;
  type: string;
};

const ExperienceCard = () => {
  const lines = [{ name: "name", type: "string" }];

  return (
    <div>
      <h3>
        <span className="text-blue-400">const</span>{" "}
        <span className="text-blue-800">regulars: {`{`}</span>{" "}
        {/* <span className="text-green-600">{`Experience = {`}</span> */}
      </h3>
      <Item name="title:" type="string;" />
      <Item name="company:" type="string;" />
      <Item name="period:" type="string;" />
      <Item name="desc:" type="string;" />
      <h3 className="text-green-600">{`}`}</h3>
    </div>
    // <div>
    //   <h3>
    //     (<span className="text-blue-400">alias</span>){" "}
    //     <span className="text-blue-800">type</span>{" "}
    //     <span className="text-green-600">{`Experience = {`}</span>
    //   </h3>
    //   <Item name="title:" type="string;" />
    //   <Item name="company:" type="string;" />
    //   <Item name="period:" type="string;" />
    //   <Item name="desc:" type="string;" />
    //   <h3 className="text-green-600">{`}`}</h3>

    // </div>
  );
};

export default ExperienceCard;

export const Item = ({ name, type }: ItemType) => {
  return (
    <p className="text-blue-400 pl-10">
      {name}
      <span className="text-green-400 pl-2 ">{type}</span>
    </p>
  );
};
