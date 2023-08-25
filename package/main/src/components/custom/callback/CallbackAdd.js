import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import '../../../assets/custom/general.css';

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
  Spinner,
} from 'reactstrap';
import { formatDateAndTime } from '../../../common/common';

export default function CallbackAdd(prop) {
  console.log("addprop",prop);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [comment,setComment] = useState();
  const [type,setType] = useState();
  const [dateTime,setDateTime] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const options = [
    { value: 'Callback', label: 'Callback' },
    { value: 'Email', label: 'Email' },
    { value: 'Whatsapp', label: 'WhatsApp' },
    { value: 'Escalation', label: 'Escalation' },
    { value: 'Other', label: 'Other Task' },
  ];
  const onSubmit = (data) => {
    setIsLoading(true);
    const apiUrl = `${process.env.REACT_APP_API_URL}/follow-up`;
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        'Content-Type': 'application/json'
      }
    };
    const dateData = data.dateTime?formatDateAndTime(data.dateTime):formatDateAndTime(dateTime);
    const requestBody = { 
      'lead_management_uuid':prop.callbackAddData.lead_management_uuid,
      'type':data.type.value?data.type.value:type,
      'date_time': `${dateData.date} ${dateData.time}`,
      //'date_time':"2023-08-01 00:00:00",      
      'user_uuid':prop.callbackAddData.user_uuid,
      'comment' :data.comment?data.comment:comment
     };
     console.log("requestbbbb",requestBody)
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
                  {isLoading ? <Spinner size="sm" color="success" className='mx-1 mt-1' /> : null}
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
