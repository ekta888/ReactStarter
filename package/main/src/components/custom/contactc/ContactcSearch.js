import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'reactstrap';

const ContactcSearch = (prop) => {
 // const [searchText, setSearchText] = useState('');
  const handleSearch = async (e) => {
    const searchValue = e.target.value;
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/lead-management?list=all&search=${encodeURIComponent(
          searchValue
        )}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`, // Add the token to the headers
          },
        }
      );
      console.log("response*******",response.data);
      prop.onSearchResults(response.data);
    //  setSearchText(searchValue);
      //setSearchResults(response.data); // Assuming the API returns an array of results
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-3 border-bottom d-flex">
      <span className='d-xs-block d-xl-none'> <Button close className=" me-2" /></span>
      <Form className="flex-grow-1">
        <Input
          className="form-control mb-2"
          id="searchUser"
          name="searchUser"
          type="text"
          onChange={handleSearch}
          placeholder="Search Contact..."
        />
      </Form>
    </div>
  );
};

export default ContactcSearch;