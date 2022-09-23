
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tokenValidationService from './resetPasswordService'

const initialState = {
    //check if localStorage contains user
    userData: null,
    isError: false,
    isSuccess: false,
    isLoading: true,
    message: ''
}


export const validateToken = createAsyncThunk(
    "token/validateToken",
    //user is what you submit when fill registration form
    async (token, thunkAPI) => {
        console.log('user')
        try {
            //console.log(authService, 'authService')
            const response = await tokenValidationService.validateToken(token);
            console.log('dhhsd')
            return response
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const resetPassword = createAsyncThunk(
    "token/resetPassword",
    //user is what you submit when fill registration form
    async (passwordData, thunkAPI) => {
        console.log('user')
        try {
            //console.log(authService, 'authService')
            const response = await tokenValidationService.resetPassword(passwordData);
            console.log('dhhsd')
            return response
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const TokenValidationSlice = createSlice({
	name:"token",
	initialState,
	extraReducers:{
		[validateToken.pending]:(state)=>{
			state.isLoading = true;
		},
		[validateToken.fulfilled]:(state,action)=>{
			console.log(action.payload.conversion_result)
                state.isLoading = false;
                state.isSuccess = true;
                state.userData = action.payload.verify;
               // const date1 = birthday.getDate();
               console.log(action.payload)

                //state.user = action.payload;
		},
		[validateToken.rejected]: (state,action)=>{
			console.log('Jude jdk',action)
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
		},
        [resetPassword.pending]:(state)=>{
            state.isLoading = true;
        },
        [resetPassword.fulfilled]:(state,action)=>{
            console.log(action.payload.conversion_result)
                state.isLoading = false;
                state.isSuccess = true;
               // const date1 = birthday.getDate();
               console.log(action.payload)
               state.userData= null
               state.isError= false;
               state.message=''

                //state.user = action.payload;
        },
        [resetPassword.rejected]: (state,action)=>{
            console.log('Jude jdk',action)
                state.isLoading = false;
                state.isError = true;
                state.isSuccess=false
                state.message = action.payload;
        }
	}
})
//export const {  } = counterSlice.actions

export default TokenValidationSlice.reducer