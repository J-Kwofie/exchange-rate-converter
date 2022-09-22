import { configureStore } from '@reduxjs/toolkit'
import authReducers from './features/auth/authSlice.js'
import resetPasswordSlide from './features/auth/resetPasswordSlide.js'
import currencyReducers from './features/currencies/currencySlice.js'

const store = configureStore({
  reducer: {
   auth: authReducers,
   currencies:currencyReducers,
   reset:resetPasswordSlide,
  },
})

export default store