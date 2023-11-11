import Link from "next/link";
import Navbar from "./Navbar";
import Container from "../Container/Container";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Header = () => {
  return (
    <header>
      <div>
        <Container className="flex justify-between gap-5 h-[6rem] p-10 border-b border-slate-200 font-medium font-lexend uppercase">
          <Link href="/" className="logo">
            Logo
          </Link>
          <div className="lg:block hidden">
            <Navbar />
          </div>
          <div className="lg:hidden block">
            <MobileNavbar />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
