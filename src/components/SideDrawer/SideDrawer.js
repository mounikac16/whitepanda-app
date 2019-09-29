import React from 'react';
import './SideDrawer.css'
import { FaSearch, FaStore } from 'react-icons/fa';
import { Icon, InlineIcon } from '@iconify/react';
import thLarge from '@iconify/icons-el/th-large';

const sideDrawer = props => {
	return(
		<nav className="side-drawer">
			<div className="icon-row">
				<div className="icon-column"><a href="/"><Icon icon={thLarge} /></a></div>
				<div className="icon-column"><a href="/"><FaSearch /></a></div>
				<div className="icon-column"><a href="/"><FaStore /></a></div>
			</div>
		</nav>
	)
}
export default sideDrawer;