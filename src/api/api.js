function setAdminApi(path) {
  let global = '/api/admin';
  return global + path;
}

const api = {
	getAllUsers:setAdminApi("/getAllUsers"),//获取所有的用户信息
	setForbiddenById:setAdminApi("/setForbiddenById"),//设置用户禁用启用
	addChannel:"/api/channel/addChannel",//创建通道
	getChannel:"/api/channel/getChannel",//获取通道列表(通过用户id)
	getChannelById:"/api/channel/getChannelById",//获取通道列表(通过通道ID)
	editChannel:"/api/channel/editChannel",//更新通道
	deleteChannelById:"/api/channel/deleteChannelById",//删除通道,
	send: "/send", // 发送消息
	getLoginImg:"/api/user/signin",//获取登录图片
	getCheck:"/api/user/check",//轮询检查是否登录成功
}

export default api;