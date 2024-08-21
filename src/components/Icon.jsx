import React from "react";

const Icon = (props) => {
    const {Icon} = props.Icon;
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3">
        <Icon size={props.size}/>
        <ul>
            <li>{props}</li>
        </ul>
      </div>
    </>
  );
};

export default Icon;
