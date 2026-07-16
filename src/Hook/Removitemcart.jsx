import Authinstance from "../API/Authinstance";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

//  ال component المسؤول عن حذف عنصر من ال cart

function Removitemcart() {
    
  const queryClient = useQueryClient();

  const removeitem = useMutation({
    mutationFn:  ( ProductId ) => Authinstance.delete(`/Carts/${ProductId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  

  return removeitem;
}

export default Removitemcart;
