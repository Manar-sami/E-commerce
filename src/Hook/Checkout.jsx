import { useMutation } from "@tanstack/react-query"
import Authinstance from "../API/Authinstance"
import { useNavigate } from "react-router-dom"



function Checkout() {
    const navigate=useNavigate();
 
 return   useMutation({
        mutationFn:({PaymentMethod})=> Authinstance.post("/Checkouts",{PaymentMethod}),
        onSuccess:(response)=>{
            if(response?.data?.url){
                location.href=response.data.url
            }
            navigate("/");

        }
    })
}

export default Checkout