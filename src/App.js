import React from 'react'
import ExchangeRate from './Pages/ExchangeRate.js';
import Register from './Pages/Register.js';
import Login from './Pages/Login.js'
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
			</Routes>
		</div>
		</Router> 
	</>

    )
}

export default App