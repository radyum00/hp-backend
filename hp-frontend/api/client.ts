import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.100:8000/api/v1", // ← ТВОЙ IP
});

export const setAuthToken = (token?: string) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default API;
