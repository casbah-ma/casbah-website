import PropTypes from 'prop-types';
import { Grid, Wrapper } from './TeamSection.styles';
import Header from '../Header';
import ProfileCard from '../ProfileCard';

function TeamSection({ title, description, cards }) {
  return (
    <Wrapper>
      <Header description={description} title={title} withLine={true} />
      <Grid>
        {cards?.length > 0 &&
          cards.map((card) => <ProfileCard key={card.name} {...card} />)}
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
