import React from 'react'

const Generate = props => {
  return (
    <button onClick={props.onClick}>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        aria-labelledby="refreshIconTitle"
        stroke="#555"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        fillOpacity=".4"
        color="#555"
      >
        {' '}
        <title id="refreshIconTitle">Refresh</title>{' '}
        <polyline points="22 12 19 15 16 12" />{' '}
        <path d="M11,20 C6.581722,20 3,16.418278 3,12 C3,7.581722 6.581722,4 11,4 C15.418278,4 19,7.581722 19,12 L19,14" />{' '}
      </svg>
    </button>
  )
}

export default Generate
