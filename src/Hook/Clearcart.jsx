import { useMutation } from "@tanstack/react-query"
import Authinstance from "../API/Authinstance"
import { useQueryClient } from "@tanstack/react-query";

function Clearcart() {
 const queryClient = useQueryClient();
   return useMutation({
    
        mutationFn:  () => Authinstance.delete(`/Carts/clear`),
        onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },

    })
    

}

export default Clearcart