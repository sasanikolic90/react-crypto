import React from 'react';
import { FormattedMessage } from 'react-intl';

import H3 from 'components/H3';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <section>
        <H3>
          <FormattedMessage
            id="languages"
            defaultMessage="Languages"
          />
        </H3>
        <LocaleToggle />
      </section>
    </Wrapper>
  );
}

export default Footer;
