import React, { FC, ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <div className="h-[80px] flex justify-between items-center px-10 bg-[#181818] text-white">
      {children}
    </div>
  );
};

export default Header;
