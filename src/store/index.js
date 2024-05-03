import {createSlice, configureStore} from '@reduxjs/toolkit'
import counterSlice from './counter'

export const INCREMENT = 'increment'

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }

    //reducer : counterSlice.reducer
});

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store;