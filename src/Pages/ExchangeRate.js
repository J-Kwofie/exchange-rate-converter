import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../public/css/exchangeRate.scss'
import CurrencyConverter from '../components/CurrencyConverter.js'

function ExchangeRate() {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth);
    
    useEffect(() => {
        if (!user) {

            navigate('/login')
        }
    }, [user, navigate])

    

    return (
        <main>
		  <h2>Cozap Currency Converter </h2>
		  <h3>Hi {user && user.username}</h3>
		  <h3>Check live foreign currency exchange rates</h3>
		  <CurrencyConverter />
		</main>
    )
}

export default ExchangeRate