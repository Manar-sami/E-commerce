
import axios from "axios";
import i18n from "../languge";

const  instance =axios.create({

    baseURL:`${import.meta.env.VITE_BURL}`,
    headers:{
        'Accept-Language':"en"
    }
})

instance.interceptors.request.use((config)=>{
    config.headers["Accept-Language"]=i18n.language;
    return config;

})
export default instance;