import { IExchangeRate } from '../../../common/interfaces';
import './Selector.scss';

const Selector = (props: any) => {
  const {		
    data: {
      value,
			exchangeRateItemId
    },
    exchangeRateItems,
    selectedCurrencyId
  } = props;
	
  const onInputChange = (e: any) => {
		props.onChange({
      ...props.data,
      value: Number(e.target.value)
    });
  };
	
  const onSelectChange = (e: any) => {
    props.onChange({
      ...props.data,
      exchangeRateItemId: Number(e.target.value)
    });
  };
	
  return (
    <div className='Selector'>
      <input 
        className='Selector__Input'
        placeholder='Amount'
				type='number'
        value={value}
        onChange={onInputChange}
        onFocus={(e) => e.target.select()}
      />
			
      <select 
        className='Selector__Select'
				defaultValue={exchangeRateItemId}
        onChange={onSelectChange}
      >
        {exchangeRateItems.map((item: IExchangeRate, index: number) => (
          <option 
            key={index}
            value={item.id}
						disabled={item.id === selectedCurrencyId}
          >
            {item.currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;