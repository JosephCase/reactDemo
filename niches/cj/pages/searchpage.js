
import React from 'react';
import ReactDOM from 'react-dom';

// global styles
import pageBody from '../styles/pageBody.scss';
import base from '../styles/global.scss';

// components with styles
import SearchBar from '../../../shared_components/SearchBar.js';


const Search = () => (
	<section>
		<SearchBar />
	</section>
)


ReactDOM.render(
	<Search />,
	document.getElementById('root')
)