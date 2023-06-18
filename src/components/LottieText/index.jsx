import { Player } from '@lottiefiles/react-lottie-player';
import { Wrapper } from './LottieText.styles';

export default function LottieText({ lottie, className }) {
  return (
    <Wrapper className={className}>
      <Player keepLastFrame autoplay loop={false} src={lottie} />
    </Wrapper>
  );
}
