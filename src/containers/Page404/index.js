import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Page from './../../components/Page';

export default () => (
  <Page headerTitle="404">
    <p>Page not found</p>
    <p>
      <Link to="/">Return to homepage</Link>
    </p>
  </Page>
);
