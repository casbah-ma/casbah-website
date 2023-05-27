import { SocialMedia, Wrapper } from './FollowUsSection.styles';
import Header from '../Header';
import XButton from '../XButton';
import { socialMedia } from '../../config/constant';

const FollowUs = ({ description }) => {
  return (
    <Wrapper>
      <Header description={description} title="followus" />
      <SocialMedia>
        {socialMedia.length > 0 &&
          socialMedia.map((item, index) => (
            <XButton key={index} as="a" href={item.link} target="_blank">
              {item.name}
            </XButton>
          ))}
      </SocialMedia>
    </Wrapper>
  );
};

export default FollowUs;
