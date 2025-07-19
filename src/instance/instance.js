import axios from "axios";

const baseURL = `https://685ac3af9f6ef9611157b188.mockapi.io`; // Define your base URL here

// create a new instance of axios with custom configuration
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// export the instance to use it in other parts of the application
export default instance;