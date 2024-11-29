/*
* Interfaces
*/

export interface IResponseData {
	base_ccy: string,
	ccy: string,
	buy: string,	
	sale: string
};

// @vars: {buy} or {sell} the {currency} concerning to the UAH
export interface IExchangeRate {
	id: number,
	currency: string,
	buy: number
	sale: number
};

export interface IConverterData {	
	selectorComponentId: number,
	value: number,
	exchangeRateItemId: number	
};