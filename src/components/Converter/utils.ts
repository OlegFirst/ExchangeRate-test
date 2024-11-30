import { 
  IExchangeRate,
  IConverterData,
  selectorComponentIdValues
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
export const calculate =
  (
    focusedId: selectorComponentIdValues,
    data: IConverterData[],    
    exchangeRateItems: IExchangeRate[]
  ): any => {
    
  console.log('------------------------------')
  console.log(focusedId, data, exchangeRateItems)
    
  const blurredId: selectorComponentIdValues = focusedId === 1 ? 2 : 1;

  const res2 = getConverterDataById(focusedId, data);
  
  console.log('////', res2)
  
   
  // const { sale: sale2 } = getExchangeRateById(focusedId, exchangeRateItems);
  // const { sale: sale1 } = getExchangeRateById(blurredId, exchangeRateItems);
  
  // TO DO: if sale1 === 0
  
  const value1 = 0;
  const value2 = 0;
  
  // const value1 = value2 * sale2 / sale1;
  console.log('/focusedId', focusedId, value2);
  console.log('/blurredId', blurredId, value1);
};