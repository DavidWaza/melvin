import Link from "next/link";
import Navbar from "./Navbar";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header>
      <div>
        <Container className="flex justify-between gap-5 h-[6rem] p-10 border-b border-slate-200 font-medium font-lexend uppercase">
          <Link href="/" className="logo">
            Logo
          </Link>
          <Navbar />
        </Container>
      </div>
    </header>
  );
};

export default Header;
