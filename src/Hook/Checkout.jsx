import { useMutation } from "@tanstack/react-query"
import Authinstance from "../API/Authinstance"



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