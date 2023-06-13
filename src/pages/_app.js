import { useEffect, useState } from "react";
import Router from "next/router";

import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";

import "./styles.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return <Layout>{loading ? <Loader /> : <Component {...pageProps} />}</Layout>;
}
