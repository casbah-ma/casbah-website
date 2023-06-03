import MyImage from '../MyImage';
import { Info, Name, Post, Wrapper, imageSize } from './UserInfo.styles';

const UserInfo = ({ image, name, post }) => {
  return (
    <Wrapper>
      <MyImage sizes={imageSize} src={image} alt={name} />
      <Info>
        <Name>{name}</Name>
        <Post>{post}</Post>
      </Info>
    </Wrapper>
  );
};

export default UserInfo;
