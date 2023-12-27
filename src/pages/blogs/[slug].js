import { data as StaticData } from '../../config/dummy';
import BlogHeader from '../../components/BlogHeader';
import ShareSection from '../../components/ShareSection';
import SimilarBlog from '../../components/Blogs/SimilarBlog';
import { useRouter } from 'next/router';
import BlogBody from '../../components/Blogs/BlogBody';
import { allBlogs } from 'contentlayer/generated';
import { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { data } from 'autoprefixer';

let metaData = [];

// getStaticPath
export const getStaticPaths = () => {
  const paths = allBlogs.map((page) => ({
    params: { slug: page.slug },
    locale: page.lang,
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ locale, params }) => {
  const data = allBlogs.find(
    (page) => page.lang === locale && page.slug === params.slug
  );
  metaData = data;
  return {
    props: { data: { ...data, allBlogs } },
  };
};

export const metadata = {
  title:
    data.title ||
    'Casbah Blog - Discover the Latest Trends in Digital Transformation',
  description:
    data.description ||
    "Explore Casbah's blog to discover the latest trends in digital transformation, including web and app development, IoT implementations, and augmented reality technologies. We focus on creating interconnected, smart digital environments.",
};

const BlogInfoPage = ({ data }) => {
  const router = useRouter();
  useEffect(() => {
    // Get the parent element of the <img> tag
    const parentElement = document.querySelector('p > img')?.parentNode;

    // Move the <img> element outside the <p> element
    while (parentElement?.firstChild) {
      parentElement?.parentNode.insertBefore(
        parentElement?.firstChild,
        parentElement
      );
    }

    // Remove the now empty <p> element
    parentElement?.parentNode.removeChild(parentElement);
  }, []);

  return (
    <div
      className={
        'w-full flex flex-col justify-center items-center gap-16 p-[1rem] md:pt-32 md:p-0'
      }
    >
      <Breadcrumb parent={data.parent} slug={router.query.slug} />
      <BlogHeader {...data} />
      <BlogBody body={data.body.html} />
      <ShareSection {...StaticData.share} />
      <SimilarBlog blogs={data.allBlogs} />
    </div>
  );
};

export default BlogInfoPage;
