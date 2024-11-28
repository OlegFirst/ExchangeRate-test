import { useEffect, useState } from 'react';

import Header from './components/Header/Header';

import { ResponseData, ExchangeRate } from './common/interfaces';
import { getData } from './common/services';

const App = () => {
	const [exchangeRateItems, setExchangeRateItems] = useState<ExchangeRate[]>([]);
	
	console.log(exchangeRateItems);
	
	useEffect(() => {
		getData()
			.then((response: any) => {				
				response?.json().then((data: ResponseData[]) => {					
					setExchangeRateItems(
						data.map((item: ResponseData) => ({
							currency: item.ccy,
							buy: item.buy,
							sale: item.sale
						}))
					);
				});
			})
			.catch((err: any) => {
				console.log('Error ', err);				
			})
	}, []);
	
  return (
    <section className='App'>
			<Header exchangeRateItems={exchangeRateItems} />
		
			<h1>Privat Bank currency rates</h1>
			
      some text
    </section>
  );
}

export default App;