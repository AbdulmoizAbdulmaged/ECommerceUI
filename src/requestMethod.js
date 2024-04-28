import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDI0Y2VlMDhjYWI3MjdjMzE2NTUyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjg2NzgxMCwiZXhwIjoxNzEzMTI3MDEwfQ.5sKguw3P-Dd2Y7j2WOjELWyjSAo-2YuhK5c9ZYJdhZI";
export const publicRequest = axios.create(
  {
    baseURL:BASE_URL,
  }
);

export const userRequest = axios.create(
  {
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`},
  }
)

