import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/Form/FormContainer";
import FormControl from "../../components/Form/FormControl";
// import style from "./Register.module.css";
import * as yup from "yup";
import { registerApi } from "../../redux/RegisterSlice";
import { Blocks } from "react-loader-spinner";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // eslint-disable-next-line no-unused-vars
  const { register, isLoading, error } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (register.message && register.message === "success") {
      toast.success("register successfully");
      navigate("/login");
    }
  }, [register]);

  function handlerRegister(values) {
    dispatch(registerApi(values));
  }

  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };
  const regPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const regPhone = /^01[0125][0-9]{8}$/gi;
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "minimum number is 3")
      .max(10, "maximum number is 10")
      .required("pls enter your name"),
    email: yup.string().email("email is invalid").required("email is required"),
    password: yup
      .string()
      .matches(
        regPassword,
        "Minimum eight characters, at least one letter, one number and one special character"
      )
      .required("pls enter valid password"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("must be identical with password"),
    phone: yup
      .string()
      .matches(regPhone, "pls enter valid number like 01012345678"),
  });
  function onSubmit(values) {
    handlerRegister(values);
  }
  return (
    <div className="container">
      <div className="w-75 mx-auto">
        {/* {error !== null ? <div className="alert alert-danger">{error}</div> :"" } */}
        <FormContainer
          btnText={
            isLoading ? (
              <Blocks
                height="30"
                width="60"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
              />
            ) : (
              "Sign Up"
            )
          }
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <FormControl
            control="input"
            name="name"
            type="text"
            label="Enter Name : "
            placeholder="enter name"
          />
          <FormControl
            control="input"
            name="email"
            type="email"
            label="Enter Email : "
            placeholder="enter email"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            label="Enter Password : "
            placeholder="enter password"
          />
          <FormControl
            control="input"
            name="rePassword"
            type="password"
            label="Enter rePassword : "
            placeholder="enter rePassword"
          />
          <FormControl
            control="input"
            name="phone"
            type="tel"
            label="Enter phone : "
            placeholder="enter phone"
          />
        </FormContainer>
      </div>
    </div>
  );
}
