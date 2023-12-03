import React from "react";
import { Text } from "@/src/component/Typhography/Typography";

const CashAvailable = () => {
  return (
    <div className="bg-slate-800 p-5 lg:p-10 lg:w-[500px] w-full rounded-sm">
      
      <Text variant="extrasmall" className="text-white">
        Available Balance
      </Text>
      <Text variant="large" className="text-white">
        $ 0.00
      </Text>
    </div>
  );
};

export default CashAvailable;
