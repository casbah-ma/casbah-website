import PropTypes from 'prop-types';
import { Wrapper } from './Header.styles';
import Title from '../Title';
import Paragraph from '../Paragraph';
import useTranslation from 'next-translate/useTranslation';

function Header({ title, description, withLine }) {
  const { t } = useTranslation();
  return (
    <Wrapper withLine={withLine}>
      <Title renderAs="h1" withoutBorder={true}>
        {t(title)}
      </Title>
      <Paragraph size="md">{description}</Paragraph>
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
