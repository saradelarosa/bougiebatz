import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'
import { Router, Route, Link, browserHistory } from 'react-router';
import Large from './Largephotos.js';
import Medium from './Mediumphotos.js';
import Small from './Smallphotos.js';





class Nav extends React.Component {
	render(){
		return(
			<nav>
				<ul>
					<li><Link to="/Large">Large</Link></li>
          <li><Link to="/Medium">Medium</Link></li>
          <li><Link to="/Small">Small</Link></li>
				</ul>
			</nav>
			);
	}
}

export default Nav;