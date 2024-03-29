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
import CursorTracker from '../components/CursorTracker';
import CursorProvider from '../store/CursorProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useEffect } from 'react';

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

const withoutLAyoutPaddingRoutes = ['lab', 'portfolio', 'blogs', ''];
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const hasTransition = router.route !== '/';
  const hasPadding = !withoutLAyoutPaddingRoutes.includes(
    router.route.replace('/', '')
  );

  const variants = {
    hidden: { opacity: 0, y: 100, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', 'kd2nxyey3h');
  }),
    [];

  return (
    <CursorProvider>
      <GlobalStyles />
      <CursorTracker text="readMore" />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Layout
          hasPadding={hasPadding}
          className={`${mako.variable} ${inter.variable} ${made.variable} `}
          key={router.asPath}
        >
          {hasTransition ? (
            <motion.main
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: 'linear' }}
              className="w-full"
            >
              <Component {...pageProps} />
            </motion.main>
          ) : (
            <Component {...pageProps} />
          )}
          <Analytics />
          <SpeedInsights />
        </Layout>
      </AnimatePresence>
    </CursorProvider>
  );
}
