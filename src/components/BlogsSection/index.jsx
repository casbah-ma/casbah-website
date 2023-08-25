import PropTypes from 'prop-types';
import { Grid } from './BlogsSection.styles';
import BlogsCard from '../BlogsCard';
import { useContext } from 'react';

import { useRouter } from 'next/router';

import { CursorContext } from '../../store/CursorContext';

function BlogsSection({ blogs }) {
  const router = useRouter();
  const { toggleVisible } = useContext(CursorContext);

  const handleBlogClick = (slug) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <Grid onMouseEnter={toggleVisible} onMouseLeave={toggleVisible}>
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
