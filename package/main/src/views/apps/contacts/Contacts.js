import { Card, CardBody } from 'reactstrap';
import ContactList from '../../../components/apps/contact/ContactList';
import ContactSearch from '../../../components/apps/contact/ContactSerch';
import ContactDetails from '../../../components/apps/contact/ContactDetails';
//import ThreeColumn from '../../../components/threeColumn/ThreeColumn';
import TwoColumn from '../../../components/twoColumn/TwoColumn';
//import ContactFilter from '../../../components/apps/contact/ContactFilter';

const Contacts = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn
          // leftContent={<ContactFilter />}
          // middleContent={
          //   <>
          //     <ContactSearch />
          //     <ContactList />
          //   </>
          // }
          // rightContent={<ContactDetails />}
          leftContent={ 
            <>
              <ContactSearch />
              <ContactList />
            </>
          }
          rightContent={
            <>
              <ContactDetails />
            </>
          }
        />
      </CardBody>
    </Card>
  );
};

export default Contacts;
