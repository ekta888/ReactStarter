import React,{useEffect} from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomHeader from "components/Custom/CustomHeader";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";

export default function EmailVerification() {
  const history = useHistory();
  useEffect(() => {}, []);

  const handleButtonClick = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("token");
    console.log(searchParams.get("token"));
    console.log(token);
    axios
      .post("/resend-email", { token })
      .then((response) => {
        console.log(response);
        if (response.data.status === 400) {
          toast.error(response.data.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((error) => {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  return (
    <Container fluid className="register">
      <CustomHeader />
      <ToastContainer />
      <Row className="justify-content-center">
        <Col md="6" className="mt-5">
          <Card className="">
            <div className="bg-white border-bottom">
              <div className="d-flex justify-content-center">
                <div className="">
                  <h4 className="font-weight-bold">Verify Email</h4>
                </div>
              </div>
            </div>

            <Card.Body>
              <Row className="justify-content-center">
                <Col md="12" className="">
                  <div className="ml-3">
                    <h3 className="">Hi there 👋</h3>
                    <h4 className="font-weight-bold m-0">
                      Welcome to Our Website!
                    </h4>
                    <p>
                      Thank you for registering. To complete your registration,
                      please click the link you recevied in mail.
                    </p>

                    <p>
                      If you not recevie any mail than please check your spam
                      folder.
                    </p>

                    <p>
                      You can also contact to our support team by{" "}
                      <a href="" className="text-primary">
                        Clicking here
                      </a>
                    </p>

                    <button
                      className="text-uppercase btn-fill btn-dark btn-sm mb-2"
                      type="button"
                      onClick={handleButtonClick}
                    >
                      Resend Email
                    </button>

                    <p>Thank you,</p>
                    <p>Happy To Help</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
