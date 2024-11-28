import { serverName } from './constants';

const errorHandler = (response: any) => {	
	if (!response.ok) {
		throw new Error(`HTTP error, status = ${response.status}`);
	}
	
	return response;
};

/*
* @var serverName link from current exchange rate is given
*/
export async function getData() {
	const response = await fetch(serverName, {
		method: 'GET',
		mode: 'no-cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	
	return errorHandler(response);
};