import axios from 'axios';

const API_URl = `http://localhost:3001/user/`;

//register User

const register = async (userData) => {
    console.log('response', 'response')

    const response = await axios.post(API_URl+'register', userData);
    console.log(response, "hfh")
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data



}
const login = async (userData) => {
    console.log('response', 'response')

    const response = await axios.post(API_URl+'login', userData);
    console.log(response.data, "hfh")
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    console.log(response.data, "mex sa")

    return response.data



}

const logout = async()=>{
    localStorage.removeItem('user')
}

const authService = { register, logout, login}

export default authService;