import Paragraph from '../../Paragraph';
import Title from '../../Title';
import UserInfo from '../../UserInfo';
import { BlogTitle } from '../BlogInfo/BlogInfo.styles';
import {
  BlogContent,
  BlogNumber,
  BlogStep,
  BlogStepsWrapper,
  Wrapper,
} from './BlogSteps.styles';

const BlogSteps = ({ title, steps, paragraph, userInfo }) => {
  steps = steps.split('#');
  return (
    <Wrapper>
      <BlogTitle>
        <Title renderAs="h2">{title}</Title>
      </BlogTitle>
      <BlogContent>
        <BlogStepsWrapper>
          {steps?.map((step, i) => (
            <BlogStep key={i}>
              <BlogNumber>{i + 1 < 10 ? `0${i + 1}` : i + 1}</BlogNumber>
              <Paragraph size="md">{step}</Paragraph>
            </BlogStep>
          ))}
        </BlogStepsWrapper>
        <Paragraph size="md">{paragraph}</Paragraph>
        <UserInfo {...userInfo} />
      </BlogContent>
    </Wrapper>
  );
};

export default BlogSteps;
