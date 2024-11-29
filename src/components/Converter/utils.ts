import { IExchangeRate, IConverterData } from '../../common/interfaces';

const selectorComponentsCount: number = 2;

const ids: number[] = Array(selectorComponentsCount).fill(0).map((_, index) => index + 1);

export const dataInitialState: IConverterData[] = ids.map((id: number): any => ({
	selectorComponentId: id,
	value: 0,
	exchangeRateItemId: id
}));

export const calculate = (data: IConverterData[], exchangeRateItems: IExchangeRate[]) => {
  console.log(data)
};