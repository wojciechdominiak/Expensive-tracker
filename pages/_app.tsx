import type { AppProps } from "next/app";

import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import BalanceContextProvider from "@/contexts/BalanceContext/BalanceContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BalanceContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BalanceContextProvider>
  );
}
