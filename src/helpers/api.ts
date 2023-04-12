// utils/api.ts
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, Method } from 'axios';

interface IRequestOptions extends AxiosRequestConfig {
    // additional options if needed
}

class Api {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: process.env.API_URL || "http://localhost:5000",
        });

        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // add any headers, tokens or configurations needed
                const token = localStorage.getItem('token');

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }


                return config;
            },
            (error: AxiosError) => {
                // handle request errors
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            (response: any) => {
                // handle successful responses
                return response.data;
            },
            (error: AxiosError) => {
                // handle response errors
                return Promise.reject(error);
            }
        );
    }

    public async request<T>(
        method: Method,
        url: string,
        data?: any,
        options?: IRequestOptions
    ): Promise<any> {
        return this.instance.request<T>({
            method,
            url,
            data,
            ...options,
        });
    }

    public async get<T>(
        url: string,
        params?: any,
        options?: IRequestOptions
    ): Promise<any> {
        return this.request<T>('get', url, undefined, {
            params,
            ...options,
        });
    }

    public async post<T>(
        url: string,
        data?: any,
        options?: IRequestOptions
    ): Promise<any> {
        return this.request<T>('post', url, data, options);
    }

    public async put<T>(
        url: string,
        data?: any,
        options?: IRequestOptions
    ): Promise<any> {
        return this.request<T>('put', url, data, options);
    }

    public async patch<T>(
        url: string,
        data?: any,
        options?: IRequestOptions
    ): Promise<any> {
        return this.request<T>('patch', url, data, options);
    }

    public async delete<T>(
        url: string,
        data?: any,
        options?: IRequestOptions
    ): Promise<any> {
        return this.request<T>('delete', url, data, options);
    }
}

export default new Api();
