import { io } from '../app';
import { generateGuideApiCall } from '../utils/api';

export const generateGuide = async (guideData: any) => {
    try {
        const response = await generateGuideApiCall(guideData);
        return response;
    } catch (error) {
        console.error('Error al generar la guía:', error);
    }
};