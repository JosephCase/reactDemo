
import React from 'react';
import ReactDOM from 'react-dom';

// global styles
import pageBody from '../styles/pageBody.scss';
import base from '../styles/global.scss';

// components with styles
import SearchBar from '../../../shared_components/SearchBar.js';
import SearchBar_alt_ss from '../styles/components/SearchBar_alt.scss';


const Search = () => (
	<section>
		<div className={pageBody.container}>
			<SearchBar styles={SearchBar_alt_ss} />
		</div>
	</section>
)


ReactDOM.render(
	<Search />,
	document.getElementById('root')
)