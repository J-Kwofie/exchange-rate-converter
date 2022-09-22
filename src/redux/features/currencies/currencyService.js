import axios from 'axios';
const API_URl = 'https://v6.exchangerate-api.com/v6/4ab6c6a6fe515175c5cab822/pair/'
const getConversionRate = async (userData) => {
    console.log('response', 'response')
    const {to,from,amount} = userData
    const response = await axios.get(API_URl+from+"/"+to+"/"+ amount);
    console.log(response.data, "hfh")
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    console.log(response.data, "mex ")

    return response.data



}

const conversionRate = { getConversionRate}

export default conversionRate;