import axios from "axios";

const axiosClient= axios.create({
    baseURL: 'https://holiday-planner-4lnj.onrender.com'
});
export default axiosClient