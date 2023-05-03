import GlobalStyles from "../src/components/GlobalStyles";
import "../src/styles/globals.css";
import "twin.macro";
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
      <main className={`${mako.variable} ${inter.variable}`}>
        <GlobalStyles />
        <Story />
      </main>
    ),
  ],
};

export default preview;
