import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type LoginFormData = {
    email: string;
    password: string;
}

export const login = createAsyncThunk('auth/login', async (payload : LoginFormData) => {

    const response = await axios.post('http://localhost:5000/api/auth/login', payload);
    
    return response.data.data;
});

