import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import { Wrapper } from './Layout.styles';

const Layout = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Navbar />
   
    </Wrapper>
  );
};

export default Layout;
