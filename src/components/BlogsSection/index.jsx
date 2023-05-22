import PropTypes from 'prop-types';
import { Grid, ReadMore } from './BlogsSection.styles';
import BlogsCard from '../BlogsCard';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

function BlogsSection({ blogs }) {
  const { t } = useTranslation();
  const [position, setPosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updatePosition = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };
    window.addEventListener('mousemove', updatePosition);
  }, []);
  console.log(position);
  return (
    <Grid>
      {blogs?.length > 0 &&
        blogs.map((blog, i) => (
          <BlogsCard
            key={blog.title}
            {...blog}
            variant={i === 0 ? 'v2' : 'v1'}
          />
        ))}
      {position.x && position.y && (
        <ReadMore x={position.x} y={position.y}>
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
