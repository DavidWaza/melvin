import { Html, Head, Main, NextScript } from "next/document";
import Header from "../component/Navbar/Header";
import Footer from "../component/Footer/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
