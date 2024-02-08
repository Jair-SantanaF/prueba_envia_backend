import axios from 'axios';
import { API_KEY, API_URL } from '../config';

export const generateGuideApiCall = (guideData: any) => {
    return axios.post(API_URL, guideData, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
    });
};