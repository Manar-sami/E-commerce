import { useMutation } from "@tanstack/react-query"
import axiosinstance from "../API/axiosinstance"


function ForgetPassword() {
  return useMutation({
    mutationFn: (data)=>axiosinstance.post("/auth/Account/SendCode",data)
  })

}

export default ForgetPassword