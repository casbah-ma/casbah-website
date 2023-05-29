import { SocialMedia, Wrapper } from './FollowUsSection.styles';
import Header from '../Header';
import XButton from '../XButton';
import { media } from '../../config/constant';

const FollowUs = ({ description }) => {
  return (
    <Wrapper>
      <Header description={description} title="followus" is />
      <SocialMedia>
        {media.length > 0 &&
          media.map((item, index) => (
            <XButton key={index} as="a" href={item.url} target="_blank">
              {item.name}
            </XButton>
          ))}
      </SocialMedia>
    </Wrapper>
  );
};

export default FollowUs;
