import * as yup from "yup";

export const schemaResetPassword = yup.object({
  email: yup.string().email().required(),
  code: yup.string().required("Code is required"),
  newPassword: yup
    .string()
    .min(8)
    .required("New Password is required"),
});