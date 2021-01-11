import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .required("This field is required"),
  surname: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  gender: yup.string().required("This field is required"),
});

export default validationSchema;
