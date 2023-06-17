import Footer from '../Footer';
import Navbar from '../Navbar';
import { MainWrapper, Wrapper } from './Layout.styles';

const Layout = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <MainWrapper>
        <Navbar />
        {children}
      </MainWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
