/*
* Interfaces
*/

export interface ResponseData {
	base_ccy: string,
	buy: string,
	ccy: string,
	sale: string
};

// @vars: {buy} or {sell} the {currency} concerning to the UAH
export interface ExchangeRate {
	id: number,
	currency: string,
	buy: string,
	sale: string
};

export interface ConverterData {
	selectorId: number,	
	value: number,
	exchangeRateId: number | null
};