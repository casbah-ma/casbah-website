import PropTypes from 'prop-types'
import { StyledTitle, titleLevels } from './title.styles'

const Title = ({ children, renderAs, color, ...rest }) => {
  return (
    <StyledTitle as={renderAs} level={renderAs} color={color} {...rest}>
      {children}
    </StyledTitle>
  )
}

Title.propTypes = {
  renderAs: PropTypes.oneOf(Object.keys(titleLevels)),
}

export default Title
