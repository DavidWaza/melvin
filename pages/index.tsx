import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Navbar/Header";
import Carousel from "./component/Carousel/Carousel";
import Container from "./component/Container/Container";
import ExchangeRate from "./component/ExchangeComponent/ExchangeRate";
import BodyText from "./component/BodyText/BodyText";
import Slider from "./component/Slider/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <Carousel />
      <Container>
        <ExchangeRate />
        <BodyText />
        <Slider />
      </Container>
    </main>
  );
}
