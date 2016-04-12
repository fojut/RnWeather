import queryString from 'query-string';

import { parseJSON, checkHttpStatus } from '../utils/Utils';

export default class ApiClient {
    constructor({ prefix } = {}) {
        this.prefix = prefix;
    }

    get(requestUrl, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            params
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    patch(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    post(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            body: payload
        });
    }

    delete(requestUrl) {
        return this.request({
            url: requestUrl,
            method: 'delete'
        });
    }

    request({ url, method, params = {}, body }) {
        //if (this.authToken) {
        //    /* eslint-disable */
        //    params.token = this.authToken;
        //    /* eslint-enable */
        //}
        const paramUndefined = params === undefined || params === null;

        const urlWithQuery = paramUndefined ? `${url}` : `${url}?${queryString.stringify(params)}`;

        const init = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'apikey': '5d9a1490f3c7b6528756d187bc6ad356'
            }
        };

        if (method !== 'get' && method !== 'head') {
            init.body = body;
        }

        return fetch(`${this.prefix}/${urlWithQuery}`, init).then(res => {
            checkHttpStatus(res);
            return parseJSON(res);
        }).catch((error)=>{
            console.error(error);
        });
    }

}
