import { NextSeo } from 'next-seo';
import { PrivacyWrapper } from '../../components/Blogs/BlogBody/BlogBody.styles';
import { allTerms } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data =
    allTerms.find((home) => home.lang === locale) ||
    allTerms.find((home) => home.lang === 'en') ||
    null;

  return {
    props: { data },
  };
};

const metadata = {
  title: 'Terms & Conditions',
  description:
    "Read Casbah's Terms and Conditions. Understand the rules and guidelines governing the use of our services and website.",
};

const Terms = ({ data }) => {
  return (
    <>
      <NextSeo {...metadata} />
      <PrivacyWrapper
        dangerouslySetInnerHTML={{ __html: data?.body.html }}
        className="blog"
      />
    </>
  );
};

export default Terms;

