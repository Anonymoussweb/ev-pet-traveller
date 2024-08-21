import { FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function AddButton(props) {
  return (
    <button
      className="flex items-center justify-center gap-2 text-sm border border-themeBlack 
      text-white font-semibold font-manrope rounded-md px-5 py-2 h-10 bg-themeBlack hover:bg-transparent hover:text-themeBlack duration-200"
      onClick={props.onClick}
    >
      <FaPlus />
      {props.text}
    </button>
  );
}

export function TabButton(props) {
  const location = useLocation().pathname;
  return (
    <button className="relative" onClick={props.onClick}>
      <div className="flex items-center gap-1">
        <li
          className={`${
            props.tab === props.title ? "text-themeRed" : "text-[#A8AEBF]"
          } text-lg font-semibold font-manrope`}
        >
          {props.title}
        </li>
        {location === "/support" ? (
          <div
            className="w-8 h-6 text-white bg-themeRed rounded-xl flex justify-center 
        items-center text-sm font-manrope"
          >
            {props.length}
          </div>
        ) : (
          <></>
        )}
      </div>
      {props.tab === props.title ? (
        <div className="w-full h-1 bg-themeRed rounded-lg absolute top-[32.5px]"></div>
      ) : (
        <></>
      )}
    </button>
  );
}
