import MapCard from "../Map";
import PropTypes from "prop-types";
import Title from "../Title";
import {
  Header,
  HeaderLine,
  HeaderTitle,
  InfoSection,
  Wrapper,
} from "./DropUsSection.styles";
import useTranslation from "next-translate/useTranslation";
import Info from "./Info";
import SpecialText from "../SpecialText";

const DropUsSection = ({ description, specialLine, infos, cords }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>
          <Title renderAs="h1" withoutBorder={true}>
            {t("dropus")}
          </Title>
          <HeaderLine />
        </HeaderTitle>
        <SpecialText text={description} specialLine={specialLine} />
      </Header>
      <InfoSection>
        <Info label={t("phone")} title={infos?.phone} />
        <Info label={t("email")} title={infos?.email} />
        <Info label={t("address")} title={infos?.address} />
      </InfoSection>
      <MapCard latitude={cords?.lat} longitude={cords?.lng} />
    </Wrapper>
  );
};

// proptypes
DropUsSection.propTypes = {
  description: PropTypes.string.isRequired,
  specialLine: PropTypes.string,
  infos: PropTypes.object.isRequired,
  cords: PropTypes.object.isRequired,
};

export default DropUsSection;
