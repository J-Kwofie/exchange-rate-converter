import React from 'react';
import {useNavigate,Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { logout, reset } from '../redux/features/auth/authSlice'

import '../public/css/header.scss'
function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const {user} = useSelector((state)=>state.auth)

	function handleOnclickLogout(){
		dispatch(logout())
		dispatch(reset())
		navigate('/')
	}
	return (
		<header>
			<div className="heading">
				<Link to="/">Cozap Exchange Rate Checker</Link>
			</div>
			<ul className="nav">
			{user? (<li>
					<button className="logout" onClick={handleOnclickLogout}>Logout </button>
				</li>) : (<>
				<li>
					<Link to='/register'>Register </Link>
				</li>
				<li>
					<Link to='/login'> Login </Link>
				</li></>)}
				
			</ul>
		</header>
	)
}

export default Header