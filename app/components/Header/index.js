import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Crypto from './crypto.jpg';
import messages from './messages';

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ textAlign: 'center', margin: '0 auto' }}>
        <A href="https://www.sasanikolic.com">
          <Img src={Crypto} alt="Compare cryptocurrencies with react" />
        </A>
        <A style={{ fontSize: '35px' }} href="/">
          Paper Currency Exchange Rate, Crypto Coin Market Table, Liquid Chart
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/liquidity">
            <FormattedMessage {...messages.liquidity} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
