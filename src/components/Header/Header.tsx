import { FunctionComponent } from 'react';

import { ResponseData, ExchangeRate } from '../../common/interfaces';

const Header: FunctionComponent<{ exchangeRateItems: ExchangeRate[] }> = () => {
  return (
    <header className='header'>
      some text
    </header>
  );
}

export default Header;