import { forwardRef, useEffect, useState } from 'react';

const Player = forwardRef((props, ref) => {
  const [PlayerComponent, setPlayerComponent] = useState(null);

  useEffect(() => {
    import('@lottiefiles/react-lottie-player').then((mod) => {
      setPlayerComponent(() => mod.Player);
    });
  }, []);

  if (!PlayerComponent) {
    return null;
  }

  return <PlayerComponent ref={ref} {...props} />;
});

Player.displayName = 'Player';

export default Player;
