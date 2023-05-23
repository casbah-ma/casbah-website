import { Wrapper } from './FollowUsSection.styles';
import Header from '../Header'

const FollowUs = ({description}) => {
  return (
    <Wrapper>
      <Header
        description={description}
        title="followus"
      />
    </Wrapper>
  );
};

export default FollowUs;
