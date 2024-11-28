import { useState, FunctionComponent } from 'react';

import Selector from './Selector/Selector';

import { ExchangeRate, ConverterData } from '../../common/interfaces';
import { dataInitialState } from './utils';

const Converter: FunctionComponent<{ exchangeRateItems: ExchangeRate[] }> = ({ exchangeRateItems }) => {
  const [data, setData] = useState<ConverterData[]>(dataInitialState);
	
	console.log(data)
	
	const onChange = (selectorData: any) => {		
		setData(prevState => (
			prevState.map((item) => (
				item.selectorId === selectorData.selectorId
					? {
						...item,
						...selectorData
					}
					: item
			)
		)));
	};
	
	return (
    <main className='Converter'>
			{data?.map((item: ConverterData, index: number) => (
				<Selector
					key={index}
					{...item}
					exchangeRateItems={exchangeRateItems}
					onChange={onChange} 
				/>
			))}
    </main>
  );
}

export default Converter;