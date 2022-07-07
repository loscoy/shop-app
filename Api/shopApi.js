import request from '@/utils/request.js';


export function getData() {
	return request({
		url: '/indexData',
		method:'get'
	});
}
