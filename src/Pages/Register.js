import React, { useState } from 'react'

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { username, email, password, confirmPassword } = formData

    function handleFormDataChange() {
        setFormData((previousState) => ({
            ...previousState,
            [event.target.name]: event.target.value
        }))
    }

    function handleOnSubmit() {

    }
    return ( <
        >
        <section>
				<h1>Register</h1>
				<form onSubmit={handleOnSubmit}>
					<input 
						type="text" 
						name="username" 
						placeholder="Enter your username"
						value={username} 
						onChange={handleFormDataChange}/>
					<input 
						type="email"
						name="email" 
						value={email}  
						placeholder="Enter your email"
						onChange={handleFormDataChange}/>
					<input 
						type="password" 
						name="password" 
						value={password} 
						placeholder="Enter password"
						onChange={handleFormDataChange}/>
					<input 
						type="password" 
						name="confirmPassword" 
						value={confirmPassword} 
						placeholder="Confirm password"
						onChange={handleFormDataChange}/>
					<input
						type="submit"
						name="submit"
						value="submit"/>
				</form>
			</section> <
        />
    )
}

export default Register