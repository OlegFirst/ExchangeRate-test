import { FunctionComponent } from 'react';
import moment from 'moment';

import { IExchangeRate } from '../../common/interfaces';
import './Header.scss';

const Header: FunctionComponent<{ exchangeRateItems: IExchangeRate[] }> = ({ exchangeRateItems }) => (
  <header className='Header'>
    <h1 className='Header__Title'>Privat Bank currency rates</h1>

    <h4 className='Header__Date'>Date: {moment().format('MM.DD.YYYY')}</h4>

    <img 
      className='Header__Image'
      src='images/exchange.jpg'
      width='80'
      height='80'
      alt='bg' 
    />

    <table className='Header__Table'>
      <thead>
        <tr>
          <th>Buy</th>
          <th>Currency</th>
          <th>Sale</th>
        </tr>
      </thead>

      <tbody>			
        {exchangeRateItems.map((item: IExchangeRate) => {
          const { id, currency, buy, sale } = item;

          if (id > 1) {
            return (
              <tr key={id}>
                <td>{buy}</td>
                <td>{currency}</td>
                <td>{sale}</td>
              </tr>
            )
          }

          return null;
      })}
      </tbody>
    </table>
  </header>
);

export default Header;