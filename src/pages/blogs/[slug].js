import { data as StaticData } from '../../config/dummy';
import BlogHeader from '../../components/BlogHeader';
import ShareSection from '../../components/ShareSection';
import SimilarBlog from '../../components/Blogs/SimilarBlog';
import { useRouter } from 'next/router';
import BlogBody from '../../components/Blogs/BlogBody';
import { allBlogsItems } from 'contentlayer/generated';
import { useEffect } from 'react';

// getStaticPath
export const getStaticPaths = () => {
  const paths = allBlogsItems.map((page) => ({
    params: { slug: page.slug },
    locale: page.lang,
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ locale }) => {
  const data = allBlogsItems.find((page) => page.lang === locale);
  return {
    props: { data },
  };
};

const BlogInfoPage = ({ data }) => {
  useEffect(() => {
    // Get the parent element of the <img> tag
    const parentElement = document.querySelector('p > img').parentNode;

    // Move the <img> element outside the <p> element
    while (parentElement.firstChild) {
      parentElement.parentNode.insertBefore(
        parentElement.firstChild,
        parentElement
      );
    }

    // Remove the now empty <p> element
    parentElement.parentNode.removeChild(parentElement);
  }, []);

  return (
    <div
      className={
        'w-full flex flex-col justify-center items-center gap-16 p-[1rem] md:p-16'
      }
    >
      <BlogHeader {...data} />
      <BlogBody body={data.body.html} />
      <ShareSection {...StaticData.share} />
      <SimilarBlog {...StaticData.similarBlogs} />
    </div>
  );
};

export default BlogInfoPage;
