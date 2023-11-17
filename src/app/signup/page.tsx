"use client";
import TriangleLoader from "@/helpers/TriangleLoader";
import { ICounterState } from "@/interfaces/redux.interface";
import { IUser_CLIENT } from "@/interfaces/user.interface";
import { resetState, signupUser } from "@/redux/slices/userSlice";
import { errorOptions, successOptions } from "@/utils/alerts";
import {
  SignupInitialValues,
  SignupValidationSchema,
} from "@/validation/FormikYupValidation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();

  const {
    error,
    loading,
    message,
    userInfo,
    success,
    accessToken,
    refreshToken,
  }: ICounterState = useSelector((state: any) => state.user);

  const signupHandler = (values: any) => {
    const userData: IUser_CLIENT = {
      firstname: values.firstname,
      lastname: values.lastname,
      birthday: values.birthday,
      gender: values.gender,
      email: values.email,
      phone: values.phone,
      password: values.password,
    };
    dispatch(signupUser(userData));
  };

  useEffect(() => {
    error && toast.error(error, errorOptions) && dispatch(resetState());
    success &&
      userInfo &&
      refreshToken &&
      toast.success(message, successOptions) &&
      setTimeout(() => {
        dispatch(resetState());
        router.push("/");
      }, 1500);
  }, [error, message, router, success, userInfo, dispatch, refreshToken]);

  return (
    <section className="vh-100 gradient-custom">
      <ToastContainer />
      {loading && <TriangleLoader />}
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <Formik
                  initialValues={SignupInitialValues}
                  validationSchema={SignupValidationSchema}
                  onSubmit={(values, { setSubmitting }) =>
                    signupHandler(values)
                  }
                >
                  <Form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <Field
                            name="firstname"
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            placeholder="John"
                          />
                          <ErrorMessage
                            name="firstname"
                            className="text-danger"
                            component="span"
                          />
                          <div className="form-label">First Name</div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <Field
                            type="text"
                            className="form-control form-control-lg"
                            name="lastname"
                            placeholder="Doe"
                          />
                          <ErrorMessage
                            name="lastname"
                            className="text-danger"
                            component="span"
                          />
                          <div className="form-label">Last Name</div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <Field
                            type="text"
                            className="form-control form-control-lg"
                            name="birthday"
                            placeholder="DD/MM/YYYY"
                          />
                          <ErrorMessage
                            name="birthday"
                            className="text-danger"
                            component="span"
                          />
                          <div className="form-label">Birthday</div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>
                        <div className="form-check form-check-inline">
                          <Field
                            className="form-check-Field"
                            type="radio"
                            name="gender"
                            value="female"
                          />
                          <label className="form-check-label ms-2">
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <Field
                            className="form-check-Field"
                            type="radio"
                            name="gender"
                            id="maleGender"
                            value="male"
                          />
                          <label
                            className="form-check-label ms-2"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <Field
                            className="form-check-Field"
                            type="radio"
                            name="gender"
                            id="otherGender"
                            value="other"
                          />
                          <label
                            className="form-check-label ms-2"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                        </div>
                        <ErrorMessage
                          name="gender"
                          className="text-danger"
                          component="span"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <Field
                            type="email"
                            className="form-control form-control-lg"
                            name="email"
                            placeholder="example@example.com"
                          />
                          <ErrorMessage
                            name="email"
                            className="text-danger"
                            component="span"
                          />
                          <div className="form-label">Email</div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <Field
                            type="number"
                            className="form-control form-control-lg"
                            name="phone"
                            placeholder="1 234 567 890"
                          />
                          <ErrorMessage
                            name="phone"
                            className="text-danger"
                            component="span"
                          />
                          <div className="form-label">Phone</div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
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
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <Field
                            type="password"
                            className="form-control form-control-lg"
                            name="confirmpassword"
                            placeholder="******************"
                          />
                          <ErrorMessage
                            name="confirmpassword"
                            className="text-danger"
                            component="span"
                          />
                          <div className="form-label">Confirm Password</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Signup
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
