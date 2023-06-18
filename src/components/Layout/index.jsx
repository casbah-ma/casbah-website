import Navbar from '../Navbar';
import Footer from '../Footer';
import { MainWrapper, Wrapper } from './Layout.styles';
import { useRouter } from 'next/router';

const Layout = ({ children, ...rest }) => {
  const router = useRouter();
  return (
    <Wrapper {...rest}>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
      {router.route !== '/' && router.route !== '/portfolio' && <Footer />}
    </Wrapper>
  );
};

export default Layout;
