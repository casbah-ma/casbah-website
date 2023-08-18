import Navbar from '../Navbar';
import Footer from '../Footer';
import { MainWrapper, Wrapper } from './Layout.styles';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

const Layout = ({ children, hasPadding, ...rest }) => {
  const router = useRouter();
  const isFooter = router.route !== '/' && router.route !== '/404';
  const isNotFound = router.route === '/404';
  const isHome = router.route === '/';

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // show footer after 1sec
    isFooter &&
      setTimeout(() => {
        setShowFooter(true);
      }, 1000);
  }, [router.route, isFooter]);

  return (
    <Wrapper initial="hidden" animate="visible" exit="exit" {...rest}>
      {!isHome && <Navbar />}
      <MainWrapper isNotFound={isNotFound} hasPadding={hasPadding}>
        {children}
      </MainWrapper>
      {isFooter && showFooter && <Footer />}
    </Wrapper>
  );
};

export default Layout;
