"use client";
import TriangleLoader from "@/helpers/TriangleLoader";
import { ICounterState } from "@/interfaces/redux.interface";
import { IUser_Login } from "@/interfaces/user.interface";
import { loginUser, resetState } from "@/redux/slices/userSlice";
import { errorOptions, successOptions } from "@/utils/alerts";
import {
  LoginInitialValues,
  LoginValidationSchema,
} from "@/validation/FormikYupValidation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();

  const {
    error,
    loading,
    message,
    success,
    refreshToken,
    userInfo,
  }: ICounterState = useSelector((state: any) => state.user);

  const loginSubmitHandler = (values: IUser_Login) => {
    dispatch(loginUser(values));
  };

  useEffect(() => {
    error && toast.error(error, errorOptions);
    success &&
      userInfo &&
      refreshToken &&
      toast.success(message, successOptions) &&
      setTimeout(() => {
        dispatch(resetState());
        router.push("/");
      }, 1500);
  }, [dispatch, error, message, router, success, refreshToken, userInfo]);

  return (
    <section className="vh-75 gradient-custom py-5">
      {loading && <TriangleLoader />}
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
                <Formik
                  initialValues={LoginInitialValues}
                  validationSchema={LoginValidationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    loginSubmitHandler(values);
                  }}
                >
                  <Form>
                    <div>
                      <div>
                        <div className="form-outline">
                          <Field
                            name="email"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="abc@example.com"
                          />
                          <ErrorMessage
                            name="email"
                            className="text-danger"
                            component="span"
                          />
                          <div className="form-label">Email</div>
                        </div>
                      </div>
                      <div>
                        <div className="form-outline">
                          <Field
                            type="password"
                            className="form-control form-control-lg"
                            name="password"
                            placeholder="******************"
                          />
                          <ErrorMessage
                            name="password"
                            className="text-danger"
                            component="span"
                          />
                          <div className="form-label">Password</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <button className="btn btn-primary btn-lg" type="submit">
                        Login
                      </button>
                    </div>
                  </Form>
                </Formik>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="link-danger"
                    style={{ color: "#314D43" }}
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
