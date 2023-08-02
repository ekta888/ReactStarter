import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav, NavItem } from 'reactstrap';
import user2 from '../../../assets/images/users/user2.jpg';

// import Data from '../../../data/contacts/ContactsData';

export default function Contactc() {
  const [listData, setListData] = useState();
  console.log('process.env.AUTH_TOKEN', process.env.REACT_APP_AUTH_TOKEN);
  const authToken = process.env.REACT_APP_AUTH_TOKEN;
  useEffect(() => {
    axios
      .get(`https://13.48.1.228:5000/lead-management?page=1&limit=10`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          setListData(response.data.data);
          console.log('+++++', response.data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);
  return (
    <Nav>
      {listData &&
        listData.map((user) => (
          <NavItem className="w-100 cursor-pointer  bg-light">
            <div className="d-flex align-items-center p-3 mb-1">
              <div>
                <img src={user2} alt="user" className="rounded-circle" width="50" />
              </div>
              <div className="mx-2 flex-grow-1">
                <h5 className="mb-0 text-truncate" width="140px">
                  {user.first_name}&nbsp;
                  {user.last_name}
                </h5>
                <small>{user.phone_number}</small>
              </div>
              <div className="d-flex flex-shrink-0">
              <i className="bi bi-pencil-square" />
                <i className="bi bi-trash" />
              </div>
            </div>
          </NavItem>
        ))}
    </Nav>
  );
}
