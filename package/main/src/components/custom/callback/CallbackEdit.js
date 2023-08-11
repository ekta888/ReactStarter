import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
} from 'reactstrap';
  // import * as Icon from 'react-feather';

export default function CallbackEdit (prop) {
  console.log("addprop",prop);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [comment,setComment] = useState();
  const [type,setType] = useState();
  const [dateTime,setDateTime] = useState();
  const options = [
    { value: 'callback', label: 'Callback' },
    { value: 'email', label: 'Email' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'escalation', label: 'Escalation' },
    { value: 'othertask', label: 'Other Task' },
  ];
  const onSubmit = (data) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/follow-up`;
    const config = {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        'Content-Type': 'application/json'
      }
    };
    const requestBody = { 
      'lead_management_uuid':prop.callbackAddData.lead_management_uuid,
      'type':data.type.value?data.type.value:type,
      'date_time':data.dateTime?data.dateTime:dateTime,
      //'date_time':"2023-08-01 00:00:00",      
      'user_uuid':prop.callbackAddData.user_uuid,
      'comment' :data.comment?data.comment:comment
     };
     
    axios.post(apiUrl, requestBody, config)
      .then(response => {
        if(response.data.statusCode === 201){
          console.log(response.data);
          toast.success(response.data.data, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        prop.closeCallbackAddModal(true);       
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });
  };
  const handleCancel = () => {
    prop.closeCallbackAddModal(true);
  };

  return (
    <>
    <ToastContainer />
     <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <FormGroup>
                    <Label>Type your Comment</Label>
                    <InputGroup>
                      <Controller
                        name="comment"
                        control={control}
                        rules={{ required: 'Comment is required' }}
                        render={({ field }) => (
                          <Input
                            type="textarea"
                            rows="5"
                            name="Type your Comment"
                            placeholder="Test..........!!"
                            onChange={(e) => setComment(e.target.value)}
                            className={errors.comment ? 'input-error' : ''}
                            {...field}
                            //  onChange={handleInputChange}
                          />
                        )}
                      />
                    </InputGroup>
                    {errors.comment && (
                      <span className="text-danger">{errors.comment.message}</span>
                    )}
                  </FormGroup>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Types</Label>
                      <InputGroup>
                        <Controller
                          name="type" 
                          control={control}
                          rules={{ required: 'Type is required' }} 
                          onChange={(e) => setType(e.target.value)}
                          render={({ field }) => (
                            <Select  className={errors.type ? 'input-error col-md-12' : 'col-md-12'} options={options} {...field} />
                          )}
                        />
                      </InputGroup>
                      {errors.type && <span className="text-danger">{errors.type.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Date & Time</Label>
                      <InputGroup>
                        <Controller
                          name="dateTime" 
                          control={control}
                          rules={{ required: 'Date & Time is required' }} 
                          onChange={(e) => setDateTime(e.target.value)}
                          render={({ field }) => <Input className={errors.dateTime ? 'input-error' : ''} type="datetime-local" {...field} />}
                          
                        />
                      </InputGroup>
                      {errors.dateTime && <span className="text-danger">{errors.dateTime.message}</span>}
                    </FormGroup>
                  </Col>
                </Row>
                <CardBody className="border-top gap-2 d-flex justify-content-center">
                  <Button type="submit" className="btn btn-success mr-2">
                    Save Changes
                  </Button>
                  <Button type="button" className="btn btn-dark" onClick={handleCancel}>
                    Cancel
                  </Button>
                </CardBody>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}