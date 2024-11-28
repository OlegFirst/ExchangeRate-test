import { FunctionComponent } from 'react';

import { ExchangeRate } from '../../common/interfaces';
import './Header.scss';

const Header: FunctionComponent<{ exchangeRateItems: ExchangeRate[] }> = ({ exchangeRateItems }) => (
	<header className='Header'>
		1 UAH rate to:
		
		<ul className='Header__Items'>
			{exchangeRateItems.map(({ currency, buy, sale }) => (
				<li key={currency}>
					{currency}. {buy}, {sale}
				</li>
			))}
		</ul>
	</header>
);

export default Header;