import fetch from 'node-fetch';

import Bluebird from 'bluebird'

fetch.Promise = Bluebird;

export default class BaseClass {
    constructor(){

    }

    async fetch(url = '', data = {}, type = 'GET', resType = 'JSON'){
		type = type.toUpperCase();
		resType = resType.toUpperCase();
		if (type == 'GET') {
			let dataStr = ''; //数据拼接字符串
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&';
			})

			if (dataStr !== '') {
				dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
				url = url + '?' + dataStr;
			}
		}

		let requestConfig = {
			method: type,
			headers: {
				'Accept': 'application/json; charset=utf-8',
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			mode: "cors",
		}

		if (type == 'POST') {
			// Object.defineProperty(requestConfig, 'body', {
			// 	value: JSON.stringify(data)
			// })
			requestConfig['body'] = data
		}
		let responseJson;
		try {
			// fetch(url, { requestConfig })
			// .then(resp =>{
			// 	console.log('resp is ',resp)
			// 	debugger
			// })
			// .catch(err => {
			// 	debugger
			// 	if (err.name === 'AbortError') {
			// 	  // request was aborted
			// 	}
			//   })
			
			const response = await fetch(url, requestConfig);
			// let text = await response.json()
			// if (text.charCodeAt(0) === 0xFEFF) {
			// 	text = text.substr(1)
			// }
			// const json = JSON.stringify(text)
			// if (resType === 'TEXT') {
			// 	responseJson = await response.text();
			// }else{
				responseJson = await response.json();
			// }
		} catch (err) {
			console.log('获取http数据失败', err);
			throw new Error(err)
		}
		return responseJson
	}
}