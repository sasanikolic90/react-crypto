/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import MarketTable from 'components/MarketTable';
import LiquidityChart from 'components/LiquidityChart';

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {}

  render() {
    return (
      <div>
        <article>
          <Helmet>
            <title>Home Page</title>
            <meta name="description" content="Home page of crypto compare" />
          </Helmet>
        </article>
        <Switch>
          <Route exact path="/" component={MarketTable} />
          <Route exact path="/liquidity" component={LiquidityChart} />
        </Switch>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default HomePage;
