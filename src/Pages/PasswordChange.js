import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
//import Spinner from '../components/Spinner';
import '../public/css/login.scss'
//import axios from 'axios';
//const baseUrl = "http://localhost:3001/user/"
import { validateToken, resetPassword } from '../redux/features/auth/resetPasswordSlide.js'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner';



function PasswordChange() {
    const [formData, setFormData] = useState({
        password: '',
        passwordConfirm: '',
    })
    const { id, token } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isSuccess, isError, isLoading, message, userData } = useSelector((state) => state.reset)



    useEffect(() => {
        dispatch(validateToken({ id, token }))

    }, [])

    const { password, passwordConfirm } = formData


    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <p>{message}</p>
    }

    function handleFormDataChange() {
        setFormData((previousState) => ({
            ...previousState,
            [event.target.name]: event.target.value
        }))
    }

    function handleOnSubmit() {
        event.preventDefault();
        dispatch(resetPassword({ newPassword: password, ...userData }))
        if (isSuccess) {
            navigate('/login')
        }
    }



    return ( <
        >
        <section>
				
				<form onSubmit={handleOnSubmit} className='auth'>
				<h1 id='login'>Reset Your Password</h1>
				<p>Please enter your Email below.</p>
					<div className="form-control">

						<label htmlFor="password">Password</label>
						<input 
							type="password" 
							name="password" 
							placeholder="Enter your username"
							value={password} 
							required
							onChange={handleFormDataChange}/>
					</div>
					<div className="form-control">

						<label htmlFor="passwordConfirm">Confirm Password</label>
						<input 
							type="password" 
							name="passwordConfirm" 
							placeholder="Enter your username"
							value={passwordConfirm} 
							required
							onChange={handleFormDataChange}/>
					</div>
					
					<button className="submit" type="submit">Reset </button>
					<Link to="/">Forgot password?</Link>
					<p>Need an account? <Link to='/login'>Login </Link></p>

				</form>
			</section> <
        />
    )
}

export default PasswordChange