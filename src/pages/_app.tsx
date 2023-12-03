import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../component/Navbar/Header";
import Footer from "../component/Footer/Footer";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      {/* <Footer /> */}
    </div>
  );
}
