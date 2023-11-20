"use client";
import TriangleLoader from "@/helpers/TriangleLoader";
import { ICounterState } from "@/interfaces/redux.interface";
import { IUser_DB } from "@/interfaces/user.interface";
import { resetState, updateUser } from "@/redux/slices/userSlice";
import { errorOptions, successOptions, warningOptions } from "@/utils/alerts";
import { getChangedFields } from "@/utils/changedFileds";
import { formatDate } from "@/utils/getDateDetails";
import { UserProfileUpdateValidationSchema } from "@/validation/FormikYupValidation";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const UserProfile = () => {
  const dispatch: any = useDispatch();
  const { userInfo, success, error, message, loading }: ICounterState =
    useSelector((state: any) => state.user);

  const user: IUser_DB = userInfo as IUser_DB;

  const profileInitialValues = {
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    birthday: user.birthday,
  };

  const profileUpdateHandler = (values: object) => {
    if (values === profileInitialValues)
      toast.warning("No Changes were made!", warningOptions);
    else {
      const updateData: object = {
        ...getChangedFields(profileInitialValues, values),
        id: user._id,
      };
      dispatch(updateUser(updateData));
    }
  };

  useEffect(() => {
    if (success && message) {
      toast.success(message, successOptions);
      dispatch(resetState());
    }
    if (error) toast.error(error, errorOptions);
  }, [dispatch, error, message, success]);

  return (
    <>
      {loading && <TriangleLoader />}
      <div className="container mt-5 col-md-4">
        <h1 className="mb-5">
          Edit Profile <h5>{user.email}</h5>
        </h1>
        <Formik
          initialValues={profileInitialValues}
          validationSchema={UserProfileUpdateValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            profileUpdateHandler(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <Field
                    name="firstname"
                    type="text"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label ms-2" htmlFor="form3Example1">
                    First name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <Field
                    name="lastname"
                    type="text"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label ms-2" htmlFor="form3Example2">
                    Last name
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <Field
                    name="phone"
                    type="text"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label ms-2" htmlFor="form3Example1">
                    Phone
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <Field
                    name="birthday"
                    type="text"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label ms-2" htmlFor="form3Example2">
                    Birthday
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1">
                    <span className="lh-lg">
                      Active Since -{" "}
                      <b>
                        {formatDate("2023-11-17T14:04:56.581+00:00").substring(
                          0,
                          12
                        )}
                      </b>
                    </span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 col"
              >
                Update
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default UserProfile;
