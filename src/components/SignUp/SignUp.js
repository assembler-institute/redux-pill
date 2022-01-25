import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authRequests } from "../../utils/auth_requests";
import {
  isSigningIn,
  signUpSuccess,
  signUpError,
} from "../../redux/auth/actions";
import { saveNewUser } from "../../utils/localStorage";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box component="div">
      <Typography variant="h5" className="formTypo">
        Sign up
      </Typography>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirm_password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (values.password !== values.confirm_password) {
            errors.password = "Both password must match";
          } else if (values.password === "" || values.confirm_password === "") {
            errors.password = "Required";
          } else if (values.name === "") {
            errors.name = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            dispatch(isSigningIn);
            const req = await authRequests(
              "register",
              JSON.stringify(values, null, 2)
            );
            if (!req.success) {
              dispatch(signUpError(req.error));
            } else {
              dispatch(signUpSuccess(req.data));
              saveNewUser(req.data);
            }
            setSubmitting(false);
            navigate("/");
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="formik">
            <Field
              type="name"
              name="name"
              className="field"
              placeholder="name"
            />
            <ErrorMessage
              className="errorMessage"
              name="name"
              component="div"
            />
            <Field
              type="email"
              name="email"
              className="field"
              placeholder="email"
            />
            <ErrorMessage
              className="errorMessage"
              name="email"
              component="div"
            />
            <Field
              type="password"
              name="password"
              className="field"
              placeholder="password"
            />
            <ErrorMessage
              className="errorMessage"
              name="password"
              component="div"
            />
            <Field
              type="password"
              name="confirm_password"
              className="field"
              placeholder="Confirm password"
            />
            <ErrorMessage
              className="errorMessage"
              name="confirm_password"
              component="div"
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
