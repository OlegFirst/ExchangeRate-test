import {
	selectorComponentIdValues,
  IExchangeRate,
  IConverterData,
	ICurrentSelectedCurrencyId
} from '../../common/interfaces';

import { selectorComponentsCount, ids } from './constants';

const getConverterDataById = (id: selectorComponentIdValues, data: IConverterData[]): IConverterData => (
  data.find((item: IConverterData) => item.selectorComponentId === id) ?? {
    selectorComponentId: null,
    value: '-1',
    exchangeRateItemId: 0
  }
)

const getExchangeRateById = (id: number, data: IExchangeRate[]): IExchangeRate => (
  data.find((item: IExchangeRate) => item.id === id) ?? {
    id: 0,
    currency: '',
    buy: -1,
    sale: -1
  }
);

export const dataInitialState = ids.map((id: any): IConverterData => ({
  selectorComponentId: id,
  value: '0',
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
  ): string => {
  
	const focusedId: selectorComponentIdValues = focusedData.selectorComponentId;
  const blurredId: selectorComponentIdValues = focusedId === 1 ? 2 : 1;
	const blurredData: IConverterData = getConverterDataById(blurredId, data);

	const value2: number = parseFloat(focusedData.value);
  const { sale: sale2 } = getExchangeRateById(focusedData.exchangeRateItemId, exchangeRateItems);
  const { sale: sale1 } = getExchangeRateById(blurredData.exchangeRateItemId, exchangeRateItems);
     
  const value1 = value2 * sale2 / sale1;
	
	return focusedData.value === '' ? '' : value1.toString();
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