import Axios from 'axios';

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
};
