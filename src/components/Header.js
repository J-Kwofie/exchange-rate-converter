import React from 'react';
import {Link} from 'react-router-dom';
import '../public/css/header.scss'
function Header() {
	return (
		<header>
			<div>
				<Link to="/">Cozap Exchange Rate Checker</Link>
			</div>
			<ul>
				<li>
					<Link to='/register'>SignUp </Link>
				</li>
				<li>
					<Link to='/login'> Login </Link>
				</li>
			</ul>
		</header>
	)
}

export default Header