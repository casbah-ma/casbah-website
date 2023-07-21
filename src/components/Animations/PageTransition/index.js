import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LottieText from '../../LottieText';
import Logo from '../../../lotties/logo_casbah.json';
import { waitLoad } from '../../../helpers/utils';

const TransitionPage = ({}) => {
  const router = useRouter();
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // First Animation
      controls.start({
        opacity: 1,
        y: ['100vh', '50vh', '-100vh'],
        backgroundColor: '#FF5100',
        transition: { duration: 0.5 },
        zIndex: 100,
      });
      await controls2.start({
        opacity: 1,
        y: ['100vh', '80vh', '0vh'],
        backgroundColor: '#000F9F',
        transition: { duration: 0.5 },
        zIndex: 4500,
      });
      setShowChildren(true);
      // await 1sec after set state
      await waitLoad(1);
      controls2.start({
        opacity: 1,
        y: ['0vh', '-80vh', '-100vh'],
        backgroundColor: '#000F9F',
        transition: { duration: 0.5 },
        zIndex: 4500,
      });

      // // Third Animation
      await controls.start({
        opacity: 1,
        y: ['0vh', '-20vh', '-100vh'],
        backgroundColor: '#FF5100',
        transition: { duration: 0.5 },
        zIndex: 100,
      });

      setShowChildren(false);
    };

    router.route === '/' && sequence();
  }, [router.route]);

  return (
    <motion.div className="w-full h-full absolute overflow-x-hidden">
      <motion.div
        animate={controls}
        className="w-screen h-full text-white absolute"
      ></motion.div>
      <motion.div
        animate={controls2}
        className="w-screen h-full text-white absolute flex justify-center items-center"
      >
        {showChildren && <LottieText lottie={Logo} isLogo={true} />}
      </motion.div>
    </motion.div>
  );
};

export default TransitionPage;
