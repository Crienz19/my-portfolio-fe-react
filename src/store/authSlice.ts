import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { login } from '../services/Auth';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    isRequestLoading: boolean;
    isSuccess: boolean;
    errors?: any;
}

const initialState : AuthState = {
    token: null,
    isAuthenticated: false,
    isRequestLoading: false,
    isSuccess: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isRequestLoading = true;
        }),

        builder.addCase(login.fulfilled, (state, action : PayloadAction<any>) => {
            state.isRequestLoading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.isSuccess = true;
        }),

        builder.addCase(login.rejected, (state, action) => {
            state.isRequestLoading = false;
            state.errors = action.payload;
        })
    },
    reducers: {}
})

export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;