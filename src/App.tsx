import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';
import Load from './components/Load/Load';

import { IResponseData, IExchangeRate } from './common/interfaces';
import { getData } from './common/services';

const App = () => {
	const [exchangeRateItems, setExchangeRateItems] = useState<IExchangeRate[]>([]);
	
	useEffect(() => {
		getData()
			.then((response: any) => {				
				response?.json().then((data: IResponseData[]) => {					
					const fullData = [
						{
							ccy: 'UAH',
							base_ccy: '',
							buy: '0',
							sale: '0'
						},
						...data
					];					
					
					setExchangeRateItems(
						fullData.map((item: IResponseData, index: number) => ({
							id: index + 1,
							currency: item.ccy,
							buy: Number(item.buy),
							sale: Number(item.sale)
						}))
					);
				});
			})
			.catch((err: any) => {
				console.log('Error ', err);				
			})
	}, []);
	
	if (exchangeRateItems.length === 0) {
		return (
			<Load />
		)
	}
	
  return (
    <section className='App'>
			<Header exchangeRateItems={exchangeRateItems} />
			
      <Converter exchangeRateItems={exchangeRateItems} />
    </section>
  );
}

export default App;