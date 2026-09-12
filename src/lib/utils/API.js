
import { PUBLIC_API_URL } from '$env/static/public';

const BASE_URL = PUBLIC_API_URL;

const apiFetch = async (url, options = {}) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token && {
                Authorization: `Bearer ${token}`
            }),
            ...options.headers
        }
    });

    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }

    return response.json();
};

const API = {
    get: (url, options = {}) =>
        apiFetch(url, {
            ...options,
            method: 'GET'
        }),

    post: (url, data, options = {}) =>
        apiFetch(url, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data)
        }),

    put: (url, data, options = {}) =>
        apiFetch(url, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(data)
        }),

    patch: (url, data, options = {}) =>
        apiFetch(url, {
            ...options,
            method: 'PATCH',
            body: JSON.stringify(data)
        }),

    delete: (url, options = {}) =>
        apiFetch(url, {
            ...options,
            method: 'DELETE'
        })
};

export default API;