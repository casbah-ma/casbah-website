import GlobalStyles from "../src/components/GlobalStyles";
import "../src/styles/globals.css";
import "twin.macro";
import { Inter, Mako } from "next/font/google";
import localFont from "next/font/local";
const mako = Mako({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mako",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const made = localFont({
  src: "../src/fonts/MADE-Outer-Sans-Light.otf",
  variable: "--font-made",
});

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    layout: "centered",
  },

  decorators: [
    (Story) => (
      <main className={`${mako.variable} ${inter.variable} ${made.variable}`}>
        <GlobalStyles />
        <Story />
      </main>
    ),
  ],
};

export default preview;
