import { Player } from '@lottiefiles/react-lottie-player';
import { Wrapper } from './LottieText.styles';

export default function LottieText({ lottie }) {
  return (
    <Wrapper>
      <Player keepLastFrame autoplay loop={false} src={lottie} />
    </Wrapper>
  );
}
