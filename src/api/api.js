function setAdminApi(path) {
  let global = '/api/admin';
  return global + path;
}

const api = {
	getAllUsers:setAdminApi("/getAllUsers"),//获取所有的用户信息
}

export default api;