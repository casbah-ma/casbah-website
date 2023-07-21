import { Player } from '@lottiefiles/react-lottie-player';
import { LottierContainer, Wrapper } from './LottieText.styles';

export default function LottieText({
  lottie,
  setIsEnd = null,
  isLogo,
  ...rest
}) {
  return (
    <Wrapper {...rest}>
      <LottierContainer isLogo={isLogo}>
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
      </LottierContainer>
    </Wrapper>
  );
}
