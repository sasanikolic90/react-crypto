/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LiquidityChart from 'components/LiquidityChart';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Crypto compare"
        defaultTitle="React.js Crypto compare app"
      >
        <meta
          name="description"
          content="A React.js app that compares cryptos"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/liquidity" component={LiquidityChart} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
