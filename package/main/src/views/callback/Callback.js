import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, Table, Modal, ModalHeader } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Icon from 'react-feather';
//import user1 from '../../assets/images/users/user1.jpg';
import CallbackEdit from '../../components/custom/callback/CallbackEdit';
import Pagination from '../../components/custom/PaginationC';

export default function Callback() {
  const [callbackEditModal, setCallbackEditModal] = useState(false);
  const [listData,setListData] = useState();
  const modelCallbackEditToggle = () => {
    setCallbackEditModal(!callbackEditModal);
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/follow-up?page=1&limit=10`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          setListData(response.data.data);
          toast.success(response.data.data, {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log(listData);
          console.log('+++++', response.data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);
//   const tableData = [
//     {
//       date: '2023-08-04 17:00:00',
//       avatar: user1,
//       name: 'Hanna Gover',
//       project: '9265032020',
//       Type: 'hey',
//     },
//   ];
  return (
    <>
      <Modal isOpen={callbackEditModal} toggle={modelCallbackEditToggle} size="md">
        <ModalHeader toggle={modelCallbackEditToggle}>CallbackEdit</ModalHeader>
        <CallbackEdit onClick={modelCallbackEditToggle} />
      </Modal>
      <div>
      <ToastContainer />
        <Card>
          <CardBody>
            <CardTitle tag="h5">Callback Listing</CardTitle>
            {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
              Overview of the projects
            </CardSubtitle> */}

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Contact Name</th>
                  <th>Contact Number</th>

                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {listData && listData.map((tdata) => (
                  <tr  className="border-top">
                    <td>
                      <td>{tdata.date_time}</td>
                    </td>
                    <td>
                      <div className="d-flex align-items-center p-2">
                          
                          <div className="ms-3">
                          <h6 className="mb-0">{tdata.lead_details[0].first_name}</h6>
                         
                        </div>
                      </div>
                    </td>
                    <td> <span className="text-muted">{tdata.lead_details[0].phone_number}</span></td>
                    <td>{tdata.type}</td>
                    <td>
                      <div>
                        <span onClick={modelCallbackEditToggle} className="mx-1">
                          <Icon.Edit callEditData={tdata} className="text-primary" size={18} />
                        </span>
                        <span className="mx-1">
                          <Icon.Trash2 className="text-danger" size={18} />
                        </span>
                        <span className="mx-1">
                          <Icon.Phone className="text-success" size={18} />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="row">
              <div className="col">
                <Pagination />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
