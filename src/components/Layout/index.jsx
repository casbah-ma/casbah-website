import Navbar from '../Navbar';
import Footer from '../Footer';
import { MainWrapper, Wrapper } from './Layout.styles';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import TopButton from '../TopButton';
import { CursorContext } from '../../store/CursorContext';

const Layout = ({ children, hasPadding, ...rest }) => {
  const { reset } = useContext(CursorContext);
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

    //reset the cursor tracker state
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route, isFooter]);

  return (
    <Wrapper initial="hidden" animate="visible" exit="exit" {...rest}>
      {!isHome && <Navbar />}
      <MainWrapper isNotFound={isNotFound} hasPadding={hasPadding}>
        {children}
      </MainWrapper>
      {isFooter && showFooter && <Footer />}
      {!isHome && <TopButton />}
    </Wrapper>
  );
};

export default Layout;
