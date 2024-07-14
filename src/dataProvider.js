import { fetchUtils } from 'react-admin';
import { jsonServerRestClient } from 'ra-data-json-server';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // Add your own headers here if needed
    return fetchUtils.fetchJson(url, options);
};

export default jsonServerRestClient('http://jsonplaceholder.typicode.com', httpClient);
