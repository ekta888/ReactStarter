import React,{useState} from 'react';
import axios from 'axios';
import { Button, Label, FormGroup, Container, Row, Col, Card, CardBody, Input } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthLogo from '../../layouts/logo/AuthLogo';
import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';
import { ReactComponent as RightBg } from '../../assets/images/bg/login-bg-right.svg';

const LoginFormik = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Please enter your username'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Please enter your password'),
  });
  const handleFormSubmit = async (values) => {
    const loginArray = {
      username : values.email,
      password: values.password,
      tenant_domain : 'itsmycallcenter.com',
      device_id : '12345'
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/agent`, loginArray);
      console.log("ekta",response.data);
      if (response.data.statusCode === 200) {
          localStorage.setItem('authToken', response.data.access_token);
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('sipPort', response.data.sip_port);
          localStorage.setItem('loggedInUserData',JSON.stringify(response.data.agent_detail));
          navigate('/');
      } else {
        if(response.data.statusCode === 403){
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="loginBox">
       <ToastContainer />
      <LeftBg className="position-absolute left bottom-0" />
      <RightBg className="position-absolute end-0 top" />
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="loginContainer">
            <AuthLogo />
            <Card>
              <CardBody className="p-4 m-1">
                <h4 className="mb-0 fw-bold">Login</h4>
                <small className="pb-4 d-block">
                  Do not have an account? <Link to="/auth/registerformik">Sign Up</Link>
                </small>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleFormSubmit}
                  render={({ errors, touched }) => (
                    <Form>
                      <FormGroup>
                        <Label htmlFor="email">Email/Username</Label>
                        <Field
                          name="email"
                          type="text"
                          className={`form-control${
                            errors.email && touched.email ? ' is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <div className="position-relative">
                          <Field
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            className={`form-control${
                              errors.password && touched.password ? ' is-invalid' : ''
                            }`}
                          />
                          <span
                            className="position-absolute end-0 top-50 translate-middle-y cursor-pointer mx-2"
                            onClick={togglePasswordVisibility}
                          >
                            
                            {showPassword ? <i className="bi-eye"></i> : <i className="bi-eye-slash"></i>}
                          </span>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup className="form-check d-flex" inline>
                        <Label check>
                          <Input type="checkbox" />
                          Remember me
                        </Label>
                        <Link
                          className="ms-auto text-decoration-none link-info fw-normal"
                          to="/auth/forgotPwd"
                        >
                          <small>Forgot Pwd?</small>
                        </Link>
                      </FormGroup>
                      <FormGroup>
                        <Button type="submit" color="info" className="me-2">
                          Login
                        </Button>
                      </FormGroup>
                    </Form>
                  )}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginFormik;
