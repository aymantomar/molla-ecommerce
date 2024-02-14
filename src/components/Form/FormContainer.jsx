import { Form, Formik } from "formik";

// eslint-disable-next-line react/prop-types
export default function FormContainer({
  // eslint-disable-next-line react/prop-types
  initialValues,
  // eslint-disable-next-line react/prop-types
  validationSchema,
  // eslint-disable-next-line react/prop-types
  onSubmit,
  // eslint-disable-next-line react/prop-types
  btnText,
  // eslint-disable-next-line react/prop-types
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          {children}
          <div className="text-end">
            <button
              className="btn btn-outline-primary rounded-0 px-4"
              type="submit"
            >
              {btnText}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
