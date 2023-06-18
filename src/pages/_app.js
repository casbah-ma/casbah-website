import GlobalStyles from '@/components/GlobalStyles';
import '@/styles/globals.css';
import "@/styles/animation.scss"
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

  const parent = {
    enter: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: '100vh',
    },
    enter: {
      y: ['100vh', '0vh'],
      opacity: 1,
      transition: { delay: 1, duration: 1 },
    },
    exit: {
      y: '-100vh',
      opacity: 0,
      delay: 1,
    },
  };

  return (
    <>
      <GlobalStyles />
      <AnimatePresence mode="wait" className="h-full">
        <motion.div variants={parent} animate={'enter'}>
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
        </motion.div>
      </AnimatePresence>
    </>
  );
}
