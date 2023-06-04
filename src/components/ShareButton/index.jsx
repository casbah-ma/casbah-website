import Link from 'next/link';
import { Wrapper } from './ShareButton.styles';

const ShareButton = ({ Icon, children, link, message }) => {
  const url = link + message;
  return (
    <Wrapper as="a" href={url} target="_blank">
      <Icon />
      {children}
    </Wrapper>
  );
};

export default ShareButton;
