import React from 'react';
import { Row, Col } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';

import Profile from '../../components/widgets/Profile';
import Blog from '../../components/widgets/Blog';
import Feeds from '../../components/dashboard/dash1/feeds/Feeds';
import MyContact from '../../components/widgets/MyContact';
import RecentComments from '../../components/dashboard/dash2/recent-comments/RecentComments';
import TaskList from '../../components/dashboard/dash1/todo-list/TaskList';
import RecentChat from '../../components/dashboard/dash2/recent-chat/RecentChat';
import BrowseStats from '../../components/widgets/BrowseStats';

const Widgets = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col xs="12" lg="4">
          <Blog />
          <Profile />
          <Feeds />
          <MyContact />
        </Col>
        <Col xs="12" lg="4">
          <RecentComments />
          <TaskList />
        </Col>
        <Col xs="12" lg="4">
          <RecentChat />
          <BrowseStats />
        </Col>
      </Row>
    </>
  );
};

export default Widgets;
