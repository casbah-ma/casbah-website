import PropTypes from 'prop-types'
import { CardInfo, CardText, CardTitle, CardWrapper, imagesSize } from "./ProfileCard.styles"
import MyImage from '../MyImage'

const ProfileCard = ({name, post, imgSrc}) => {
    return (
        <CardWrapper>
            <MyImage src={imgSrc} alt={name} sizes={imagesSize} />
            <CardInfo>
                <CardTitle>{name}</CardTitle>
                <CardText>{post}</CardText>
            </CardInfo>
        </CardWrapper>
    )
}

ProfileCard.prototype = {
    name: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
}

export default ProfileCard