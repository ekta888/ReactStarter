import { Row, Col } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ProgressCard from '../../components/dashboard/dash3/progress-cards/ProgressCards';
import CountryVisit from '../../components/dashboard/dash3/country-visit/CountryVisit';
import TrafficCard from '../../components/dashboard/dash3/traffic-card/TrafficCard';
import VisitCountries from '../../components/dashboard/dash3/visit-countries/VisitCountries';
import WeatherCard from '../../components/dashboard/dash3/weather-card/WeatherCard';
import SalesCard from '../../components/dashboard/dash3/sales-card/SalesCard';
import CarouselWidget from '../../components/dashboard/dash3/carousel-widget/CarouselWidget';
import ManageUsers from '../../components/dashboard/dash1/manage-users/ManageUsers';

const Dashboard3 = () => {
  return (
    <>
      <BreadCrumbs />
      <ProgressCard />
      <Row>
        <Col lg="6">
          <CountryVisit />
        </Col>
        <Col lg="6">
          <TrafficCard />
        </Col>
      </Row>

      <Row>
        <Col lg="4">
          <VisitCountries />
        </Col>
        <Col lg="8">
          <WeatherCard />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <SalesCard />
        </Col>
        <Col lg="6">
          <CarouselWidget />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <ManageUsers />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard3;
