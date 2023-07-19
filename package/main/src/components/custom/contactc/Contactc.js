import React  from 'react';
import {
  Nav,
  NavItem,
} from 'reactstrap';

import Data from '../../../data/contacts/ContactsData';

export default function Contactc() {
    return(
  <Nav>
    {Data && Data.map((user) => (
        
      <NavItem  className="w-100 cursor-pointer  bg-light">
        <div className="d-flex align-items-center p-3 mb-1">
          <div>
            <img src={user.image} alt="user" className="rounded-circle" width="50" />
          </div>
          <div className="mx-2 flex-grow-1">
            <h5 className="mb-0 text-truncate" width="140px">
              {user.firstname}&nbsp;
              {user.lastname}
            </h5>
            <small>{user.department}</small>
          </div>
          <div className="d-flex flex-shrink-0">
            <i className="bi bi-star-fill mx-2" />
            <i className="bi bi-trash" />
          </div>
        </div>
      </NavItem>
    ))}
  </Nav>
    );
}
