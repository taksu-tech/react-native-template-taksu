export type TUserStatus = 'active' | 'pending' | 'banned';
export type TUserGender = 'male' | 'female';

export interface User {
    id: number;
    email: string;
    status: TUserStatus;
    email_verified_at: null | string;
    gender: null | TUserGender;
}

export interface AccountState {
    access_token: null | string;
    expired_at: null | number;
    profile: User;
}
