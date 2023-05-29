import Navbar from '../Navbar';
import { Wrapper } from './Layout.styles';

const Layout = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Navbar />
      {children}
    </Wrapper>
  );
};

export default Layout;
