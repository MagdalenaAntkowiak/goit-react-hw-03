import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./contactForm.module.css";

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short")
    .max(50, "Name is too long")
    .required("Field required"),
  number: Yup.string()
    .min(3, "Number is too short")
    .max(50, "Number is too long")
    .required("Field required"),
});

const initialValues = { name: "", number: "" };

function ContactForm({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema}
      >
        <Form className={styles.divForm}>
          <label className={styles.labelName} htmlFor="name">
            Name
          </label>
          <Field
            className={styles.inputField}
            type="text"
            name="name"
            id="name"
          />
          <ErrorMessage
            render={(msg) => <div className={styles.error}>{msg}</div>}
            name="name"
          />
          <label className={styles.labelNumber} htmlFor="number">
            Number
          </label>
          <Field
            className={styles.inputField}
            type="tel"
            name="number"
            id="number"
          />
          <ErrorMessage
            render={(msg) => <div className={styles.error}>{msg}</div>}
            name="number"
          />
          <button className={styles.formButton} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
