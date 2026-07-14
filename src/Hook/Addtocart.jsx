
import Authinstance from '../API/Authinstance';
import { useMutation } from '@tanstack/react-query';

function Addtocart() {

   const addcart=async({ProductId,Count})=>{
    console.log(ProductId,Count)
    try {
        const response = await Authinstance.post(`/Carts`,{
            ProductId:ProductId,
            Count:Count
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
  };

  const mutate=useMutation({
    mutationFn:addcart,
  })

  return mutate;
}

export default Addtocart