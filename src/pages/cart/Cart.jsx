

import { useQuery } from "@tanstack/react-query";
import Authinstance from '../../API/Authinstance';
import {Counterstore} from "../../store/Counterstore";
function Cart() { 
    const counter= Counterstore((state)=>state.count)
    const increment= Counterstore((state)=>state.increment)
    const decrement= Counterstore((state)=>state.decrement)

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
      <h2>
       Cart Count: {counter}
      </h2>
      
      <div className="flex gap-2">
        <button onClick={increment} className="bg-blue-500 text-white px-2 py-1 rounded">
        +
      </button>

       <button onClick={decrement} className="bg-red-500 text-white px-2 py-1 rounded">
        -
      </button>
      </div>
    </div>
  )
}   

export default Cart;