

import { useQuery } from "@tanstack/react-query";
import Authinstance from '../../API/Authinstance';

function Cart() {

    const getCart = async () => {
        try {
            const response = await Authinstance.get(`/Carts`);
            console.log(response);
            return response;
        }  
        catch (error) {
            console.error('Error fetching cart:', error);
        }            
}

const {data,isLoading,error}=useQuery({
    queryKey:['cart'],
    queryFn:getCart
})

if(isLoading){
    return <div>Loading...</div>
}
if(error){
    return <div>Error </div>
}
 return (
    <div>
     
    </div>
  )
}   

export default Cart;