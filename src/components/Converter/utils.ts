import { ConverterData } from '../../common/interfaces';

const selectorsCount: number = 2;

const ids: any[] = Array(selectorsCount).fill(0).map((_, index) => index + 1);

export const dataInitialState: ConverterData[] = ids.map((id) => ({
	selectorId: id,
	exchangeRateId: null,
	value: 0
}));