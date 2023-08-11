import React, { useState } from 'react';
import Select from 'react-select';
import {
  Button,
  Col,
  Container,
  Label,
  Row,
  Input,
  FormGroup,
  InputGroupText,
  InputGroup,
} from 'reactstrap';
import * as Icon from 'react-feather';
import '../../assets/custom/custom.css';
import { useSelector } from 'react-redux';

const digits = [
  { digit: '1' },
  { digit: '2', subDigit: 'ABC', class: null },
  { digit: '3', subDigit: 'DEF', class: null },
  { digit: '4', subDigit: 'GHI', class: null },
  { digit: '5', subDigit: 'JKL', class: null },
  { digit: '6', subDigit: 'MNO', class: null },
  { digit: '7', subDigit: 'PQRS', class: null },
  { digit: '8', subDigit: 'TUV', class: null },
  { digit: '9', subDigit: 'WXYZ', class: null },
  { digit: '*', subDigit: null, class: 'astrisk' },
  { digit: '0', subDigit: null, class: null },
  { digit: '#', subDigit: null, class: null },
];

export default function Dialpad() {
  const isMode = useSelector((state) => state.customizer.isDark);
  const classDisplay2 = isMode ? 'next3-dark-icon-container' : 'next3-icon-container';
  const classDisplay6 = isMode ? 'next6-dark-container' : 'next6-container';
  const classNextTop6Container = isMode ? 'next6-top-dark-container' : 'next6-topcontainer';
  const classDisplayLabel6 = isMode ? 'next6-dark-label-font' : 'next6-label-font';
  const classDisplaySipLabel6 = isMode ? 'next6-dark-sip-label-font' : 'next6-sip-label-font';
  const classDisplayPhoneLabel7 = isMode
    ? 'next7-dark-phonenumber-label-font'
    : 'next7-phonenumber-label-font';
  console.log('ismode---', isMode);
  const classDisplay12 = isMode ? 'next12-dark-container' : 'next12-container';
  const classDisplayLabelFont12 = isMode ? 'next12-dark-label-font' : 'next12-label-font';
  const [inputValue, setInputValue] = useState('');
  const [displayFlag, setDisplayFlag] = useState(12);
  const [isMutted, setIsMutted] = useState(false);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const handleDigitClick = (digit) => {
    setInputValue(inputValue + digit);
  };
  const handleReceive = (screenNumber) => {
    setDisplayFlag(screenNumber);
  };
  const handleMuteClick = () => {
    setIsMutted(!isMutted);
  };
  // const openDialPad = () => {
  //   setDisplayFlag(4);
  // };
  const handleSelect = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    // Perform desired action with the selected option
  };
  // const openTransferScreen = () => {
  //   setDisplayFlag(5);
  // }
  const handleBackScreen = (displayScreen) => {
    setDisplayFlag(displayScreen);
  };
  // const displayFlag = 1;
  return (
    <>
      {displayFlag !== 2 &&
        displayFlag !== 1 &&
        displayFlag !== 4 &&
        displayFlag !== 5 &&
        displayFlag !== 6 &&
        displayFlag !== 7 &&
        displayFlag !== 8 &&
        displayFlag !== 9 &&
        displayFlag !== 10 &&
        displayFlag !== 11 &&
        displayFlag !== 12 && (
          <div className="custom-dial-pad">
            <div className="pad">
              <div className="dial-pad">
                <div className="contact">
                  <div className="avatar"></div>
                  <div className="contact-buttons">
                    <Button className="icon-message"></Button>
                    <Button className="icon-video"></Button>
                  </div>
                </div>
                <div className="phoneString">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="rtl-input"
                  />
                </div>
                <div className="digits">
                  {digits.map((digitObj) => (
                    <div
                      key={digitObj.digit}
                      className={`dig ${digitObj.subDigit ? 'number-dig' : digitObj.class}`}
                      name={digitObj.digit}
                      onClick={() => handleDigitClick(digitObj.digit)}
                    >
                      {digitObj.digit}
                      {digitObj.subDigit && <div className="sub-dig">{digitObj.subDigit}</div>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="call-pad"></div>
              <div className="call action-dig">
                <span className="">
                  <Icon.Phone size={30} />
                </span>
              </div>
            </div>
          </div>
        )}
      {displayFlag === 1 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar-container">
              <div className="avatar">
                <div className="avatar-placeholder">HP</div>
              </div>
              <div className="calling-text">Calling...</div>
              <div className="next2-nametext">Harsh Patel</div>
              <div className="next2-numbertext">+91 992559592</div>

              {/* <div className="calling-text">
  Calling<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
</div> */}
            </div>

            <div className="d-flex justify-content-around">
              <Col sm="2" className="btn-pointer" onClick={() => handleReceive(2)}>
                <span className="next2-action-dig calling">
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </Col>
              <Col sm="2" className="btn-pointer">
                <span className="next2-action-dig hangup">
                  <Icon.PhoneOff size={40} color="#FFF" />
                </span>
              </Col>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 2 && (
        <div className="custom-dial-pad">
          <Container>
            <div className="pad">
              <div className="avatar-container">
                <div className="avatar">
                  <div className="avatar-placeholder">HP</div>
                </div>
                <div className="calling-text">Calling...</div>
                <div className="next3-nametext">Harsh Patel</div>
                {/* <div className="next2-numbertext">
    +91 992559592
    </div> */}
                <div className="next3-timetext">10:10:10</div>
              </div>
              <Container>
                <div className={`col-md-12 ${classDisplay2} shadow-none p-4`}>
                  <div className="d-flex">
                    <span className="btn-recording" data-tooltip="Recording">
                      <i className="bi bi-circle-fill icon-recording-custom" />
                    </span>
                    <span className="btn-recording" data-tooltip="Speaker">
                      <i className="bi bi-pause-fill icon-speaker-custom" />
                    </span>
                    <span
                      className="btn-recording"
                      data-tooltip="Transfer"
                      onClick={() => handleReceive(5)}
                    >
                      <i className="bi bi-arrow-down-up icon-transfer-custom" />
                    </span>
                    <span
                      className="btn-recording"
                      data-tooltip="DTMF"
                      onClick={() => handleReceive(4)}
                    >
                      <i className="bi bi-grid-3x3-gap-fill icon-dtmf-custom" />
                    </span>
                  </div>
                </div>
              </Container>
              <div className="d-flex justify-content-around next3-bottom-btn">
                <span>
                  <i className="bi bi-megaphone-fill" />
                </span>
                <div className="btn-pointer">
                  <span className="d-flex next3-action-dig hangup">
                    <Icon.PhoneOff size={40} color="#FFF" />
                  </span>
                </div>
                {isMutted ? (
                  <span onClick={handleMuteClick}>
                    <i className="bi bi-mic-mute-fill icon-speaker-custom" />
                  </span>
                ) : (
                  <span onClick={handleMuteClick}>
                    <i className="bi bi-mic-fill icon-mute-custom" />
                  </span>
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
      {displayFlag === 4 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            <div className="dial-pad dial4-pad">
              <div className="contact">
                <div className="avatar"></div>
                <div className="contact-buttons">
                  <Button className="icon-message"></Button>
                  <Button className="icon-video"></Button>
                </div>
              </div>
              <div className="phoneString4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="rtl-input"
                />
              </div>
              <div className="digits4">
                {digits.map((digitObj) => (
                  <div
                    key={digitObj.digit}
                    className={`dig ${digitObj.subDigit ? 'number-dig' : digitObj.class}`}
                    name={digitObj.digit}
                    onClick={() => handleDigitClick(digitObj.digit)}
                  >
                    {digitObj.digit}
                    {digitObj.subDigit && <div className="sub-dig">{digitObj.subDigit}</div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex next4-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next4-send">
                  <Icon.ChevronsUp size={40} color="#fff" />
                </span>
              </div>
              <div className="btn-pointer">
                <span className="next4-action-dig next4-back" onClick={() => handleBackScreen(2)}>
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 5 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            {/* <div className="next5-icon-container ">
              <div className="icon-box">
                <div className="row">
                  <div className="col-6">
                  <Icon.PhoneForwarded size={20} />
                  <div className='next5-font-size'>Queue Transfer</div>
                  </div>
                  <div className="col-6">
                  <Icon.UserCheck size={20} />
                  <div className='next5-font-size'>Agent Transfer</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                  <Icon.Repeat size={20} />
                  <div className='next5-font-size'>External Transfer</div>
                  </div>
                  <div className="col-6">
                  <i className="bi bi-diagram-3-fill icon-dtmf-custom" />
                  <div className='next5-font-size'>IVF Transfer</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                  <Icon.RefreshCw size={20} />
                  <div className='next5-font-size'>Ring Group</div>
                  </div>
                  <div className="col-6">
                  <Icon.ChevronsLeft size={20} />
                  <div className='next5-font-size'>Back</div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="next5-icon-container">
              <div className="row">
                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(9)}
                  >
                    <Icon.PhoneForwarded className="" />
                    <div className="next5-font-size">Queue Transfer</div>
                  </span>
                </div>
                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(6)}
                  >
                    <Icon.UserCheck className="" />
                    <div className="next5-font-size">Agent Transfer</div>
                  </span>
                </div>

                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(7)}
                  >
                    <Icon.Repeat className="" />
                    <div className="next5-font-size">External Transfer</div>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(8)}
                  >
                    <i className="bi bi-diagram-3-fill" />
                    <div className="next5-font-size">IVF Transfer</div>
                  </span>
                </div>
                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(10)}
                  >
                    <Icon.RefreshCw className="" />
                    <div className="next5-font-size">Ring Group</div>
                  </span>
                </div>
                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleBackScreen(2)}
                  >
                    <Icon.ChevronsLeft className="" />
                    <div className="next5-font-size">Back</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around next5-bottom-btn">
              <span>
                <i className="bi bi-megaphone-fill" />
              </span>
              <div className="btn-pointer">
                <span className="d-flex next3-action-dig hangup">
                  <Icon.PhoneOff size={40} color="#FFF" />
                </span>
              </div>
              {isMutted ? (
                <span onClick={handleMuteClick}>
                  <i className="bi bi-mic-mute-fill icon-speaker-custom" />
                </span>
              ) : (
                <span onClick={handleMuteClick}>
                  <i className="bi bi-mic-fill icon-mute-custom" />
                </span>
              )}
            </div>
          </div>
        </div>
      )}
      {displayFlag === 6 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            <div className={`${classNextTop6Container} shadow-lg p-2 mb-5  rounded`}>
              <div className="d-flex justify-content-center">
                <Label className={`${classDisplayLabel6}`}>Blind Transfer</Label>
                <div>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </Label>
                </div>
                <Label className={`${classDisplayLabel6}`}>Attended Transfer</Label>
              </div>
              <div>
                <div className="dropdown-container mt-3">
                  <Label className={` ${classDisplaySipLabel6}`}>Sip Devices</Label>
                  <Select
                    options={options}
                    isSearchable
                    onChange={handleSelect}
                    className="col-md-10 select-custom-color"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex next6-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next6-call">
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next4-back cust-tooltip"
                  data-tooltip="Back"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 7 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>

            <div className={`${classDisplay6} shadow-lg p-2 mb-5  rounded`}>
              <div className="d-flex justify-content-center">
                <Label className={`${classDisplayLabel6}`}>Blind Transfer</Label>
                <div>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </Label>
                </div>
                <Label className={`${classDisplayLabel6}`}>Attended Transfer</Label>
              </div>
              <div>
                <div className="dropdown-container">
                  <FormGroup>
                    <Row>
                      <Label sm="2" className={`${classDisplayPhoneLabel7}`}>
                        Enter Number
                      </Label>
                      <Col sm="10">
                        <InputGroup>
                          <InputGroupText>
                            <i className="bi bi-phone-vibrate-fill next7-phone-icon"></i>
                          </InputGroupText>
                          <Input type="text" placeholder="Phone Number" />
                        </InputGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="d-flex next6-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next6-call">
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next4-back cust-tooltip"
                  data-tooltip="Back"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 8 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            <div className={`${classDisplay6} shadow-lg p-2 mb-5  rounded`}>
              <div className=" mt-3 ">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className={`${classDisplayLabel6}`}>IVR Devices</Label>
                      <Select
                        options={options}
                        isSearchable
                        onChange={handleSelect}
                        className="col-md-12 select-custom-color"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="d-flex next8-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next6-call">
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next4-back cust-tooltip"
                  data-tooltip="Back"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 9 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>

            <div className={`${classDisplay6} shadow-lg p-2 mb-5  rounded`}>
              <div className="d-flex justify-content-center">
                <Label className={`${classDisplayLabel6}`}>Blind Transfer</Label>
                <div>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </Label>
                </div>
                <Label className={`${classDisplayLabel6}`}>Attended Transfer</Label>
              </div>
              <div>
                <div className="dropdown-container mt-3">
                  <Label className={`${classDisplaySipLabel6} col-md-2`}>Call Queue</Label>
                  <Select
                    options={options}
                    isSearchable
                    onChange={handleSelect}
                    className="col-lg-10 select-custom-color"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex next9-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next6-call">
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next4-back cust-tooltip"
                  data-tooltip="Back"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 10 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>

            <div className={`${classDisplay6} shadow-lg p-2 mb-5  rounded`}>
              <div className="d-flex justify-content-center">
                <Label className={`${classDisplayLabel6}`}>Blind Transfer</Label>
                <div>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </Label>
                </div>
                <Label className={`${classDisplayLabel6}`}>Attended Transfer</Label>
              </div>
              <div>
                <div className="dropdown-container mt-3">
                  <Label className={`${classDisplaySipLabel6} col-md-2`}>Ring Group</Label>
                  <Select
                    options={options}
                    isSearchable
                    onChange={handleSelect}
                    className="col-lg-10 select-custom-color"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex next9-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next6-call" onClick={() => handleReceive(11)}>
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next4-back cust-tooltip"
                  data-tooltip="Back"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 11 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            <div className="next5-icon-container ">
              <div className="row">
                <div className="col-4 next11-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(9)}
                  >
                    <Icon.PhoneOff className="" />
                    <div className="next5-font-size">Hang-up both lines</div>
                  </span>
                </div>
                <div className="col-4 next11-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(6)}
                  >
                    <i className="bi bi-grid-1x2" />
                    <div className="next5-font-size">Leave 3-way</div>
                  </span>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 next11-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(9)}
                  >
                    <Icon.PhoneIncoming className="" />
                    <div className="next5-font-size">Xfer line hangup</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around next5-bottom-btn">
              <span>
                <i className="bi bi-megaphone-fill" />
              </span>
              <div className="btn-pointer">
                <span className="d-flex next3-action-dig hangup cust-tooltip" data-tooltip="Hangup">
                  <Icon.PhoneOff size={40} color="#FFF" />
                </span>
              </div>
              {isMutted ? (
                <span onClick={handleMuteClick}>
                  <i className="bi bi-mic-mute-fill icon-speaker-custom" />
                </span>
              ) : (
                <span onClick={handleMuteClick}>
                  <i className="bi bi-mic-fill icon-mute-custom" />
                </span>
              )}
            </div>
          </div>
        </div>
      )}
      {displayFlag === 12 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            <div className={`${classDisplay12} shadow-lg p-2 mb-5  rounded`}>
              <div className="">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className={`${classDisplayLabelFont12}`}>Add Note</Label>
                      <Input type="textarea" rows="5" />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="d-flex next12-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next12-call cust-tooltip" data-tooltip="Submit">
                  <Icon.Check size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next12-back cust-tooltip"
                  data-tooltip="Cancle"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.X size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
