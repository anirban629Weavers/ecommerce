import * as yup from "yup";

export const SignupInitialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
  birthday: "",
  gender: "",
  phone: "",
};

export const SignupValidationSchema = yup.object({
  firstname: yup.string().required("Please enter your First Name"),
  lastname: yup.string().required("Please enter your Last Name"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please enter your email address"),
  password: yup.string().required("Please enter password"),
  confirmpassword: yup
    .string()
    .required("Please confirm password")
    .oneOf([yup.ref("password")], "Password didn't matched"),
  gender: yup.string().required("Please enter your gender"),
  birthday: yup.string().required("Please enter Birthday"),
  phone: yup.string().required("Please enter your phone"),
});

export const LoginInitialValues = { email: "", password: "" };

export const LoginValidationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please enter your email address"),
  password: yup.string().required("Please enter password"),
});
