import React, { useState } from 'react';
import Select from 'react-select';
import { Button, Col, Container, Label } from 'reactstrap';
import * as Icon from 'react-feather';
import '../../assets/custom/custom.css';

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
  const [inputValue, setInputValue] = useState('');
  const [displayFlag, setDisplayFlag] = useState(1);
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
        displayFlag !== 7 && (
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
                <div className="col-md-12 next3-icon-container shadow-none p-4">
                  <div className="d-flex">
                    <span className="btn-recording">
                      <i className="bi bi-circle-fill icon-recording-custom" />
                    </span>
                    <span className="btn-recording ">
                      <i className="bi bi-pause-fill icon-speaker-custom" />
                    </span>
                    <span className="btn-recording" onClick={() => handleReceive(5)}>
                      <i className="bi bi-arrow-down-up icon-transfer-custom" />
                    </span>
                    <span className="btn-recording" onClick={() => handleReceive(4)}>
                      <i className="bi bi-menu-down icon-dtmf-custom" />
                    </span>
                  </div>
                </div>
              </Container>
              <div className="d-flex justify-content-around next3-bottom-btn">
                <span>
                  <i className="bi bi-megaphone icon-dtmf-custom" />
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
            <div className="next5-icon-container ">
              <div className="row">
                <div className="col-2 next5-icon-size btn-pointer">
                  <span className="shadow p-1 mb-3 bg-white rounded next5-display-icon">
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
                  <span className="shadow p-1 mb-3 bg-white rounded next5-display-icon">
                    <i className="bi bi-diagram-3-fill" />
                    <div className="next5-font-size">IVF Transfer</div>
                  </span>
                </div>
                <div className="col-2 next5-icon-size btn-pointer">
                  <span className="shadow p-1 mb-3 bg-white rounded next5-display-icon">
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
                <i className="bi bi-megaphone " />
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

            <div className="next6-container shadow-lg p-2 mb-5  rounded">
              <div className="d-flex justify-content-center">
                <Label className="next6-label-font">Blind Transfer</Label>
                <div>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </Label>
                </div>
                <Label className="next6-label-font">Attended Transfer</Label>
              </div>
              <div>
                <div className="dropdown-container mt-3">
                  <Label className="next6-sip-label-font col-md-4">Sip Devices</Label>
                  <Select
                    options={options}
                    isSearchable
                    onChange={handleSelect}
                    className="col-md-8"
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
                <span className="next4-action-dig next4-back" onClick={() => handleBackScreen(5)}>
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

            <div className="next6-container shadow-lg p-2 mb-5  rounded">
              <div className="d-flex justify-content-center">
                <Label className="next6-label-font">Blind Transfer</Label>
                <div>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </Label>
                </div>
                <Label className="next6-label-font">Attended Transfer</Label>
              </div>
              <div>
                <div className="dropdown-container">
                <Label className="next6-sip-label-font">Enter Number</Label>
                
                {/* <Col md="6">
                <Form>
                  <FormGroup>
                  <Label className="next6-sip-label-font">Enter Number</Label>
                  <InputGroup>
                  <InputGroupText>
                    <i className="bi bi-person"></i>
                  </InputGroupText>

                  <Input type="text" placeholder="Phone Number" />
                </InputGroup>
              </FormGroup>
                </Form>
                </Col> */}
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
                <span className="next4-action-dig next4-back" onClick={() => handleBackScreen(5)}>
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
