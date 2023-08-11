import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import DatePicker from 'react-datetime';
import './picker.scss';
import 'react-datetime/css/react-datetime.css';

const DateCalendar = () => {
  const startDate = new Date();
  const endDate = null;

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const state = {
    curTime: new Date().getDate(),
    // curDay: new Date().getDay(),
    curDay: new Date().getDay(),
    curYear: new Date().getFullYear(),
    curMonth: new Date().getMonth(),
  };
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card className="w-100">
      <Row className="h-100">
        <Col md={4}>
          <CardBody className="h-100">
            <span className="display-6">
              <span className="font-normal">{state.curTime}</span>
            </span>
            <h4 className="pb-2 mb-0">{dayNames[state.curDay]}</h4>
            <div className="bg-success w-75 my-3" style={{ height: '3px' }}></div>
            <span className="d-block">
              {monthNames[state.curMonth]} {state.curYear}
            </span>
          </CardBody>
        </Col>
        <Col md={8}>
          <div className="bg-primary rounded-end text-white calendar-widget h-100">
            <DatePicker
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              open
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default DateCalendar;
