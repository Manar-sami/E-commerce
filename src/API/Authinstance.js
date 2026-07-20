import axios from "axios";
import UseAuthStore from "../store/UseAuthStore";
import i18n from "../languge";

const token = UseAuthStore.getState().Token;
const Authinstance = axios.create({
    
    baseURL:`${import.meta.env.VITE_BURL}`,
    headers:{
    
         'Authorization': `Bearer ${token}`
    }
})  

Authinstance.interceptors.request.use((config)=>{
    config.headers["Accept-Language"]=i18n.language;
    return config;

})
export default Authinstance;