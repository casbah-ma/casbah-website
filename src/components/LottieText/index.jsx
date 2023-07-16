import { Player } from '@lottiefiles/react-lottie-player';
import { Wrapper } from './LottieText.styles';

export default function LottieText({ lottie, setIsEnd = null, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Player
        keepLastFrame
        autoplay
        loop={false}
        src={lottie}
        onEvent={(e) => {
          if (e === 'complete' && setIsEnd) {
            setIsEnd(true);
          }
        }}
      />
    </Wrapper>
  );
}
