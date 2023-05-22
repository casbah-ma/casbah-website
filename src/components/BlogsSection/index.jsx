import PropTypes from 'prop-types';
import { Grid } from './BlogsSection.styles';
import BlogsCard from '../BlogsCard';

function BlogsSection({ blogs }) {
  return (
    <Grid>
      {blogs?.length > 0 &&
        blogs.map((blog, i) => (
          <BlogsCard
            key={blog.name}
            {...blog}
            variant={i === 0 ? 'v2' : 'v1'}
          />
        ))}
    </Grid>
  );
}

BlogsSection.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape(BlogsCard.propTypes)),
};

export default BlogsSection;
