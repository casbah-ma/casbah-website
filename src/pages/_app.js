import GlobalStyles from '@/components/GlobalStyles';
import '@/styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Inter, Mako } from 'next/font/google';
import localFont from 'next/font/local';
import Layout from '../components/Layout';

const made = localFont({
  src: '../../public/fonts/made.otf',
  variable: '--font-made',
});

const mako = Mako({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mako',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout className={`${mako.variable} ${inter.variable} ${made.variable}`}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
