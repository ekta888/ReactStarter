import { Col, Row } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import TotalIncome from '../../components/dashboard/dash2/total-income/TotalIncome';
import YearlySales from '../../components/dashboard/dash2/yearly-sales/YearlySales';
import MonthlySales from '../../components/dashboard/dash2/monthly-sales/MonthlySales';
import Expance from '../../components/dashboard/dash5/expance/Expance';
import TotalSales from '../../components/dashboard/dash2/total-sales/TotalSales';
import DateCalendar from '../../components/dashboard/dash2/date-calendar/DateCalendar';
import ProfileCard from '../../components/dashboard/dash2/profile/ProfileCard';
import MonthlyUsage from '../../components/dashboard/dash2/monthly-usage/MonthlyUsage';
import WeeklyUsage from '../../components/dashboard/dash2/weekly-usage/WeeklyUsage';
import RecentSales from '../../components/dashboard/dash2/recent-sales/RecentSales';
import RecentComments from '../../components/dashboard/dash2/recent-comments/RecentComments';
import Finanace from '../../components/dashboard/dash2/finance/Finance';
import RecentChat from '../../components/dashboard/dash2/recent-chat/RecentChat';

const Dashboard5 = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col lg="4">
          <TotalIncome />
        </Col>
        <Col lg="4">
          <YearlySales />
        </Col>
        <Col lg="4">
          <MonthlySales />
        </Col>
      </Row>

      <Row>
        <Col lg="8">
          <Expance />
        </Col>
        <Col lg="4">
          <TotalSales />
        </Col>
      </Row>

      <Row>
        <Col lg="4">
          <Finanace />
        </Col>
        <Col lg="8">
          <DateCalendar />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <WeeklyUsage />
        </Col>
        <Col lg="6">
          <MonthlyUsage />
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
          <ProfileCard />
        </Col>
        <Col lg="8">
          <RecentChat />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard5;
