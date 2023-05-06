import PropTypes from "prop-types";
import { Wrapper } from "./MyImage.styles";
import Image from "next/image";

function MyImage({ width, height, src, alt }) {
  return (
    <Wrapper width={width} height={height}>
      <Image src={src} alt={alt} fill={true} style={{ objectFit: "cover" }} />
    </Wrapper>
  );
}

MyImage.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MyImage;
