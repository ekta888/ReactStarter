import { Col, Row } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import SparklineCards from '../../components/dashboard/dash4/sparkline-cards/SparklineCards';
import ProductMonthlySales from '../../components/dashboard/dash4/product-monthly-sales/ProductMonthlySales';
import MonthlyEarnings from '../../components/dashboard/dash4/monthly-earnings/MonthlyEarnings';
import RecentComments from '../../components/dashboard/dash2/recent-comments/RecentComments';
import RecentSales from '../../components/dashboard/dash2/recent-sales/RecentSales';
import TaskList from '../../components/dashboard/dash1/todo-list/TaskList';
import ManageUsers from '../../components/dashboard/dash1/manage-users/ManageUsers';
import Timeline from '../../components/dashboard/dash4/timeline/Timeline';
import RecentChat from '../../components/dashboard/dash4/recent-chat/RecentChat';

const Dashboard4 = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col lg="12">
          <SparklineCards />
        </Col>
      </Row>
      <Row>
        <Col lg="8">
          <ProductMonthlySales />
        </Col>
        <Col lg="4">
          <MonthlyEarnings />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <RecentSales />
        </Col>
        <Col lg="6">
          <RecentComments />
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <TaskList />
        </Col>
        <Col lg="8">
          <ManageUsers />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Timeline />
        </Col>
        <Col lg="6">
          <RecentChat />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard4;
