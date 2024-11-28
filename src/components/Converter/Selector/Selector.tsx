import { FunctionComponent } from 'react';

import { ConverterData, ExchangeRate } from '../../../common/interfaces';

const Selector = (props: any) => {
	const {
		selectorId,
		exchangeRateId,
		value,
		exchangeRateItems
	} = props;
	
	const onInputChange = (e: any) => {		
		props.onChange({
			selectorId,
			value: e.target.value,
			exchangeRateId
		});
	};
	
	const onSelectChange = (e: any) => {
		props.onChange({
			selectorId,
			value,
			exchangeRateId: Number(e.target.value)
		});
	}
	
  return (
    <div className='Selector'>
			<input 
				className='Selector__Input'
				name='amount'
				type='number'
				placeholder='Amount'
				value={value}
				onChange={onInputChange}
				onFocus={(e) => e.target.select()}
			/>
			
			<select onChange={onSelectChange}>
				{exchangeRateItems.map((item: ExchangeRate, index: number) => (
					<option 
						key={index}
						value={item.id}
					>
						{item.currency}
					</option>
				))}
			</select>
    </div>
  );
}

export default Selector;