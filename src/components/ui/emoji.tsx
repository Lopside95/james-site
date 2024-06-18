import React from "react";
const Emoji = (props: any) => (
  <span
    aria-hidden={props.label ? "false" : "true"}
    aria-label={props.label ? props.label : ""}
    className="emoji"
    role="img"
  >
    {props.symbol}
  </span>
);
export default Emoji;
