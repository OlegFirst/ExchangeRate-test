import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';

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
						data.map((item: ResponseData, index: number) => ({
							id: index + 1,
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
			
      <Converter exchangeRateItems={exchangeRateItems} />
    </section>
  );
}

export default App;