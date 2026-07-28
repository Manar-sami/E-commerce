import { useMutation } from "@tanstack/react-query"
import Authinstance from "../API/Authinstance"
import { useQueryClient } from "@tanstack/react-query";


function Addreview() {

//  const queryClient = useQueryClient();
 return   useMutation({
    mutationFn:( {ProductId,Rating,Comment} ) => Authinstance.post(`/Products/${ProductId}/reviews`,{
        Rating:Rating,
        Comment:Comment,
    }),
   
  })

}

export default Addreview