import { Col, Row } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import SalesCard from '../../components/dashboard/dash6/sales-card/SalesCard';
import CardBandwidth from '../../components/dashboard/dash6/card-bandwidth/CardBandwidth';
import CardDownload from '../../components/dashboard/dash6/card-download/CardDownload';
import Notifications from '../../components/dashboard/dash6/notifications/Notifications';
import TopSales from '../../components/dashboard/dash6/top-sales/TopSales';
import TopEarning from '../../components/dashboard/dash6/top-earning/TopEarning';
import Timeline from '../../components/dashboard/dash4/timeline/Timeline';
import RecentChat from '../../components/dashboard/dash4/recent-chat/RecentChat';

const Dashboard5 = () => {
  return (
    <>
      <BreadCrumbs />
      <SalesCard />
      <Row>
        <Col lg="6">
          <CardBandwidth />
          <CardDownload />
        </Col>
        <Col lg="6">
          <Notifications />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <TopSales />
        </Col>
        <Col lg="6">
          <TopEarning />
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

export default Dashboard5;
