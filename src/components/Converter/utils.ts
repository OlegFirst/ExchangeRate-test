import { 
  IExchangeRate,
  IConverterData,
  selectorComponentIdValues,
	ICurrentSelectedCurrencyId
} from '../../common/interfaces';

const selectorComponentsCount: selectorComponentIdValues = 2;

const ids: any = Array(selectorComponentsCount).fill(0).map((_, index) => index + 1);

const getConverterDataById = (id: selectorComponentIdValues, data: IConverterData[]): IConverterData => (
  data.find((item: IConverterData) => item.exchangeRateItemId === id) ?? {
    selectorComponentId: null,
    value: 0,
    exchangeRateItemId: 0
  }
)

const getExchangeRateById = (id: number, data: IExchangeRate[]): IExchangeRate => (
  data.find((item: IExchangeRate) => item.id === id) ?? {
    id: 0,
    currency: '',
    buy: 0,
    sale: 0
  }
);

export const dataInitialState = ids.map((id: any): IConverterData => ({
  selectorComponentId: id,
  value: 0,
  exchangeRateItemId: id
}));

/*
* @var FORMULA
*
* value1 * sale1 = value2 * sale2 => value1 = value2 * sale2 / sale1
* where
*   value1 is a currency should be recalculate ( shown by blurredId )
*   value2 equales to the last wrote down input field ( shown by focusedId )
*   sale1, sale2 are get from an API response and stored in an exchangeRateItems array
*/
export const calculateBlurredData =
  (
    focusedData: IConverterData,
    data: IConverterData[],    
    exchangeRateItems: IExchangeRate[]
  ): number => {
    
  // console.log(focusedData, data, exchangeRateItems)
  
	const focusedId: selectorComponentIdValues = focusedData.selectorComponentId;
  const blurredId: selectorComponentIdValues = focusedId === 1 ? 2 : 1;
	const blurredData: IConverterData = getConverterDataById(blurredId, data);

	const value2: number = focusedData.value;   
  const { sale: sale2 } = getExchangeRateById(focusedData.exchangeRateItemId, exchangeRateItems);
  const { sale: sale1 } = getExchangeRateById(blurredData.exchangeRateItemId, exchangeRateItems);
     
  const value1 = value2 * sale2 / sale1;
	
  console.log('/focused', {focusedId, value2, sale2});
  console.log('/blurred', {blurredId, value1, sale1});
	
	return value1;
};

export const getSelectedCurrencyId = (id: selectorComponentIdValues, data: ICurrentSelectedCurrencyId[]): number => {
	if (!id) {
		return 0;
	}
	
	const currentId: selectorComponentIdValues = id === 1 ? 2 : 1;
	
	const selectedItem = data.find((item: ICurrentSelectedCurrencyId) => (
		item.selectorComponentId === currentId)
	);
	
	return selectedItem?.exchangeRateItemId ?? 0;
};