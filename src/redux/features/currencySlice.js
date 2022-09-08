import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCurrencies = createAsyncThunk(
		"currences/getCurrencies",
		//dispatch,getState
		async ()=>{
			return await fetch("https://v6.exchangerate-api.com/v6/4ab6c6a6fe515175c5cab822/latest/USD")
			.then((res)=>res.json())
		}
	)

export const counterSlice = createSlice({
	name:"currencies",
	initialState:{
		currencies:[],
		status:null
	},
	reducers:{
		[getCurrencies.pending]:(state)=>{
			state.status ='loading'
		},
		[getCurrencies.fulfilled]:(state,action)=>{
			state.status="success";
			state.currencies= action.payload;
		},
		[getCurrencies.rejected]: (state)=>{
			state.status="failed";
		}
	}
})
//export const {  } = counterSlice.actions

export default counterSlice.reducer