import * as yup from "yup"


export const Schemaforget=yup.object({
    
      email:yup.string().required().email(),
      



    })  