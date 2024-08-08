import axios from "axios";

// axios.defaults.baseURL = "http://192.168.31.186:8000/api/";

// const API_URL = "http://127.0.0.1:8000/api/";
const API_URL = "http://192.168.1.21:8000/api/";



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
        const response = await api.get('user',{
            params: {
                with: 'studentProfile'
            }
            
        }
          );

        return response.data;
        // console.log(response);
    } catch (error) {
        throw new Error('Failed to fetch current user');
    }
}

export async function fetchDocxForCurrentUser() {
    try {
        const response = await api.get('/borrowstatus/user');
        console.log('Borrow status API response:', response.data); // Log the response
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch borrow status data for the current user');
    }
}
// Function to post a document request
export async function postDocumentRequest(requestData) {
    try {
        const response = await api.post('/docreq', requestData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to submit document request');
    }
}

// Function to fetch borrowed books data
// export async function fetchBorrowStatusForCurrentUser() {
//     try {
//         const response = await api.get('/borrowstatus/user');
//         console.log('Borrow status API response:', response.data); // Log the response
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to fetch borrow status data for the current user');
//     }
// }


export default api