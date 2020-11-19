export type UserStatus = 'active' | 'pending' | 'banned';
export type UserGender = 'male' | 'female';

export interface User {
    id: number;
    email: string;
    status: UserStatus;
    email_verified_at: null | string;
    gender: null | UserGender;
}
