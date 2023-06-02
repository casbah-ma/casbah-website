import Title from '../../Title';
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
              <p className="text-lg font-medium text-gray-600">{step}</p>
            </BlogStep>
          ))}
        </BlogStepsWrapper>
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <p className="text-lg font-medium text-gray-600">{paragraph}</p>
        </div>
      </BlogContent>
    </Wrapper>
  );
};

export default BlogSteps;
