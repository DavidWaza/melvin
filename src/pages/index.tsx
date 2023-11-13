import Image from "next/image";
import { Inter } from "next/font/google";
import Carousel from "../component/Carousel/Carousel";
import Container from "../component/Container/Container";
import ExchangeRate from "../component/ExchangeComponent/ExchangeRate";
import BodyText from "../component/BodyText/BodyText";
import Slider from "../component/Slider/Slider";
import Footer from "../component/Footer/Footer";
import Layout from "./layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Layout>
        <Carousel />
        <Container>
          <ExchangeRate />
          <Slider />
        </Container>
        <BodyText />
      </Layout>
    </main>
  );
}
