import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'; //useDispatch
import { useNavigate , Link} from 'react-router-dom'

import { registerUser, reset } from '../redux/features/auth/authSlice'
import Spinner from '../components/Spinner';
import '../public/css/register.scss'

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { username, email, password, confirmPassword } = formData

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
        if (password != confirmPassword) {
            console.log(password, confirmPassword)

            console.log("password do not match")
        } else {

            const userData = {
                username,
                email,
                password
            }
            console.log(userData)

            dispatch(registerUser(userData))
        }

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
        <section >
				<form onSubmit={handleOnSubmit} className="auth">
					<h1 id='register'>Create your account</h1>

					<div className="form-control">
						<label htmlFor="username">Username <span>*</span></label>
						<input 
							type="text" 
							name="username" 
							placeholder="Enter your username"
							value={username} 
							required
							onChange={handleFormDataChange}/>

					</div>
					<div className="form-control">
						<label htmlFor="email">Email <span>*</span></label>
						<input 
							type="email"
							name="email" 
							value={email}  
							placeholder="Enter your email"
							required
							onChange={handleFormDataChange}/>
					</div>
					<div className="form-control">
					<label htmlFor="password">Password <span>*</span></label>
						<input 
							type="password" 
							name="password" 
							value={password} 
							placeholder="Enter password"
							required
							onChange={handleFormDataChange}
							/>
					</div>
					<div className="form-control">
						<label htmlFor="confirmPassword">Confirm Password <span>*</span></label>
						<input 
							type="password" 
							name="confirmPassword" 
							value={confirmPassword} 
							placeholder="Confirm password"
							required
							onChange={handleFormDataChange}
							/>
					</div>
						<button className="submit" type="submit">Sign Up </button>
					<p>Already have an account?<Link to='/login'>Login </Link></p>

				</form>
			</section> <
        />
    )
}

export default Register