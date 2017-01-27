import React from 'react';

const TextInput = ({placeholder, type, name}) => (
	<input className='textInput' type={type} name={name} placeholder={placeholder} />
)

export default TextInput