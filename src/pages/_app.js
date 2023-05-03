import GlobalStyles from "@/components/GlobalStyles";
import "@/styles/globals.css";
import { Inter, Mako } from "next/font/google";

const mako = Mako({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mako",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${mako.variable} ${inter.variable}`}>
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
  );
}
