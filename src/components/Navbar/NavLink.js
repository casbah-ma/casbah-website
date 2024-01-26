import { useState } from 'react';
import { Wrapper, Word, LinkName, AbsoluteContainer } from './Navbar.styles';
import useTranslation from 'next-translate/useTranslation';
import { child } from '../Navbar/variants';

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const AnimatedClick = ({ name }) => {
  const { t } = useTranslation();
  return (
    <div className="flex wave ">
      {Array.from(t(name)).map((letter, index) => (
        <span
          key={index}
          variants={child}
          className={index == 0 ? 'capitalize' : ''}
          style={{ animationDelay: `${0.07 * index}s` }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};

const AnimatedLink = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClickAnimation = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClickAnimation}
    >
      {clicked ? (
        <AnimatedClick name={title} />
      ) : (
        <>
          <AnimatedWord
            title={title}
            animations={letterAnimation}
            isHovered={isHovered}
          />
          <AbsoluteContainer>
            <AnimatedWord
              title={title}
              animations={letterAnimationTwo}
              isHovered={isHovered}
            />
          </AbsoluteContainer>
        </>
      )}
    </Wrapper>
  );
};

export default AnimatedLink;

const AnimatedWord = ({ title, animations, isHovered }) => (
  (
    <Word
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? 'hover' : 'rest'}
    >
      {title.split('').map((char, i) =>
        char === ' ' ? (
          <LinkName key={i} className={i == 0 ? 'capitalize' : undefined}>
            &nbsp;
          </LinkName>
        ) : (
          <LinkName
            variants={animations}
            key={i}
            className={i == 0 ? 'capitalize' : undefined}
          >
            {char}
          </LinkName>
        )
      )}
    </Word>
  )
);
