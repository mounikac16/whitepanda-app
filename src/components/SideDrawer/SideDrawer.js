import React from 'react';
import './SideDrawer.css'
import { FaSearch, FaStore } from 'react-icons/fa';
import { Icon, InlineIcon } from '@iconify/react';
import thLarge from '@iconify/icons-el/th-large';

const sideDrawer = props => {
	return(
		<nav className="side-drawer">
			<ul>
				<li><div><a href="/"><Icon icon={thLarge} /></a></div></li>
				<li><div><a href="/"><FaSearch /></a></div></li>
				<li><div><a href="/"><FaStore /></a></div></li>
			</ul>
		</nav>
	)
}
export default sideDrawer;