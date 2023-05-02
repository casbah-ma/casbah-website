import GlobalStyles from "@/components/GlobalStyles";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}