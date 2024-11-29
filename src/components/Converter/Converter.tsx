import { useEffect, useState, FunctionComponent } from 'react';

import Selector from './Selector/Selector';

import { IExchangeRate, IConverterData } from '../../common/interfaces';
import { dataInitialState } from './utils';
import './Converter.scss';

const Converter: FunctionComponent<{ exchangeRateItems: IExchangeRate[] }> = ({ exchangeRateItems }) => {
  const [data, setData] = useState<IConverterData[]>(dataInitialState);
		
	// const onChange = (selectorData: ConverterData) => {		
		// setData(prevState => (
			// prevState.map((item) => (
				// item.selectorId === selectorData.selectorId
					// ? {
						// ...item,
						// ...selectorData
					// }
					// : item
			// )
		// )));
	// };
	
	// const onBuyChange = (id: number) => {
		// setSelectorForBuy(id);
	// };
	
	// useEffect(() => {
		// calculate({ data, selectorIdForBuy, exchangeRateItems });
	// }, [data, selectorIdForBuy]);
	
	return (
    <main className='Converter'>
			{data.map((item: IConverterData, index: number) => {
				// const disabledId: number = item.selectorId === 1 ? data[1].exchangeRateItemId : data[0].exchangeRateItemId
				// const isBuy = item.selectorId === selectorIdForBuy;
				
				return (
					<Selector
						key={index}
						data={item}
						isBuy={true}
						exchangeRateItems={exchangeRateItems}
						disabledExchangeRateItemId={false}
						// onChange={onChange}
						// onBuyChange={onBuyChange} 
					/>
				)
			})}
    </main>
  );
}

export default Converter;