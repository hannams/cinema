import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_SCREENINGS_BASE_URL,
    responseType: 'json',
    contentType: 'application/json',
});

export const screeningsAPI = {
    getAllScreenings: () => {
        return instance.get('');
    },
    postScreening: (screening) => {
        return instance.post('', screening);
    },
    getScreening: (screeningId) => {
        return instance.get(`/${screeningId}`);
    },
    putScreening: (screeningId, updatedScreening) => {
        return instance.put(`/${screeningId}`, updatedScreening);
    },
    deleteScreening: (screeningId) => {
        return instance.delete(`/${screeningId}`);
    },
    putStatusClosed: (screeningId) => {
        return instance.put(`/${screeningId}/closed`);
    },
    putStatusOpen: (screeningId) => {
        return instance.put(`/${screeningId}/open`);
    }

}