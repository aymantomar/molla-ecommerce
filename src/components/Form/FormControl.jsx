import "./Form.module.css";
import Input from "./Input";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function FormControl({ control, ...rest }) {
  switch (control) {
    case  "input":
      return <Input {...rest} />;
  }
}
