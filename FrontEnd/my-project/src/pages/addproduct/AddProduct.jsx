import React from "react";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@mui/material/Alert";
import axios from "axios";

export default function AddProduct() {
  const navigate = useNavigate();

  function handleAdd(values) {
    axios
      .post(`http://localhost:3000/product`, values)
      .then(() => navigate(-1))
      .catch((err) => console.error(err));
  }

  const SignupSchema = Yup.object().shape({
    country: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    title: Yup.string()
      .min(3, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(3, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
    image: Yup.string()
      .min(3, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
  });
  return (
  <div>
    <div className="mainss">
      <h1>Add Product</h1>
      <Formik
        initialValues={{
          country: "",
          title: "",
          description: "",
          color: "",
        }}
        validationSchema={SignupSchema}
        enableReinitialize
        onSubmit={(values) => handleAdd(values)}
      >
        {({ errors, touched }) => (
          <Form className="add-form">
            <Field name="country" className="field" placeholder="Country" />
            {errors.country && touched.country ? (
              <Alert severity="error" className="alertt">
                {errors.country}
              </Alert>
            ) : null}
            <Field name="title" className="field" placeholder="title" />
            {errors.title && touched.title ? (
              <Alert severity="error" className="alertt">
                {errors.title}
              </Alert>
            ) : null}

            <Field name="description" className="field" placeholder="Color" />
            {errors.description && touched.description ? (
              <Alert severity="error" className="alertt">
                {errors.description}
              </Alert>
            ) : null}

            <Field name="image" className="field" placeholder="Is New" />
            {errors.image && touched.image ? (
              <Alert severity="error" className="alertt">
                {errors.image}
              </Alert>
            ) : null}

            <Button type="primary" htmlType="submit">
              ADD PRODUCT
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
  );
}
