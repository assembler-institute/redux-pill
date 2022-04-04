import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authRequests } from "../../utils/auth_requests";
import {
  isSigningIn,
  signInError,
  signInSuccess,
} from "../../redux/auth/actions";
import { saveNewUser } from "../../utils/localStorage";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box component="div">
      <Typography variant="h5" className="formTypo">
        Log in
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            dispatch(isSigningIn());
            const req = await authRequests(
              "login",
              JSON.stringify(values, null, 2)
            );
            if (!req.success) {
              dispatch(signInError(req.error));
            } else {
              dispatch(signInSuccess(req.data));
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
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
