import { BodyWrapper } from './BlogBody.styles';

const BlogBody = ({ body }) => {
  return <BodyWrapper dangerouslySetInnerHTML={{ __html: body }} className='blog' />;
};

export default BlogBody;
