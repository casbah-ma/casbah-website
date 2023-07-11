import PropTypes from 'prop-types';
import { Grid, ReadMore } from './BlogsSection.styles';
import BlogsCard from '../BlogsCard';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import CursorTracker from '../CursorTracker';

function BlogsSection({ blogs }) {
  const route = useRouter();

  const handleBlogClick = (slug) => {
    route.push(`/blogs/${slug}`);
  };

  return (
    <Grid>
      <CursorTracker text="readMore" />
      {blogs?.length > 0 &&
        blogs.map((blog, i) => (
          <BlogsCard
            key={blog.title}
            {...blog}
            variant={i === 0 ? 'v2' : 'v1'}
            onClick={() => handleBlogClick(blog.slug)}
          />
        ))}
      {position.x && position.y && (
        <ReadMore
          x={position.x}
          y={position.y}
          // onClick={() => handleBlogClick(blog.slug)}
        >
          {t('readMore')}
        </ReadMore>
      )}
    </Grid>
  );
}

BlogsSection.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape(BlogsCard.propTypes)),
};

export default BlogsSection;
