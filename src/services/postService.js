const { default: instance } = require("~/config/axiosConfig");

const postService={
    
        getAll: async (options) => {
            const response = await instance.get('posts/manage/all',{
                params: options
            });
            return response.data.content;
        },
        getById: async (id) => {
            const response = await instance.get(`posts/${id}`);
            return response.data;
        },
        create: async (data) => {
            const response = await instance.post('posts', data);
            return response.data;
        },
        update: async (id, data) => {
            const response = await instance.put(`posts/${id}`, data);
            return response.data;
        },
        delete: async (id) => {
            const response = await instance.delete(`posts/${id}`);
            return response.data;
        }
    
}

export default postService;