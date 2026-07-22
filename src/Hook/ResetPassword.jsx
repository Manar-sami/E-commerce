import { useMutation } from "@tanstack/react-query"
import Authinstance from "../API/Authinstance"



function ResetPassword() {
  

  return useMutation({
    mutationFn: (data)=>Authinstance.patch("/auth/Account/ResetPassword",data)
  })

}

export default ResetPassword