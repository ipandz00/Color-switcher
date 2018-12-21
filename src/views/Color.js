import React from 'react';

const Color = (props) => {
	return <p style={{color: props.currentColor}} onClick={props.handleClick}>Switch me!</p>;
}

export default Color;