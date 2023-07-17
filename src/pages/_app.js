import GlobalStyles from '@/components/GlobalStyles';
import '@/styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Inter, Mako } from 'next/font/google';
import localFont from 'next/font/local';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
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
  const hasTransition = router.route !== '/' && router.route !== '/portfolio';

  const variants = {
    hidden: { opacity: 0, y: 100, transition: { duration: 0.5 } },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  };

  return (
    <>
      <GlobalStyles />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <TransitionPage />
        <Layout
          className={`${mako.variable} ${inter.variable} ${made.variable} `}
          key={router.asPath}
          hasPadding={hasTransition}
        >
          {hasTransition ? (
            <motion.main
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: 'linear' }}
              className="w-full"
            >
              <Component {...pageProps} />
            </motion.main>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </AnimatePresence>
    </>
  );
}
