import { PrivacyWrapper } from '../../components/Blogs/BlogBody/BlogBody.styles';
import { allPrivacies } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allPrivacies.find((home) => home.lang === locale);

  return {
    props: { data },
  };
};

const Privacy = ({ data }) => {
  return (
    <PrivacyWrapper
      dangerouslySetInnerHTML={{ __html: data?.body.html }}
      className="blog"
    />
  );
};

export default Privacy;
