import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
// import { useNavigate } from 'react-router-dom';
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
  Spinner,
} from 'reactstrap';
// import * as Icon from 'react-feather';

export default function CallbackEdit(prop) {
  console.log('addprop', prop);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  // const navigate = useNavigate();
  //const [comment, setComment] = useState();
  //const [type, setType] = useState();
  //const [dateTime, setDateTime] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const options = [
    { value: 'Callback', label: 'Callback' },
    { value: 'Email', label: 'Email' },
    { value: 'Whatsapp', label: 'WhatsApp' },
    { value: 'Escalation', label: 'Escalation' },
    { value: 'Other', label: 'Other Task' },
  ];
  useEffect(() => {
    if (prop.editData) {
      console.log('editData:', prop.editData);
      setValue('comment', prop.editData.comment || '');
      const selectedType = prop.editData.type
        ? options.find((option) => option.value === prop.editData.type)
        : null;
      setValue('type', selectedType);
      setValue('dateTime', prop.editData.date_time || prop.dateTimeSearch);
    }
  }, [prop.editData, setValue, prop.dateTimeSearch, prop.typeSearch, options]);

  const onSubmit = (data) => {
    setIsLoading(true);
    const apiUrl = `${process.env.REACT_APP_API_URL}/follow-up/${prop.editData.follow_up_uuid
      }`;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        'Content-Type': 'application/json',
      },
    };
    const requestBody = {
      lead_management_uuid: prop.editData.lead_management_uuid,
      type: data.type.value ? data.type.value : type,
      date_time: data.dateTime ? data.dateTime : '', // Set the date_time value
      user_uuid: prop.editData.user_uuid,
      comment: data.comment ? data.comment : '', // Set the comment value
    };
    console.log('555requestBody', requestBody);
    axios
      .put(apiUrl, requestBody, config)
      .then((response) => {
        if (response.data.statusCode === 200) {
          console.log(response.data);
          toast.success(response.data.data, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          prop.onSuccess({ ...prop.editData, ...requestBody });
        }
        prop.closeEditFlag(true);
        //prop.onSuccess();
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  };
  const handleCancel = () => {
    prop.closeEditFlag(true);
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
                            className={errors.comment ? 'input-error' : ''}
                            {...field}
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
                          //onChange={(e) => setType(e.target.value)}
                          render={({ field }) => (
                            <Select
                              className={errors.type ? 'input-error col-md-12' : 'col-md-12'}
                              options={options}
                              {...field}
                            />
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
                          rules={{
                            required: 'Date & Time is required',
                          }}
                          render={({ field }) => (
                            <Input
                              className={errors.dateTime ? 'input-error' : ''}
                              type="datetime-local"
                              {...field}
                            />
                          )}
                        />
                      </InputGroup>
                      {errors.dateTime && (
                        <span className="text-danger">{errors.dateTime.message}</span>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <CardBody className="border-top gap-2 d-flex justify-content-center">
                  <Button type="submit" className="btn btn-success mr-2" >
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
