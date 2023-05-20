import PropTypes from 'prop-types'
import { CardInfo, CardText, CardTitle, CardWrapper, imagesSize } from "./AwardsCard.styles"
import MyImage from '../MyImage'

const AwardsCard = ({title, date, imgSrc}) => {
    return (
        <CardWrapper>
            <MyImage src={imgSrc} alt={title} sizes={imagesSize} />
            <CardInfo>
                <CardText>{date}</CardText>
                <CardTitle>{title}</CardTitle>
            </CardInfo>
        </CardWrapper>
    )
}


AwardsCard.prototype = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
}

export default AwardsCard