import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'; //useDispatch
import { useNavigate,Link } from 'react-router-dom'

import { login, reset } from '../redux/features/auth/authSlice'
import Spinner from '../components/Spinner';
import '../public/css/login.scss'


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)


    function handleFormDataChange() {
        setFormData((previousState) => ({
            ...previousState,
            [event.target.name]: event.target.value
        }))
    }

    function handleOnSubmit() {
        event.preventDefault();
        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }
    useEffect(() => {
        if (isError) {
            console.log("password do not match")
        }
        if (isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
    if (isLoading) {
        return <Spinner />
    }
    return ( <
        >
        <section>
				
				<form onSubmit={handleOnSubmit} className='auth'>
				<h1 id='login'>Welcome back</h1>
				<p>Please enter your login details below.</p>
					<div className="form-control">

						<label htmlFor="email">Email</label>
						<input 
							type="text" 
							name="email" 
							placeholder="Enter your username"
							value={email} 
							required
							onChange={handleFormDataChange}/>
					</div>
					<div className="form-control">
						<label htmlFor="password">Password</label>
						<input 
							type="password" 
							name="password" 
							value={password} 
							placeholder="Enter password"
							required
							onChange={handleFormDataChange}/>
					</div>
					<button className="submit" type="submit">Login </button>
					<Link to="/reset">Forgot password?</Link>
					<p>Need an account? <Link to='/register'>Register </Link></p>

				</form>
			</section> <
        />
    )
}

export default Login