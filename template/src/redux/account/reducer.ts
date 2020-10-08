import { createSlice } from '@reduxjs/toolkit';
import { AccountState } from './model';
import { getProfile, login } from './service';

const initialState: AccountState = {
    access_token: null,
    expired_at: null,
    profile: {
        id: 0,
        email: '',
        status: 'active',
        email_verified_at: null,
        gender: null,
    },
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        logout(state) {
            // reset all value
            state = initialState;
        },
    },
    extraReducers(builder) {
        builder.addCase(login.fulfilled, (state, action) => {
            state.access_token = action.payload.access_token;
            state.expired_at = action.payload.expired_at;
        });

        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
        });
    },
});

export const { logout } = accountSlice.actions;
export default accountSlice.reducer;
