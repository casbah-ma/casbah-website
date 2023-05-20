import { InfoLabel, InfoTile, InfoWrapper } from "./DropUsSection.styles";

const Info = ({ label, title }) => {
  return (
    <InfoWrapper>
      <InfoLabel>{label}</InfoLabel>
      <InfoTile>{title}</InfoTile>
    </InfoWrapper>
  );
};

export default Info;
