import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService'
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    //check if localStorage contains user
    user: user? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
export const registerUser = createAsyncThunk(
    "auth/registerUser",
    //user is what you submit when fill registration form
    async (user, thunkAPI) => {
        console.log('user')
        try {
            console.log(authService, 'authService')
            const response = await authService.register(user);
            console.log('dhhsd')
            return response
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    //user is what you submit when fill registration form
    async (user, thunkAPI) => {
        console.log('user')
        try {
            console.log(authService, 'authService')
            const response = await authService.login(user);
            console.log(response,'kk')
            return response
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout", async () => {
        await authService.logout()
    }
)


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = ''
        }

    },
    extraReducers: (builder) => {
        builder.
        addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                console.log('Jude jdk')
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {

                state.user = null
            })
        .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log(action.payload,"payload")
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                console.log('Jude jdk')
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }

})
export const { reset } = authSlice.actions
export default authSlice.reducer