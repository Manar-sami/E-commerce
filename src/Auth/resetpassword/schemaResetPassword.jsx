import * as yup from "yup";

export const schemaResetPassword = yup.object({
  email: yup.string().email().required(),
  code: yup.string().required("Code is required").min(4),
  newPassword: yup.string().required("New Password is required") .min(8),
});