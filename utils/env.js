let url = 'http://localhost:3000';
// #ifdef H5
	url = '/api';
// #endif

// 变量可自行添加修改
export default { //存放变量的容器
	baseUrl: url
};
/**
 * 	appid : 		小程序appid
 *  baseUrl : 		服务端域名
 */
