import * as Yup from "yup";

// export const loginSchema = Yup.object({
//   email: Yup.string().email().required("Please enter your email"),
//   password: Yup.string().min(6).required("Please enter your password"),
// });
export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .matches(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Please enter a valid email address with a proper domain"
    )
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Please enter your password"),
});

export const forgotSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

export const newPasswordSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  confirmPassword: Yup.string().min(
    6,
    "Password must be at least 6 characters"
  ),
  // .oneOf([Yup.ref("newPassword"), null], "Passwords must match with new password")
  // .required("Please enter your password"),
});
