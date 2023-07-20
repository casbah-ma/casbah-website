import Navbar from '../Navbar';
import Footer from '../Footer';
import { MainWrapper, Wrapper } from './Layout.styles';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

const Layout = ({ children, hasPadding, ...rest }) => {
  const router = useRouter();
  const isFooter =
    router.route !== '/' &&
    router.route !== '/portfolio' &&
    router.route !== '/404';
  const isNotFound = router.route === '/404';
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // show footer after 1sec
    isFooter &&
      setTimeout(() => {
        setShowFooter(true);
      }, 1000);
  }, [router.route]);

  return (
    <Wrapper {...rest}>
      <MainWrapper isNotFound={isNotFound} hasPadding={hasPadding}>
        {children}
      </MainWrapper>
      {isFooter && showFooter && <Footer />}
    </Wrapper>
  );
};

export default Layout;
