import Container from "@mui/material/Container";
import { Col, Row, Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { object, string } from "yup";
import { AuthInterface } from "../../../interface/auth.interface";
import { postData } from "../../../services/axios.service";
import { useNavigate } from "react-router-dom";
import { successToast } from "../../../services/toaster.service";

const Login = () => {
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: "",
  };

  let authValidationSchema = object({
    email: string().email().required(),
    password: string()
      .required()
      .min(8, "Password should be minimum of 8 characters")
      .max(15, "Password should be maximum of 15 characters"),
  });

  const loginHandler = async (values: AuthInterface) => {
    console.log(values);
    const response = await postData("/auth/login",values)
    console.log(response)
    //debugger

    if(response.status === "success"){
      navigate("/products")
      successToast("User logged in successfully")
    }
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center border border-1" style={{width: "600px"}}>
        <Col xs={12} md={6}>
          <h1 className="text-center">Login</h1>

          <Formik
            initialValues={initialValues}
            validationSchema={authValidationSchema}
            onSubmit={loginHandler}
          >
            {({ handleChange, handleSubmit, errors, touched, handleBlur }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-4 " >
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    required
                    placeholder="Enter your Email"
                    fullWidth
                    autoFocus
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-danger">{touched.email && errors.email}</span>
                </div>

                <div className="mb-4" >
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    required
                    fullWidth
                    variant="outlined"
                    
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-danger">{touched.password && errors.password}</span>
                </div>
              
               <Button type="submit" variant="contained" >
                  Login
                </Button>
             
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
