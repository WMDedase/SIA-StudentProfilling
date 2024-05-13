import axios from "axios";

// axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const API_URL = "http://127.0.0.1:8000/api/"

const api = axios.create({
    baseURL: API_URL
})

api.interceptors.request.use(
(config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
},

(error) => {
    return Promise.reject(error);
}
);

// Function to fetch current user's data
export async function fetchCurrentUser() {
    try {
        const response = await api.get('/user', {
            params: {
                with: 'studentProfile' // Include studentProfile relationship
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch current user');
    }
}
// Function to update profile picture
export async function updateProfilePicture(userId, newProfilePicture) {
    try {
        const formData = new FormData();
        formData.append('profile_picture', newProfilePicture);

        const response = await api.post('/user/${userId}/update-profile-picture', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to update profile picture');
    }
}

export default api