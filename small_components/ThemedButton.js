import React from 'react';

const ThemedButton = ({type, text}) => (
	<button className='button' type={type}>{text}</button>
)

export default ThemedButton