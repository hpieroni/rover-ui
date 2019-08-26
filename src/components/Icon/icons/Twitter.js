import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Twitter = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 40 40"
    fill={fill}
    {...props}
  >
    <path d="M38.4 8.586c-1.356 0.602-2.81 1.006-4.338 1.19 1.56-0.934 2.758-2.414 3.32-4.176-1.458 0.864-3.074 1.494-4.792 1.832-1.378-1.468-3.34-2.384-5.512-2.384-4.17 0-7.55 3.38-7.55 7.548 0 0.592 0.066 1.168 0.196 1.72-6.274-0.314-11.838-3.32-15.56-7.888-0.652 1.114-1.026 2.412-1.026 3.796 0 2.62 1.334 4.93 3.36 6.284-1.238-0.040-2.402-0.378-3.42-0.944 0 0.032 0 0.062 0 0.094 0 3.658 2.604 6.708 6.056 7.404-0.632 0.172-1.3 0.264-1.99 0.264-0.486 0-0.958-0.046-1.42-0.134 0.96 3 3.75 5.182 7.052 5.242-2.584 2.026-5.838 3.232-9.376 3.232-0.61 0-1.21-0.036-1.8-0.106 3.34 2.142 7.308 3.392 11.574 3.392 13.886 0 21.48-11.504 21.48-21.482 0-0.326-0.006-0.652-0.022-0.976 1.476-1.064 2.754-2.394 3.768-3.908z" />
  </svg>
);

Twitter.propTypes = { fill: PropTypes.string };
Twitter.defaultProps = { fill: iconColorsMap.twitter };

export default Twitter;