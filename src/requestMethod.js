import axios from "axios";

const BASE_URL = "https://fashion-pyrx.onrender.com"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGU3NmZmNTEyYzY2ZDg1ODNkZGM1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDU1NDIzMywiZXhwIjoxNzA0ODEzNDMzfQ.5xvQXSvuHVvmHxiJF2Ikt_xGqgrxqYliwIvESQoAGL0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})