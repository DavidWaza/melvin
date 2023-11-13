import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../component/Navbar/Header";
import Footer from "../component/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
