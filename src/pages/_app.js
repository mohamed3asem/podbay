import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { useIsLoadingPage } from "../hooks/useIsLoadingPage";

import "./styles.css";

export default function App({ Component, pageProps }) {
  const [loading] = useIsLoadingPage();
  return <Layout>{loading ? <Loader /> : <Component {...pageProps} />}</Layout>;
}
