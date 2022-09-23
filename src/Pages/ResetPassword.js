import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import Spinner from '../components/Spinner';
import '../public/css/login.scss'
import axios from 'axios';


function Reset() {
    const [formData, setFormData] = useState({
        email: '',
    })
    const { email } = formData

   


    function handleFormDataChange() {
        setFormData((previousState) => ({
            ...previousState,
            [event.target.name]: event.target.value
        }))
    }

    function handleOnSubmit() {
        event.preventDefault();
        
        axios.post('http://localhost:3001/user/reset', {
            email
          })
          .then( (response)=> {alert(response)}
          )
          .catch(function (error) {
            console.log(error);

          })
    }
    
    return ( <
        >
        <section>
				
				<form onSubmit={handleOnSubmit} className='auth'>
				<h1 id='login'>Reset Your Password</h1>
				<p>Please enter your Email below.</p>
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
					
					<button className="submit" type="submit">Reset </button>
					<Link to="/">Forgot password?</Link>
					<p>Need an account? <Link to='/login'>Login </Link></p>

				</form>
			</section> <
        />
    )
}

export default Reset