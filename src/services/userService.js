const { default: instance } = require('~/config/axiosConfig');

const userService = {
    getAll: async () => {
        const response = await instance.get('users/manage/all');
        return response.data.content;
    },
    getById: async (id) => {
        const response = await instance.get(`users/${id}`);
        return response.data;
    },
    create: async (data) => {
        const response = await instance.post('users', data);
        return response.data;
    },
    update: async (id, data) => {
        const response = await instance.put(`users/${id}`, data);
        return response.data;
    },
    delete: async (id) => {
        const response = await instance.delete(`users/${id}`);
        return response.data;
    },
    updateStatus: async (id, status) => {
        const response = await instance.patch(`users/${id}/${status}`);
        return response.data;
    },
};

export default userService;
