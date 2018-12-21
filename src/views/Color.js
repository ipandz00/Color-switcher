import React from 'react';

const Color = (props) => {
	return (
		<React.Fragment>
			<p className='noselect color-switch' style={{color: props.currentColor}} onClick={props.handleClick}>
			{props.text === ''? 'Click me!' : props.text}
			</p>
		</React.Fragment>
		)
}

export default Color;