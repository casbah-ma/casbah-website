const ArrowRight = ({ color }) => {
  return (
    <svg
      width="6"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.657 4.24333L1.414 8.48633L1.68737e-08 7.07133L2.829 4.24333L8.43208e-08 1.41533L1.414 0.000328081L5.657 4.24333Z"
        fill={color ? color : 'white'}
      />
    </svg>
  );
};

export default ArrowRight;
