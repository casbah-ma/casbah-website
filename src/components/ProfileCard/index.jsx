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

export default ProfileCard