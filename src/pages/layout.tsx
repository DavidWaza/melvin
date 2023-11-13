import React, { ReactNode, FC } from "react";
import Header from "../component/Navbar/Header";
import Footer from "../component/Footer/Footer";

interface layoutProps {
  children: ReactNode;
}
const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
