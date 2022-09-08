import React, { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const { username, password } = formData

    function handleFormDataChange() {
        setFormData((previousState) => ({
            ...previousState,
            [event.target.name]: event.target.value
        }))
    }

    function handleOnSubmit() {
        event.preventDefault();
    }
    return ( <
        >
        <section>
				<h1>Login</h1>
				<form onSubmit={handleOnSubmit}>
					<input 
						type="text" 
						name="username" 
						placeholder="Enter your username"
						value={username} 
						onChange={handleFormDataChange}/>
					<input 
						type="password" 
						name="password" 
						value={password} 
						placeholder="Enter password"
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

export default Login