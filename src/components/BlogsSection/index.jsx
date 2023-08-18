import PropTypes from 'prop-types';
import { Grid, ReadMore } from './BlogsSection.styles';
import BlogsCard from '../BlogsCard';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import CursorTracker from '../CursorTracker';

function BlogsSection({ blogs }) {
  const router = useRouter();

  const handleBlogClick = (slug) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <Grid>
      {blogs?.length > 0 &&
        blogs.map((blog, i) => (
          <BlogsCard
            key={blog.title}
            {...blog}
            variant={i === 0 ? 'v2' : 'v1'}
            isFirst={i === 0}
            onClick={() => handleBlogClick(blog.slug)}
          />
        ))}
    </Grid>
  );
}

BlogsSection.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape(BlogsCard.propTypes)),
};

export default BlogsSection;
