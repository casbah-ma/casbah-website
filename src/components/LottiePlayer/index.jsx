import dynamic from 'next/dynamic';

const Player = dynamic(
  async () => {
    const ReactLottie = await import('@lottiefiles/react-lottie-player');
    return ReactLottie.Player;
  },
  { ssr: false }
);

export default Player;
