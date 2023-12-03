import React from "react";

interface transferProps {
  label: string;
  imgSrc: string;
}
const MoneyTransfer = (props: transferProps) => {
  return (
    <button className="bg-slate-800 rounded-sm  w-full">
      <div className="flex justify-center items-center gap-2 p-2 w-full lg:w-[150px]">
        <img
          src={`/assets/${props.imgSrc}`}
          alt="up"
          className="h-5 w-5"
        />
        <span className="text-white">{props.label}</span>
      </div>
    </button>
  );
};

export default MoneyTransfer;
