import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:3001';

export const uploadMedia = async (file: File, onUploadProgress?: AxiosRequestConfig['onUploadProgress']) => { // Usando o tipo correto
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(`${BASE_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress, // O callback correto para progresso do upload
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao fazer upload:', error);
        throw error;
    }
};
