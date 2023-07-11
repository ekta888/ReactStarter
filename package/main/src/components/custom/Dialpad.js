import React from 'react';
import { Button } from 'reactstrap';
import * as Icon from 'react-feather'
 import "../../assets/custom/custom.css";

    export default function Dialpad() {
    console.log('Dialpad component rendered');
    return (  
      <div className="custom-dial-pad">
    <div className="pad">
      <div className="dial-pad">
        <div className="contact">
          <div className="avatar"></div>
          {/* <div className="contact-info">
            <div className="contact-name">Matt Sich</div>
            <div className="contact-position">CodePenner</div>
            <div className="contact-number">(123) 456 - 7890</div>
          </div> */}
          <div className="contact-buttons">
            <Button className="icon-message"></Button>
            <Button className="icon-video"></Button>
          </div>
        </div>
        <div className="phoneString">
          <input type="text"  className="rtl-input" />
        </div>
        <div className="digits">
          <div className="dig pound number-dig" name="1">
            1
          </div>
          <div className="dig number-dig" name="2">
            2<div className="sub-dig">ABC</div>
          </div>
          <div className="dig number-dig" name="3">
            3<div className="sub-dig">DEF</div>
          </div>
          <div className="dig number-dig" name="4">
            4<div className="sub-dig">GHI</div>
          </div>
          <div className="dig number-dig" name="5">
            5<div className="sub-dig">JKL</div>
          </div>
          <div className="dig number-dig" name="6">
            6<div className="sub-dig">MNO</div>
          </div>
          <div className="dig number-dig" name="7">
            7<div className="sub-dig">PQRS</div>
          </div>
          <div className="dig number-dig" name="8">
            8<div className="sub-dig">TUV</div>
          </div>
          <div className="dig number-dig" name="9">
            9<div className="sub-dig">WXYZ</div>
          </div>
          <div className="dig number-dig astrisk" name="*">
            *
          </div>
          <div className="dig number-dig pound" name="0">
            0
          </div>
          <div className="dig number-dig pound" name="#">
            #
          </div>
        </div>
        {/* <div className="digits">
          <div className="dig addPerson action-dig"></div>
          <div className="call-icon"></div>
          <div className="dig goBack action-dig"></div>
        </div> */}
      </div>
      <div className="call-pad">
        
      </div>

      {/* <div className="call action-dig">
        <div className="call-change">
          <span></span>
        </div>
       
      </div> */}
      <div className="call action-dig"><span className=""><Icon.Phone size={30} /></span></div>
    </div>
    </div>
  );
}
