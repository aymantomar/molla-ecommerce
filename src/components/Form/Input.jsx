import { ErrorMessage, Field } from "formik";

// eslint-disable-next-line react/prop-types
export default function Input({ name, type, label, ...rest }) {
  return (
    <div className="form-group mb-3">
      <label className="mb-2" htmlFor={name}>
        {label}
      </label>
      <Field
        type={type}
        name={name}
        {...rest}
        className="form-control rounded-0"
      />
      <ErrorMessage name={name} component="div" className="alert alert-danger" />
    </div>
  );
}
