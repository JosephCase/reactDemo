import React from 'react';

import {site_code} from '~/config.js';

// components
import ThemedButton from '~/small_components/ThemedButton.js';
import TextInput from '~/small_components/TextInput.js';

var defaultStyles = require(`../niches/${site_code}/styles/components/SearchBar.scss`);

const SearchBar = ({title, styles = defaultStyles}) => (
	<div className={styles.component}>
		<div>
			<h3>{title}</h3>      
			<form method="post" action='search.html'>
				<fieldset>
					<TextInput type="text" name="keywords" placeholder="Keywords" />
					<TextInput type="text" name="location" placeholder="Location" />
					<ThemedButton type="submit" text='Search' />
				</fieldset>
			</form>
		</div>
    </div>
)

export default SearchBar

