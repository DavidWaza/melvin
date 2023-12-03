import React from "react";
import { Text } from "@/src/component/Typhography/Typography";

const CashAvailable = () => {
  return (
    <div>
      <Text variant="extrasmall" className="text-white">
        Amount Available
      </Text>
      <Text variant="large" className="text-white">
        $ 0.00
      </Text>
    </div>
  );
};

export default CashAvailable;
