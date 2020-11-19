import { computed, flow, makeAutoObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';
import { RootStore } from '..';
import { User } from './model';

export class AccountStore {
    @observable loading = false;
    @observable error = false;
    @persist @observable access_token: string | null = null;
    @persist @observable expires_in: number | null = null;
    @observable profile: User | null = null;

    constructor(private root: RootStore) {
        makeAutoObservable(this);
    }

    @computed
    get isLoggedIn() {
        return !!this.access_token;
    }

    @flow
    *login(email: string, password: string) {
        try {
            this.loading = true;
            this.error = false;

            const data = yield new Promise<{ access_token: string; expires_in: number }>(
                (resolve, reject) => {
                    setTimeout(() => {
                        const body = { email, password };
                        resolve({
                            access_token: 'token_something',
                            expires_in: 10000,
                        });
                    }, 3000);
                },
            );

            this.access_token = data.access_token;
            this.expires_in = data.expires_in;

            return data;
        } catch (error) {
            this.error = true;
            throw error;
        } finally {
            this.loading = false;
        }
    }
}
