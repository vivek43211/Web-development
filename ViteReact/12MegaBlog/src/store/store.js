import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from './authslice'
const store = configureStore({
     reducer : authSlice,
});
 export default store;