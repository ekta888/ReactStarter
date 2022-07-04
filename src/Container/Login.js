import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const state = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => { 
  //   console.log(state)
  //   e.preventDefault();
  //   if (email && password) {
  //     if (state.email == email && state.pass == password) {
  //       dispatch(getLogin());
  //       history.push("/");
  //     } else {
  //       alert("Credentials did not match");
  //     }
  //   } else {
  //     alert("Wrong Credentials");
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      state.forEach((data) => {
        if (data.email == email && data.pass == password) {
          const logged_in_user = [email, password];
          dispatch(getLogin(logged_in_user));
          if (localStorage.getItem("token")) {
            history(`/home`);
            return true;
          }
        }
      })
    } else {
      alert("Wrong Credentials");
      return false;
    }
  };
  return (
    <section className="section bg-light">
      <div className="container ht-100 d-flex justify-content-center align-items-center">
        <div className="card p-2 shadow-lg d-flex card-width-300 justify-content-center align-items-center">
          <h3 className="mb-3">Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};
export default Login