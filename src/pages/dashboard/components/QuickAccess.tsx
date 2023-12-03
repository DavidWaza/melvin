import React from "react";
const quickSupply = [
  {
    label: "airtime",
    src: "call.svg",
  },
  {
    label: "internet",
    src: "wifi.svg",
  },
  {
    label: "TV",
    src: "tv.svg",
  },
  {
    label: "electricity",
    src: "light.svg",
  },
];
const QuickAccess = () => {
  return (
    <div>
      <span className="text-white text-sm">Quick Access</span>
      <div className="lg:flex gap-3 my-3">
        {quickSupply.map(({ label, src }, index) => (
          <div key={index}>
            <button className="bg-slate-800 rounded-sm p-2 gap-2 w-full lg:w-[150px] my-2 hover:bg-slate-700">
              <img src={`/assets/${src}`} alt="assets" className="h-5 w-5 flex m-auto" />
              <span className="text-white">{label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
