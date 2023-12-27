import { PrivacyWrapper } from '../../components/Blogs/BlogBody/BlogBody.styles';
import { allPrivacies } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allPrivacies.find((home) => home.lang === locale);

  return {
    props: { data },
  };
};

export const metadata = {
  title: 'Privacy Policy',
  description:
    "Learn about Casbah's commitment to your privacy. Our Privacy Policy details our data collection, usage, and security practices",
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
