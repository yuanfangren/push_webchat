function setAdminApi(path) {
  let global = '/api/admin';
  return global + path;
}

const api = {
	getAllUsers:setAdminApi("/getAllUsers"),//获取所有的用户信息
	setForbiddenById:setAdminApi("/setForbiddenById"),//设置用户禁用启用
	addChannel:"/api/channel/addChannel",//创建通道
}

export default api;