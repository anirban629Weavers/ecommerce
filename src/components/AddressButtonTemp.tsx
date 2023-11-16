"use client";
import { IOrderAddress } from "@/interfaces/order.interface";
import { successOptions } from "@/utils/alerts";
import { AddressValidationSchema } from "@/validation/FormikYupValidation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddressButtonTemp = ({ onInput }: { onInput: Function }) => {
  const intitalValues: IOrderAddress = {
    addressline1: "",
    addressline2: "",
    city: "",
    state: "",
    zipcode: "",
  };
  const [saveButton, setsaveButton] = useState("Save Address");
  const [saveButtonClass, setsaveButtonClass] = useState("");
  const addressSubmitHandler = (address: object) => {
    toast.success("Address Saved! Close the  bar", successOptions);
    setsaveButton("Saved");
    setsaveButtonClass("d-none");
    onInput(address as IOrderAddress);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Select Address
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <Formik
            initialValues={intitalValues}
            validationSchema={AddressValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              addressSubmitHandler(values);
              setSubmitting(false);
            }}
          >
            <Form>
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Address
                  </h3>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="form-horizontal">
                          <div className="form-group">
                            <label
                              htmlFor="inputAddressLine1"
                              className="col-sm-2 control-label"
                            >
                              Address&nbsp;Line&nbsp;1
                            </label>
                            <div className="col-sm-10">
                              <Field
                                name="addressline1"
                                type="text"
                                className="form-control"
                                id="inputAddressLine1"
                                placeholder="Address Line 1"
                              />
                              <ErrorMessage
                                name="addressline1"
                                component="span"
                                className="text-danger"
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <p className="col-sm-offset-2 col-sm-10 help-block">
                              Apartment, suite , unit, building, floor, etc.
                            </p>
                            <label
                              htmlFor="inputAddressLine2"
                              className="col-sm-2 control-label"
                            >
                              Address&nbsp;Line&nbsp;2
                            </label>
                            <div className="col-sm-10">
                              <Field
                                type="text"
                                className="form-control"
                                id="inputAddressLine2"
                                name="addressline2"
                                placeholder="Address Line 2"
                              />
                              <ErrorMessage
                                name="addressline2"
                                component="span"
                                className="text-danger"
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <label
                              htmlFor="inputCityTown"
                              className="col-sm-2 control-label"
                            >
                              City
                            </label>
                            <div className="col-sm-10">
                              <Field
                                type="text"
                                className="form-control"
                                id="inputCityTown"
                                name="city"
                                placeholder="City / Town"
                              />
                              <ErrorMessage
                                name="city"
                                component="span"
                                className="text-danger"
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <label
                              htmlFor="inputStateProvinceRegion"
                              className="col-sm-2 control-label"
                            >
                              State
                            </label>
                            <div className="col-sm-10">
                              <Field
                                type="text"
                                className="form-control"
                                id="inputStateProvinceRegion"
                                name="state"
                                placeholder="State / Province / Region"
                              />
                              <ErrorMessage
                                name="state"
                                component="span"
                                className="text-danger"
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <label
                              htmlFor="inputZipPostalCode"
                              className="col-sm-2 control-label"
                            >
                              ZIP
                            </label>
                            <div className="col-sm-10">
                              <Field
                                type="text"
                                className="form-control"
                                id="inputZipPostalCode"
                                name="zipcode"
                                placeholder="Zip / Postal Code"
                              />
                              <ErrorMessage
                                name="zipcode"
                                component="span"
                                className="text-danger"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      setsaveButton("Save Address");
                      setsaveButtonClass("");
                    }}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className={`custom-close btn btn-primary ${saveButtonClass}`}
                  >
                    {saveButton}
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddressButtonTemp;
