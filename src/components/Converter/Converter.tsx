import { useEffect, useState, useRef, FunctionComponent } from 'react';

import Selector from './Selector/Selector';

import { 
  IExchangeRate,
  IConverterData, 
  selectorComponentIdValues
} from '../../common/interfaces';
import { dataInitialState, calculate } from './utils';
import './Converter.scss';

const Converter: FunctionComponent<{ exchangeRateItems: IExchangeRate[] }> = ({ exchangeRateItems }) => {
  const [data, setData] = useState<IConverterData[]>(dataInitialState);
	const [selectedCurrencyIds, setSelectedCurrencyIds] = useState<number[]>([]);
  
  const onChange = (selectorData: IConverterData) => {
    // calculate(selectorData.selectorComponentId, data, exchangeRateItems);
    
    // return;
    
    // Update focused filed
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
    
    // Update blured filed
    // const focusedId = selectorData.selectorComponentId;
    // calculate(focusedId, data, exchangeRateItems);
	};
	
  useEffect(() => {
		const currentSelectedCurrencyIds = data.reduce((acc, item) => (
      acc.concat(item.exchangeRateItemId)
    ), [] as number[]);
    
    setSelectedCurrencyIds(currentSelectedCurrencyIds);
	}, [data]);
  
  useEffect(() => {
    console.log('_', selectedCurrencyIds)
  }, [selectedCurrencyIds]);
	
	return (
    <main className='Converter'>
			{data.map((item: IConverterData, index: number) => {
        
        
        
        // const disabledId: number = item.selectorComponentId === 1 
          // ? data[1].exchangeRateItemId 
          // : data[0].exchangeRateItemId
								
				return (
					<Selector
						key={index}
						data={item}
						exchangeRateItems={exchangeRateItems}
						selectedCurrencyIds={selectedCurrencyIds}
						onChange={onChange}
					/>
				)
			})}
    </main>
  );
}

export default Converter;