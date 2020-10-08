import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from './model';

export const login = createAsyncThunk(
    'account/login',
    async (props: { email: string; password: string }, thunkAPI) => {
        // return value
        return {
            access_token: 'something',
            expired_at: 9000,
        };
    },
);

export const getProfile = createAsyncThunk('account/getProfile', async (props, thunkAPI) => {
    // return value
    return {
        id: 0,
        email: 'email@example.com',
        email_verified_at: '',
        gender: 'male',
        status: 'active',
    } as User;
});
