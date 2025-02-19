import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    // interceptor
    axiosSecure.interceptors.response.use(res => {
        
        return res
    },
        async error => {
            // console.log("error inside axios interceptor: ", error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                await logout()
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )
    return axiosSecure
};

export default useAxiosSecure;