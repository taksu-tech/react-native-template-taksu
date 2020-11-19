import Axios from 'axios';
import { autorun } from 'mobx';
import { rootStore } from '../mobx';

export default () => {
    // axios log
    Axios.interceptors.response.use(
        (response) => {
            if (__DEV__) {
                console.log(`${response.config.url}: `, response);
            }

            return response;
        },
        (error) => {
            if (__DEV__) {
                console.log(`${error.config.url}: `, { error });
            }

            return Promise.reject(error);
        },
    );

    // set default headers
    Axios.defaults.headers.common.Accept = 'application/json';

    autorun(
        () => {
            const accessToken = rootStore.account.access_token;

            if (accessToken !== null) {
                Axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            } else {
                delete Axios.defaults.headers.common.Authorization;
            }
        },
        { name: 'Authorization_Axios' },
    );
};
