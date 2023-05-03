import PropTypes from 'prop-types'
import { StyledP } from './paragraph.styles'
import { sizes } from './paragraph.styles'

function Paragraph({ children, size, color, ...rest }) {
  return (
    <StyledP size={size} color={color} {...rest}>
      {children}
    </StyledP>
  )
}

Paragraph.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
}

export default Paragraph
