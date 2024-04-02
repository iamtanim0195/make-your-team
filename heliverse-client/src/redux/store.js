import { configureStore } from '@reduxjs/toolkit'
import userSlice from './fetures/users/userSlice';

const store = configureStore({
    reducer: {
        users: userSlice
    },
});

export default store;

