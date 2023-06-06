import axios from "axios";

const client_id = "bf31a52e5ea64f4889f9d80893aa70a4";
const redirecturl = "http://localhost:3000/";
const auth_url = "https://accounts.spotify.com/authorize";
const scopes = ["user-library-read", "playlist-read-private"];


let _token = window.localStorage.getItem("token");

export const loginEndpoint = `${auth_url}client_id=${client_id}&redirect_uri=${redirecturl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


// user details
const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClienttoken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

//user playlist
export const apiplaylist = axios.create({
  baseURL: "https://api.spotify.com/v1/me/",
});

// Add a header to the instance
apiplaylist.defaults.headers.common["Authorization"] = `Bearer ${_token}`



export default apiClient;
