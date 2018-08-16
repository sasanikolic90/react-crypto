/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Row, Col, Button } from 'antd';
import { makeGlobalState, makeFormValue, makeSelectAnswers, makeSelectQuestions, makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { Switch, Route } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H2 from 'components/H2';
import MarketTable from 'components/MarketTable';
import LiquidityChart from 'components/LiquidityChart';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { finalSubmitForm, loadRepos, saveUserAnswers } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import showResults from './showResults'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
  }

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
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
};

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
)(HomePage);
