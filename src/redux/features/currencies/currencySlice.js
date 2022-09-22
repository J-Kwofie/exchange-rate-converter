
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import conversionRate from './currencyService'

const initialState = {
    //check if localStorage contains user
    conversionRate: '',
    conversionResult:'',
    timeLastUpdate:'',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: 'log'
}


export const getConversionRate = createAsyncThunk(
    "currences/getConversionRate",
    //user is what you submit when fill registration form
    async (currency, thunkAPI) => {
        console.log('user')
        try {
            //console.log(authService, 'authService')
            const response = await conversionRate.getConversionRate(currency);
            console.log('dhhsd')
            return response
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const counterSlice = createSlice({
	name:"currency/currencies",
	initialState,
	extraReducers:{
		[getConversionRate.pending]:(state)=>{
			state.isLoading = true;
		},
		[getConversionRate.fulfilled]:(state,action)=>{
			console.log(action.payload.conversion_result)
                state.isLoading = false;
                state.isSuccess = true;
                state.conversionRate=action.payload.conversion_rate
                state.conversionResult=action.payload.conversion_result
                const birthday = new Date(action.payload.time_last_update_utc);
               // const date1 = birthday.getDate();
                state.timeLastUpdate = birthday.toString()


                //state.user = action.payload;
		},
		[getConversionRate.rejected]: (state,action)=>{
			console.log('Jude jdk')
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
		}
	}
})
//export const {  } = counterSlice.actions

export default counterSlice.reducer