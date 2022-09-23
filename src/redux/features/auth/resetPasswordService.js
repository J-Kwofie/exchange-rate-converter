import axios from 'axios';
const API_URl = "http://localhost:3001/user/"

const validateToken = async (userData) => {
    console.log('response', 'response')
    const {id,token} = userData
    const response = await axios.get(`${API_URl}verify-token/${id}/${token}`);
    console.log(response.data, "hfh")
    // if (response.data) {
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // }
    // console.log(response.data, "mex ")

    return response.data



}
const resetPassword = async (userData) => {
    console.log('response', 'response')
    const response = await axios.post(`${API_URl}password-reset/`,userData);
    console.log(response.data, "hfh")
    
        // //console.log(response, "hfh")
        // if (response.data) {
        //     localStorage.setItem('user', JSON.stringify(response.data))
        // }

        return response.data



    



}

const tokenValidation = { validateToken,resetPassword}

export default tokenValidation;