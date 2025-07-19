import instance from "../instance/instance";


const todoServices = {
    getTodos: async () => {
        try {
            const response = await instance.get(`/todos`);
            return response.data;
        } catch (error) {
            return [];
        }
    },
    getTodoById: async (id) => {
        try {
            const response = await instance.get(`/todos/${id}`);
            return response.data;
        } catch (error) {
            return {};
        }
    },
    createTodo: async (todo) => {

    },
    updateTodo: async (id, todo) => {

    },
    deleteTodo: async (id) => {
        try {
            const response = await instance.delete(`/todos/${id}`)
            return response.data;
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    }
}

export default todoServices;