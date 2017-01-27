import React from 'react';
// import {site_code} from '~/config.js';
import ThemedButton from '~/small_components/ThemedButton.js';
import TextInput from '~/small_components/TextInput.js';

// would like to use a globally defined variable for the styles directory like..
// var styles = require(`${component_style_dir}jobalert.scss`);


const JobAlert = ({styles, link}) => (
	<div className={styles.component}>
		<h3>Job Alerts</h3>
		<p>Receive personalised jobs by email</p>        
		<form method="post" action={link}>
			<fieldset>
				<TextInput type="email" name="email" placeholder="Your email address" />
				<ThemedButton type="submit" text='Register' />
			</fieldset>
		</form>
		<p><a>More reasons to register</a></p>
    </div>
)

export default JobAlert

