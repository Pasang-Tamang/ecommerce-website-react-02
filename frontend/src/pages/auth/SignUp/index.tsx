import Container from "@mui/material/Container";
import { Col, Row, Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import {

  successToast,
  warningToast,
} from "../../../services/toaster.service";

import { useNavigate } from "react-router-dom";

import { postData } from "../../../services/axios.service";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const registerHandler = async (e: any) => {
    e.preventDefault();
    console.log("clicked");
    console.log(name, email, password, confirmPassword);

    if (password !== confirmPassword) {
      warningToast("Password and confirm Password must be same");
    } else {
      const userData = {
        name,
        email,
        password,
        confirmPassword,
      };

      const response = await postData("/auth/register", userData)
     
      if (response.status) {
        console.log(response.message)
        navigate("/");
       
        successToast(response.data.message);
      }

      // try {
      //   const response = await axios.post(
      //     `${config.SERVER_URL}/auth/register`,
      //     userData
      //   );
      //   console.log(response);

      //   if (response.data.status) {
      //     navigate("/");
      //     successToast(response.data.message);
      //   }
      // } catch (error: any) {
      //   console.log(error);

      //   errorToast(error.response.data.error);
      // }
    }
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6}>
          <h1>SignUp</h1>

          <Form onSubmit={registerHandler}>
            <TextField
              id="name"
              label="Name"
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              required
              placeholder="Enter your name"
              fullWidth
              autoFocus
              className="mb-4"
            />

            <TextField
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              required
              placeholder="Enter your Email"
              fullWidth
              autoFocus
              className="mb-4"
            ></TextField>

            <TextField
              id="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              fullWidth
              variant="outlined"
              autoFocus
              className="mb-4"
            ></TextField>

            <TextField
              id="confirm-password"
              label="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              variant="outlined"
              required
              fullWidth
              autoFocus
              placeholder="Confirm the Password"
              className="mb-4"
            ></TextField>

            <Button type="submit" variant="contained">
              SignUp
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
