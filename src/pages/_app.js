import GlobalStyles from '@/components/GlobalStyles';
import '@/styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Inter, Mako } from 'next/font/google';
import localFont from 'next/font/local';
import Layout from '../components/Layout';
import {
  LayoutGroup,
  motion,
  AnimatePresence,
  useAnimation,
} from 'framer-motion';
import { useRouter } from 'next/router';
import MyComponent from '.';
import { useEffect, useState } from 'react';
import LottieText from '../components/LottieText';
import Logo from '../lotties/logo_casbah.json';
import TransitionPage from '../components/Animations/PageTransition';

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
  const router = useRouter();

  const variants = {
    hidden: {
      opacity: 0,
      display: 'hidden',
    },
    enter: {
      opacity: 1,
      transition: { duration: 1 },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      {/* <MyComponent /> */}
      <GlobalStyles />
      <AnimatePresence mode="wait" className="h-full">
        <TransitionPage />
        <motion.div
          key={router.route}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 1 }}
        >
          <Layout
            className={`${mako.variable} ${inter.variable} ${made.variable} `}
          >
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
