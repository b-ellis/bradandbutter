import React from 'react'
import styled from 'styled-components';

const NotFoundPage = () => (
  <NotFoundWrapper>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </NotFoundWrapper>
)

const NotFoundWrapper = styled.div`
height: 70.85vh;
`;

export default NotFoundPage
