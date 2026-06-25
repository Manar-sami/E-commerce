
import axios from "axios";

const  instance =axios.create({

    baseURL:`${import.meta.env.VITE_BURL}`,
    headers:{
        'Accept-Language':"en"
    }
})

export default instance;