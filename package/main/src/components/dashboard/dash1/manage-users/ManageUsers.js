import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import 'react-table-v6/react-table.css';
import ReactTable from 'react-table-v6';
import DashCard from '../../dashboardCards/DashCard';
import * as data from './ManageUserData';

const ManageUsers = () => {
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({});
  const [jsonData, setJsonData] = useState(data.dataTable);

  const toggle = () => {
    setModal(!modal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = event.target.id.value;
    const name = event.target.name.value;
    const designation = event.target.designation.value;
    const location = event.target.location.value;
    const age = event.target.age.value;
    const newObj = JSON.parse(JSON.stringify(jsonData));
    newObj[id] = [name, designation, location, age];
    setJsonData(newObj);
    setModal(!modal);
  };

  const data2 = jsonData.map((prop, key) => {
    return {
      id: key,
      name: prop[0],
      designation: prop[1],
      location: prop[2],
      age: prop[3],
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              const sobj = data2.find((o) => o.id === key);
              setModal(!modal);
              setObj(sobj);
            }}
            color="info"
            outline
            size="sm"
            round="true"
            icon="true"
            className="me-2"
          >
            <i className="bi bi-pen" />
          </Button>
        </div>
      ),
    };
  });
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <DashCard title="Manage Users" subtitle="You can edit user as well">
      <Modal isOpen={modal} toggle={toggle.bind(null)}>
        <ModalHeader toggle={toggle.bind(null)}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" defaultValue={obj.name} />
            </FormGroup>
            <FormGroup>
              <Label for="designation">Designation</Label>
              <Input
                type="text"
                name="designation"
                id="designation"
                defaultValue={obj.designation}
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input type="text" name="location" id="location" defaultValue={obj.location} />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input type="text" name="age" id="age" defaultValue={obj.age} />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>
              <Button color="secondary" className="ms-1" onClick={toggle.bind(null)}>
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      <ReactTable
        columns={[
          {
            Header: 'FirstName',
            accessor: 'name',
          },
          {
            Header: 'Designation',
            accessor: 'designation',
          },
          {
            Header: 'Location',
            accessor: 'location',
          },
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Actions',
            accessor: 'actions',
            sortable: false,
            filterable: false,
          },
        ]}
        defaultPageSize={8}
        showPaginationBottom
        className="-striped -highlight"
        data={data2}
        filterable
      />
    </DashCard>
  );
};

export default ManageUsers;
