import { PrivacyWrapper } from '../../components/Blogs/BlogBody/BlogBody.styles';
import { allTerms } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allTerms.find((home) => home.lang === locale);

  return {
    props: { data },
  };
};

const Terms = ({ data }) => {
  return (
    <PrivacyWrapper
      dangerouslySetInnerHTML={{ __html: data?.body.html }}
      className="blog"
    />
  );
};

export default Terms;
