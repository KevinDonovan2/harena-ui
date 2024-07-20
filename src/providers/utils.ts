import axios from 'axios';

const API_URL = process.env.API_URL!;

export const get = <T>(path: string) => {
    return axios.get<T>(`${'http://localhost:8080'}/${path}`);
};

export const post = <T>(path: string, payload: any) => {
    return axios.post<T>(`${'http://localhost:8080'}/${path}`, payload);
};
