import React from 'react';
import ReactDOM from 'react-dom';

// global styles
import pageBody from '../styles/pageBody.scss';
import base from '../styles/global.scss';

// components with styles
import JobAlert from '../../../shared_components/jobalert.js';
import jobAlert_styles from '../styles/components/jobalert.scss';
import SearchBar from '../../../shared_components/SearchBar.js';


const HomePage = () => (
	<section>
		<div className={pageBody.container}>
			<SearchBar title='Find a Job' />	
			<JobAlert styles={jobAlert_styles} link='https://www.cityjobs.com/cgi-bin/myjobsite.cgi' />
		</div>
	</section>
)


ReactDOM.render(
	<HomePage />,
	document.getElementById('root')
)