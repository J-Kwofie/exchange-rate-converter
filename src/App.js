import React from 'react'
import ExchangeRate from './Pages/ExchangeRate.js';
import Register from './Pages/Register.js';
import Login from './Pages/Login.js'
import Reset from './Pages/ResetPassword.js'
import PasswordChange from './Pages/PasswordChange.js'
import Header from './components/Header.js';
import './public/css/index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return ( 
    <>
        <Router>
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<ExchangeRate />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/reset" element={<Reset />} />
				<Route path="/password-reset">
					<Route path=":id/:token" element={<PasswordChange />} />
				</Route>
			</Routes>
		</div>
		</Router> 
	</>

    )
}

export default App