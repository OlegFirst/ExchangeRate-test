import { useEffect, useState, FunctionComponent } from 'react';

import Selector from './Selector/Selector';

import { IExchangeRate, IConverterData } from '../../common/interfaces';
import { dataInitialState, calculate } from './utils';
import './Converter.scss';

const Converter: FunctionComponent<{ exchangeRateItems: IExchangeRate[] }> = ({ exchangeRateItems }) => {
  const [data, setData] = useState<IConverterData[]>(dataInitialState);
	
  const onChange = (selectorData: IConverterData) => {		
		setData(prevState => (
			prevState.map((item: IConverterData) => (
				item.selectorComponentId === selectorData.selectorComponentId
					? {
						...item,
						...selectorData
					}
					: item
			)
		)));
	};
	
	useEffect(() => {
		calculate(data, exchangeRateItems);
	}, [data, exchangeRateItems]);
	
	return (
    <main className='Converter'>
			{data.map((item: IConverterData, index: number) => {
				const disabledId: number = item.selectorComponentId === 1 ? data[1].exchangeRateItemId : data[0].exchangeRateItemId
								
				return (
					<Selector
						key={index}
						data={item}
						exchangeRateItems={exchangeRateItems}
						disabledExchangeRateItemId={disabledId}
						onChange={onChange}
					/>
				)
			})}
    </main>
  );
}

export default Converter;