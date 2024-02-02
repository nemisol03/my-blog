import instance from '~/config/axiosConfig'
const tagService = {
    getAll: async (options) => {
        const response = await instance.get('tags/manage/all',{
            params: options
        });
        return response.data.content;
    },
    getById: async (id) => {
        const response = await instance.get(`tags/${id}`);
        return response.data;
    },
    create: async (data) => {
        const response = await instance.post('tags', data);
        return response.data;
    },
    update: async (id, data) => {
        const response = await instance.put(`tags/${id}`, data);
        return response.data;
    },
    delete: async (id) => {
        const response = await instance.delete(`tags/${id}`);
        return response.data;
    }
}

export default tagService;