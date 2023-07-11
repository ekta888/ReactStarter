import { Col, Row } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import TopCards from '../../components/dashboard/dash1/topCards/TopCards';
import ProductYearlySales from '../../components/dashboard/dash1/product-yearly-sales/ProductYearlySales';
import SalesWeek from '../../components/dashboard/dash1/sales-week/SalesWeek';
import SelectUser from '../../components/dashboard/dash1/select-user/SelectUser';
import BalanceCard from '../../components/dashboard/dash1/balance-card/BalanceCard';
import ManageUsers from '../../components/dashboard/dash1/manage-users/ManageUsers';
import CalendarApp from '../apps/calendar/CalendarApp';
import TaskList from '../../components/dashboard/dash1/todo-list/TaskList';
import Feeds from '../../components/dashboard/dash1/feeds/Feeds';
import PostCard from '../../components/dashboard/dash1/post-card/PostCard';

const Dashboard1 = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col lg="12">
          <TopCards />
        </Col>
      </Row>

      <Row>
        <Col lg="8">
          <ProductYearlySales />
        </Col>
        <Col lg="4">
          <SalesWeek />
        </Col>
      </Row>

      <Row>
        <Col lg="8">
          <SelectUser />
        </Col>
        <Col lg="4">
          <BalanceCard />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <ManageUsers />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <TaskList />
        </Col>
        <Col lg="6">
          <Feeds />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <CalendarApp />
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <PostCard />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard1;
