import axios from "axios";

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const api = {
    getAllAlbums: async () => {
        let response = await http.get('albums');
        return response.data;
    },
    getAlbum: async (slug: number) => {
        let response = await http.get(`albums/${slug}`);
        return response.data;
    },
    getPhotos: async (slug: number) => {
        let response = await http.get(`albums/${slug}/photos`);
        return response.data;
    }
}