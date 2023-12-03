import { Inter } from "next/font/google";
import { useState } from "react";
import Carousel from "../component/Carousel/Carousel";
import Container from "../component/Container/Container";
import ExchangeRate from "../component/ExchangeComponent/ExchangeRate";
import BodyText from "../component/BodyText/BodyText";
import Slider from "../component/Slider/Slider";
import Header from "../component/Navbar/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <main className={`${inter.className}`}>
        <div className="fixed z-50 top-[50%] right-[40px] bg-slate-300 p-3 rounded-full w-[17.5%] lg:w-[5%]">
        <div className=" btn-anime">
          <button
            className="p-4 bg-white rounded-full"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? (
              <img
                src="/assets/contact-icon.png"
                alt=""
                className="w-full h-auto"
              />
            ) : (
              <img
                src="/assets/cancel-icon.png"
                alt=""
                className="w-full h-auto"
              />
            )}
          </button>
        </div>
        {toggle && (
          <div className="ease-in duration-300 transition-all">
            <div className="my-2 btn-anime">
              <button className="p-4 bg-green-800 rounded-full">
                <img
                  src="/assets/whatsapp.png"
                  alt=""
                  className="w-full h-auto"
                />
              </button>
            </div>
            <div className="my-2 btn-anime">
              <button className="p-4 bg-black rounded-full">
                <img src="/assets/call.png" alt="" className="w-full h-auto" />
              </button>
            </div>
            <div className="my-2 btn-anime">
              <button className="p-4 bg-blue-800 rounded-full">
                <img src="/assets/fb.png" alt="" className="w-full h-auto" />
              </button>
            </div>
          </div>
        )}
      </div>
      <Header />
      <Carousel />
      <Container>
        <ExchangeRate />
        <Slider />
      </Container>
      <BodyText />
    </main>
  );
}
