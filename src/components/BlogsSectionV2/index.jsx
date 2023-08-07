import PropTypes from 'prop-types';
import { Grid, ReadMore, Wrapper } from './BlogsSectionV2.styles';
import BlogsCard from '../BlogsCard';
import Header from '../Header';
import { useRouter } from 'next/router';
import PortfolioHeader from '../PortfolioHeader';

function BlogsSectionV2({ title, subtitle, blogs, isPortfolio }) {
  const route = useRouter();

  const handleClick = (slug) => {
    route.push(`/blogs/${slug}`);
  };
  return (
    <Wrapper $isPortfolio={isPortfolio}>
      {isPortfolio ? (
        <PortfolioHeader title={title} description={subtitle} />
      ) : (
        <Header
          title={title}
          description={subtitle}
          withLine={true}
          isVertical={true}
        />
      )}
      <Grid>
        {blogs?.length > 0 &&
          blogs.map((blog) => (
            <BlogsCard
              key={blog.title}
              {...blog}
              variant="v3"
              onClick={() => handleClick(blog.slug)}
            />
          ))}
      </Grid>
    </Wrapper>
  );
}

BlogsSectionV2.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  blogs: PropTypes.arrayOf(PropTypes.shape(BlogsCard.propTypes)),
};

export default BlogsSectionV2;
