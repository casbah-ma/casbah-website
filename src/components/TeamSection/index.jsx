import PropTypes from 'prop-types';
import { Grid, Wrapper } from './TeamSection.styles';
import Header from '../Header';
import ProfileCard from '../ProfileCard';
import React, { useEffect, useState } from 'react';
import ProfileCardInfo from '../ProfileCardInfo';

function TeamSection({ title, description, cards }) {
  const [bp, setBreakpoint] = useState('lg');
  const [Clicked, setClicked] = useState(null);
  const [ClickedIndex, setClickedIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const breakpoint = (screenWidth) => {
    if (screenWidth < 768) return 'sm';
    if (screenWidth < 1024) return 'md';
    if (screenWidth >= 1024) return 'lg';
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      setBreakpoint(breakpoint(screenWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getColumnOffset(cardIndex, totalCards) {
    if (cardIndex === totalCards - 1) {
      return 0; // Last Card in the Last Row (First Column)
    } else {
      return 1; // Second Column
    }
  }

  const getindexbyBp = (rowIndex, bp, index) => {
    if (bp === 'sm') return rowIndex * 1;
    if (bp === 'md') return rowIndex * 2 + getColumnOffset(index, cards.length);
    if (bp === 'lg') return rowIndex * 3 + 2;
  };

  const handleClick = (event, card, index) => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const bp = breakpoint(screenWidth);
    const grid = document.getElementsByClassName('grid');

    const clickedCard = event.target;
    console.log(bp);
    const cols = bp === 'md' ? 2 : 3;
    const rowIndex = Math.floor(
      Array.prototype.indexOf.call(
        grid[0].children,
        clickedCard.parentElement.parentElement
      ) / cols
    );

    setClicked(rowIndex);
    setClickedIndex(bp === 'sm' ? index : getindexbyBp(rowIndex, bp, index));
    setSelectedCard(card);
  };

  return (
    <Wrapper>
      <Header description={description} title={title} withLine={true} />
      <Grid className="grid">
        {cards?.length > 0 &&
          cards.map((card, index) => {
            return (
              <React.Fragment key={card.name + index}>
                <ProfileCard
                  {...card}
                  onClick={(e) => handleClick(e, card, index)}
                />
                {index === ClickedIndex && (
                  <ProfileCardInfo {...selectedCard} />
                )}
              </React.Fragment>
            );
          })}
      </Grid>
    </Wrapper>
  );
}

TeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape(ProfileCard.propTypes)),
};

export default TeamSection;
