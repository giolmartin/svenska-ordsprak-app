import React from 'react';
const darkColor = '#635bff';
const lightColor = '#80e9ff';
function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      viewBox='10 0 50 100'
      {...props}
    >
      <g fillRule='evenodd'>
        <g id='dark1'>
          <path
            fill={darkColor}
            d='M51 48.768c1.333.77 1.333 2.694 0 3.464L24.75 67.388c-1.333.77-3-.193-3-1.733v-30.31c0-1.54 1.667-2.502 3-1.733L51 48.768z'
            opacity='0.8'
          ></path>
          <path
            fill={darkColor}
            d='M38.23 47.746c1.549.894 2.323 1.341 2.589 1.921a2 2 0 010 1.666c-.266.58-1.04 1.027-2.589 1.921L15.52 66.366c-1.548.894-2.323 1.34-2.958 1.28a2 2 0 01-1.442-.832c-.37-.52-.37-1.414-.37-3.202V37.388c0-1.788 0-2.682.37-3.202a2 2 0 011.442-.833c.635-.06 1.41.387 2.958 1.281l22.71 13.112z'
            opacity='0.8'
          ></path>
        </g>
        <g>
          <path
            fill={lightColor}
            d='M40 48.768c1.333.77 1.333 2.694 0 3.464L13.75 67.388c-1.333.77-3-.193-3-1.733v-30.31c0-1.54 1.667-2.502 3-1.733L40 48.768z'
            opacity='0.6'
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
