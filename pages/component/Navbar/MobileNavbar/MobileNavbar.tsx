import React, { useState } from "react";
import Accordion from "../../Accordion/Accordion";
import { header, dataNav, contactheader, onlineheader } from "@/lib/data";

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-end">
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        )}
      </button>
      {toggle && (
        <div className="absolute top-[5rem] right-0 left-0 px-[2rem]">
          <Accordion
            header={header}
            data={dataNav}
            status={false}
            toggleStatus={false}
          />
          <Accordion
            header={contactheader}
            data={dataNav}
            status={false}
            toggleStatus={false}
          />
          <Accordion
            header={onlineheader}
            data={dataNav}
            status={false}
            toggleStatus={false}
          />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
