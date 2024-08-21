import React from "react";
import { Link} from "react-router-dom";

const ListItem = (props) => {
  return (
    <>
      <Link to={props.to} className="w-full">
        <div className={`${ location.pathname === props.to?"border-green-500 border-b-[3px]":""}`}>
          <h3 className="font-Inter font-bold">{props.title}</h3>
        </div>
      </Link>
    </>
  );
};

export default ListItem;
