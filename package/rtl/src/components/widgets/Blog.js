import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import bg1 from '../../assets/images/bg/bg1.jpg';

const Blog = ({ title, subtitle, text, color }) => {
  return (
    <Card>
       <img alt="Card cap"src={bg1}  width="100%"/>
      <CardBody className="p-4">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText className="mt-3">{text}</CardText>
        <Button color={color}>Read More</Button>
      </CardBody>
    </Card>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.any,
  color: PropTypes.any,
};

export default Blog;
