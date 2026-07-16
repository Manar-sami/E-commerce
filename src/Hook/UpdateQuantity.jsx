import Authinstance from "../API/Authinstance";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

function UpdateQuantity() {

  const queryClient = useQueryClient();

  const updateitem = useMutation({
   mutationFn: ({ productId, count }) => {
      console.log(productId, count); // للتأكد
      return Authinstance.patch(`/Carts/${productId}`, { count });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return updateitem;
}

export default UpdateQuantity;
