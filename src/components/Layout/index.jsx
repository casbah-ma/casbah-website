import Navbar from '../Navbar';
import Footer from '../Footer';
import { MainWrapper, Wrapper } from './Layout.styles';
import { useRouter } from 'next/router';

const Layout = ({ children, hasPadding, ...rest }) => {
  const router = useRouter();
  const isFooter =
    router.route !== '/' &&
    router.route !== '/portfolio' &&
    router.route !== '/404';
  const isNotFound = router.route === '/404';

  return (
    <Wrapper {...rest}>
      <Navbar />
      <MainWrapper isNotFound={isNotFound} hasPadding={hasPadding}>
        {children}
      </MainWrapper>
      {isFooter && <Footer />}
    </Wrapper>
  );
};

export default Layout;
