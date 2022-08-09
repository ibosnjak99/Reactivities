import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { Activity } from "../models/Activity";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'https://localhost:5001/api';

axios.interceptors.response.use(async response => {
        await sleep(350);
        return response;
}, (error: AxiosError) => {
    const {data, status} = error.response!;
    switch (status) {
        case 400:
            toast.error('Bad request');
            break;
        case 401:
            toast.error('Unauthorised');
            break;
        case 404:
            toast.error('Not found');
            break;
        case 500:
            toast.error('Server error');
            break;
    }

    return Promise.reject(error);
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests =  {
   get: <T> (url: string) => axios.get<T>(url).then(responseBody),
   post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
   put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
   delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Activities = {
    list: () => requests.get<Activity[]>('/activities'),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => requests.post<void>(`/activities`, activity),
    update: (activity: Activity) => requests.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string) => requests.delete<void>(`activities/${id}`)
}

const agent = {
    Activities
}

export default agent;