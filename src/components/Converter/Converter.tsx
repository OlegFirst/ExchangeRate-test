import { useEffect, useState, useRef, FunctionComponent } from 'react';

import Selector from './Selector/Selector';

import { 
  IExchangeRate,
  IConverterData, 
  selectorComponentIdValues,
	ICurrentSelectedCurrencyId
} from '../../common/interfaces';
import { 
	dataInitialState,
	calculateBlurredData,
	getSelectedCurrencyId
} from './utils';
import './Converter.scss';

const Converter: FunctionComponent<{ exchangeRateItems: IExchangeRate[] }> = ({ exchangeRateItems }) => {
  const [data, setData] = useState<IConverterData[]>(dataInitialState);
  const [selectedCurrencyIds, setSelectedCurrencyIds] = useState<ICurrentSelectedCurrencyId[]>([]);
  
  const onChange = (focusedData: IConverterData) => {
    const blurredValue: number = calculateBlurredData(focusedData, data, exchangeRateItems);
       
    setData(prevState => (
      prevState.map((item: IConverterData) => (
        item.selectorComponentId === focusedData.selectorComponentId
        ? {
          ...item,
          ...focusedData
        }
        : {
					...item,
					value: blurredValue
				}
      )
    )));
	};
	
  useEffect(() => {
		console.log('--------------------------------')
		// console.log('data:', data)
		
    const currentSelectedCurrencyIds = data.reduce((acc, item: IConverterData) => (
      acc.concat({
				selectorComponentId: item.selectorComponentId,
				exchangeRateItemId: item.exchangeRateItemId
			})
    ), [] as ICurrentSelectedCurrencyId[]);
    
    setSelectedCurrencyIds(currentSelectedCurrencyIds);
	}, [data]);
	
  return (
    <main className='Converter'>
      {data.map((item: IConverterData) => {
				const selectedCurrencyId = getSelectedCurrencyId(item.selectorComponentId, selectedCurrencyIds);
								
        return (
          <Selector
            key={item.selectorComponentId}
            data={item}
            exchangeRateItems={exchangeRateItems}
            selectedCurrencyId={selectedCurrencyId}
            onChange={onChange}
          />
        )
      })}
    </main>
  );
}

export default Converter;