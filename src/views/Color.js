import React from 'react';

const Color = (props) => {
	return (
		<React.Fragment>
			<p className='noselect' style={{color: props.currentColor, cursor: 'pointer'}} onClick={props.handleClick}>Switch me!</p>
		</React.Fragment>
		)
}

export default Color;