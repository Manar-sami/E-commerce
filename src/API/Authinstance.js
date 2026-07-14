import axios from "axios";
import UseAuthStore from "../store/UseAuthStore";

const token = UseAuthStore.getState().Token;
const Authinstance = axios.create({
    
    baseURL:`${import.meta.env.VITE_BURL}`,
    headers:{
        'Accept-Language':"en",
         'Authorization': `Bearer ${token}`
    }
})  

export default Authinstance;