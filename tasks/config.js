/*
 *  配置参数
 */
exports.default = {
	//文件别名配置
	alias: {

	},
	//全局引入模块配置
	global: {
		'jquery': 'window.jQuery',
		'hiido_yylive_v2': 'window.hiido_yylive_v2',
		'yymobile': 'window.YYMobile',
		'jweixin': 'window.wx'
	},
	//端口
	port: 3000,
	//静态资源地址
	publicPath: '//web.yystatic.com/project/algorithms/mobile/',
	//项目输出地址
	outputPath: '../dist/'
}

