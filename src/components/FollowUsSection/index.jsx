import { SocialMedia, Wrapper } from './FollowUsSection.styles';
import Header from '../Header';
import XButton from '../XButton';
import { socialMedia } from '../../config/constant';

const FollowUs = ({ description }) => {
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Wrapper>
      <Header description={description} title="followus" />
      <SocialMedia>
        {socialMedia.length > 0 &&
          socialMedia.map((item, index) => (
            <XButton key={index} onClick={() => handleClick(item.link)}>
              {item.name}
            </XButton>
          ))}
      </SocialMedia>
    </Wrapper>
  );
};

export default FollowUs;
