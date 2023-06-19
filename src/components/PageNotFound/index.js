import { useEffect, useState } from 'react';
import {
  DivsWrapper,
  StyledDiv,
  Wrapper,
  Content,
  Title,
  SubTitle,
} from './PageNotFound.styles ';
import useTranslation from 'next-translate/useTranslation';

const PageNotFound = () => {
  const [divCount, setDivCount] = useState();
  const {t} = useTranslation()
  useEffect(() => {
    const breakpoint = (screenWidth) => {
      if (screenWidth < 768) return 37;
      if (screenWidth < 1024) return 50;
      if (screenWidth >= 1024) return 96;
    };

    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const divCount = Math.floor(screenWidth / breakpoint(screenWidth));
    setDivCount(divCount / 2);
  }, []);

  // Create an array of divs
  const divs = Array.from({ length: divCount });



  return (
    <Wrapper>
      <DivsWrapper>
        {divs.map((_, index) => (
          <StyledDiv key={index} />
        ))}
      </DivsWrapper>
      <Content>
        <Title>404</Title>
        <SubTitle>{t("_404")}</SubTitle>
      </Content>
    </Wrapper>
  );
};

export default PageNotFound;
