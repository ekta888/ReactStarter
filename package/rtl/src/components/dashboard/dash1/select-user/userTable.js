import { useState } from 'react';
import { Table, Input } from 'reactstrap';
import user1 from '../../../../assets/images/users/user1.jpg';
import user2 from '../../../../assets/images/users/user2.jpg';
import user3 from '../../../../assets/images/users/user3.jpg';
import user4 from '../../../../assets/images/users/user4.jpg';
import user5 from '../../../../assets/images/users/user5.jpg';

const tableData = [
  {
    isActive: 'active',
    avatar: user1,
    name: 'Hanna Gover',
    post: 'Web Designer',
    project: 'Flexy React',
    status: 'Low',
  },
  {
    isActive: '',
    avatar: user2,
    name: 'Daniel Kristeen',
    post: 'Project Manager',
    project: 'Lading pro React',
    status: 'Medium',
  },
  {
    isActive: '',
    avatar: user3,
    name: 'Julian Josephs',
    post: 'Developer',
    project: 'Elite React',
    status: 'High',
  },
  {
    isActive: '',
    avatar: user4,
    name: 'Jan Petrovic',
    post: 'Frontend Eng',
    project: 'Flexy React',
    status: 'Low',
  },
  {
    isActive: '',
    avatar: user5,
    name: 'Steve Gover',
    post: 'Content Writer',
    project: 'Ample React',
    status: 'Medium',
  },
  {
    isActive: '',
    avatar: user1,
    name: 'Johnathan',
    post: 'Graphic',
    project: 'Monster React',
    status: 'Low',
  },
  {
    isActive: '',
    avatar: user5,
    name: 'John Gover',
    post: 'Ethical Hacker',
    project: 'Lading pro React',
    status: 'High',
  },
];

const UserTable = () => {
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    let result = [];
    result = tableData.filter((data) => {
      const name = data.name.toLocaleLowerCase();
      return name.search(value) !== -1;
    });
    setFilteredData(result);
  };

  return (
    <div>
      <div className="table-responsive">
        <Input type="text" placeholder="Search User" onChange={(event) => handleSearch(event)} />
        <Table className="text-nowrap mb-2 mt-3 align-middle" bordered>
          <thead>
            <tr>
              <th>Users</th>
              <th>Product</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((tdata) => (
              <tr key={tdata.name} className={`border-top ${tdata.isActive}`}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={tdata.avatar}
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0 fw-normal">{tdata.name}</h6>
                      <span className="text-muted fs-7">{tdata.post}</span>
                    </div>
                  </div>
                </td>
                <td>{tdata.project}</td>
                <td>
                  {tdata.status === 'Low' ? (
                    <span className="badge bg-danger rounded-pill text-dark-white d-inline-block fw-bold">
                      {tdata.status}
                    </span>
                  ) : tdata.status === 'Medium' ? (
                    <span className="badge bg-primary rounded-pill text-dark-white d-inline-block fw-bold">
                      {tdata.status}
                    </span>
                  ) : (
                    <span className="badge bg-success rounded-pill text-dark-white d-inline-block fw-bold">
                      {tdata.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserTable;
