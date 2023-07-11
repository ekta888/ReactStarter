import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import SimpleBar from 'simplebar-react';
import DashCard from '../../dashboardCards/DashCard';

const FeedData = [
  {
    title: 'Cras justo odio',
    icon: 'bi bi-bell',
    color: 'primary',
    date: 'Just Now',
    id: 1,
  },
  {
    title: 'New user registered.',
    icon: 'bi bi-person',
    color: 'info',
    date: '2 minute ago',
    id: 2,
  },
  {
    title: 'Server #1 overloaded.',
    icon: 'bi bi-hdd',
    color: 'danger',
    date: '1 week ago',
    id: 3,
  },
  {
    title: 'New order received.',
    icon: 'bi bi-bag-check',
    color: 'success',
    date: '2 weeks ago',
    id: 4,
  },
  {
    title: 'Cras justo odio',
    icon: 'bi bi-bell',
    color: 'dark',
    date: '2 weeks ago',
    id: 5,
  },
  {
    title: 'Server #1 overloaded.',
    icon: 'bi bi-hdd',
    color: 'warning',
    date: '2 weeks ago',
    id: 6,
  },
  {
    title: 'Cras justo odio',
    icon: 'bi bi-bell',
    color: 'primary',
    date: 'Just Now',
    id: 7,
  },
  {
    title: 'New user registered.',
    icon: 'bi bi-person',
    color: 'info',
    date: '2 minute ago',
    id: 8,
  },
  {
    title: 'Server #1 overloaded.',
    icon: 'bi bi-hdd',
    color: 'danger',
    date: '1 week ago',
    id: 9,
  },
];

const Feeds = () => {
  return (
    <DashCard title="Feeds" subtitle="The widgets you can use">
      <SimpleBar style={{ height: '450px' }}>
        <ListGroup flush>
          {FeedData.map((feed) => (
            <ListGroupItem
              key={feed.id}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center py-2 my-1 border-0"
            >
              <Button
                className="rounded-circle me-3 circle-box d-flex align-items-center justify-content-center"
                size="sm"
                color={feed.color}
              >
                <i className={`fs-5 ${feed.icon}`} />
              </Button>
              <h6 className="mb-0">{feed.title}</h6>
              <small className="ms-auto text-muted text-small">{feed.date}</small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </SimpleBar>
    </DashCard>
  );
};

export default Feeds;
