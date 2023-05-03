import GlobalStyles from "@/components/GlobalStyles";
import "@/styles/globals.css";
import { Mako } from "@next/font/google";

const mako = Mako({
  subsets: ["latin"],
  variable: "--font-mako",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${mako.variable}`}>
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
  );
}
