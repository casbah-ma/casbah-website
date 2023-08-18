import { StyledBtn } from './TopButton.styles';
import TopIcon from '../../icons/TopIcon';
import { useEffect, useState } from 'react';

const TopButton = () => {
  const [visible, setVisible] = useState(false);
  const handlScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisible = () => {
      window.scrollY > 500 ? setVisible(true) : setVisible(false);
    };

    document.addEventListener('scroll', toggleVisible);
  }, []);

  return visible ? (
    <StyledBtn onClick={handlScrollTop}>
      <TopIcon />
    </StyledBtn>
  ) : null;
};

export default TopButton;
