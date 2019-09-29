import React from 'react';
import './Toolbar.css'
import { FaBell } from 'react-icons/fa';

const toolbar = props => (
	<header className="toolbar">
		<nav className="toolbar_navigation">
			<div className="toolbar_logo"><img src={require('./logo.JPG')} /></div>
			<div className="spacer" />
			<div className="toolbar_navigation-items">
				<ul>
					<li><a href="/"><FaBell /></a></li>
					<li><a href="/">Users</a></li>
				</ul>
			</div>
		</nav>
	</header>
);
export default toolbar;