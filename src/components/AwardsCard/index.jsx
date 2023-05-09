import { CardInfo, CardText, CardTitle, CardWrapper, imagesSize } from "./AwardsCard.styles"
import MyImage from '../MyImage'

const AwardsCard = ({title, date, imgSrc}) => {
    return (
        <CardWrapper>
            <MyImage src={imgSrc} alt={title} sizes={imagesSize} />
            <CardInfo>
                <CardText size='md'>{date}</CardText>
                <CardTitle>{title}</CardTitle>
            </CardInfo>
        </CardWrapper>
    )
}

export default AwardsCard