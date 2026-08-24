import { useMutation } from "@tanstack/react-query"
import Authinstance from "../API/Authinstance"
import { useNavigate } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

function Checkout() {
    const{i18n}=useTranslation()
    const navigate=useNavigate();
   const queryClient = useQueryClient();
 return   useMutation({
        mutationFn:({paymentMethod})=> Authinstance.post("/Checkouts",{paymentMethod}),
       onSuccess: async (response) => {
  await queryClient.invalidateQueries({
    queryKey: ["cart", i18n.language],
  });

  if (response?.data?.url) {
    window.location.href = response.data.url;
    return;
  }

  navigate("/");
}
    })
}

export default Checkout