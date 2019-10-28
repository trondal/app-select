import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CustomInputComponent = (props: any) => (
  <input className="my-custom-input" type="text" {...props} />
);

const CustomSelectComponent = (props: any) => (
  <select className="my-custom-input" type="select" {...props}>
    <option value="norway">Norge</option>
    <option value="denmark">Danmark</option>
  </select>
);

const Example = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        country: Yup.string().required("Required")
      })}
      initialValues={{ firstName: "Trond", country: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Field
            name="firstName"
            as={CustomInputComponent}
            placeholder="First Name"
          />
          <ErrorMessage name="firstName" />
          <Field name="country" as={CustomSelectComponent}></Field>
          <ErrorMessage name="country" />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default Example;
