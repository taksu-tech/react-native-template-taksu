import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeAutoObservable, observable, runInAction } from 'mobx';
import { create } from 'mobx-persist';
import remotedev from 'mobx-remotedev';
import { createContext } from 'react';
import { AccountStore } from './account/store';

@remotedev
export class RootStore {
    @observable storeLoaded = false;

    account: AccountStore;

    constructor() {
        makeAutoObservable(this);

        this.account = new AccountStore(this);
    }
}

// firing up instance
export const rootStore = new RootStore();

export const RootStoreContext = createContext<RootStore>(rootStore);

// persistent data;
const hydrate = create({ storage: AsyncStorage });

const persists: any[] = [hydrate('MOBX_ACCOUNT', rootStore.account)];

Promise.all(persists)
    .then(() => {
        if (__DEV__) {
            console.log('PERSISTENT_HYDRATE_SUCCESS');
        }

        runInAction(() => {
            rootStore.storeLoaded = true;
        });
    })
    .catch((error) => {
        if (__DEV__) {
            console.log('PERSISTENT_HYDRATE_ERROR: ', { error });
        }
    });
