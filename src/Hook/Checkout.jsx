import { useMutation } from "@tanstack/react-query"
import Authinstance from "../API/Authinstance"
import { href } from "react-router-dom"


function Checkout() {
 
 return   useMutation({
        mutationFn:({PaymentMethod})=> Authinstance.post("/Checkouts",{PaymentMethod}),
        onSuccess:(response)=>{
            if(response?.data?.url){
                location.href=response.data.url
            }
        }
    })
}

export default Checkout