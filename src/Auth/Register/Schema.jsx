import * as yup from "yup"


export const schema=yup.object({
      
      userName:yup.string().required().min(3).max(10),
      fullName:yup.string().required(),
      phoneNumber:yup.string().required(),
      email:yup.string().required().email(),
      password:yup.string().required(),



    })  