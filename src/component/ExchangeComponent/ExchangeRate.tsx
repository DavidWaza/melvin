import React from "react";
import { Text } from "../Typhography/Typography";
import TableResponsive from "../TableResponsive/TableResponsive";

const ExchangeRate = () => {
  return (
    <div className=" w-full lg:max-w-2xl m-auto lg:-mt-[10rem] mt-[2rem] border">
      <div className="bg-base-100 h-[10rem] p-10  z-20 relative ">
        <Text
          variant="large"
          className="text-white font-lexend border-l-2 px-2"
        >
          Currency Exchange Rate
        </Text>
        <Text variant="small" className="text-white px-2">
          Current Date
        </Text>
      </div>
      <div className="bg-white py-10 px-2">
        <TableResponsive />
      </div>
    </div>
  );
};

export default ExchangeRate;