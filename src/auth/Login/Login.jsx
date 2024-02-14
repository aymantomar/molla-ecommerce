import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/Form/FormContainer";
import FormControl from "../../components/Form/FormControl";
import "./Login.module.css";
import * as yup from "yup";
import { getToken } from "../../redux/LoginSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Blocks } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [errorLogin, setErrorLogin] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const { token, isLoading, error } = useSelector((state) => state.logIn);

  useEffect(() => {
    if (token?.token) {
      localStorage.setItem("token", JSON.stringify(token));
      toast.success("login successfully");
      navigate("/");
      // JSON.parse(localStorage.getItem("token"));
      // window.location.reload();
    } else {
      setErrorLogin(token?.response?.data.message);
      // toast.error(token?.response?.data.message);
    }
  }, [token]);

  const handlerLogin = (values) => {
    dispatch(getToken(values));
  };

  const regPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email("email is invalid").required("email is required"),
    password: yup
      .string()
      .matches(
        regPassword,
        "Minimum eight characters, at least one letter, one number and one special character"
      )
      .required("pls enter valid password"),
  });
  const onSubmit = (values) => {
    handlerLogin(values);
  };
  return (
    <div className="container">
      <div className="w-75 m-auto">
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
              "LogIn"
            )
          }
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {token?.token ? (
            ""
          ) : !errorLogin ? (
            ""
          ) : (
            <div className="alert alert-danger">{errorLogin}</div>
          )}
          <FormControl
            control="input"
            type="email"
            name="email"
            label="Enter Your Email"
            placeholder="Enter Your Email"
          />
          <FormControl
            control="input"
            type="password"
            name="password"
            label="Enter Your Password"
            placeholder="Enter Your Password"
          />
        </FormContainer>
      </div>
    </div>
  );
}
