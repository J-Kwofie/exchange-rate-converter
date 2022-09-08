import { configureStore } from '@reduxjs/toolkit'
import currenciesReducers from './features/currencySlice.js'

const store = configureStore({
  reducer: {
   currency: currenciesReducers
  },
})

export default store