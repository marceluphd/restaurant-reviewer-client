// Check if user is authenticated
// used in checkAuthentication() in routes "onEnter"
export function checkIfAuthenticated(store, token) {
  console.log('token', token);
  console.log('user: ', store.getState().users);

  if (!token) {
    return false;
  }

  if (store.getState().users.isAuthenticated === true) {
    return true;
  }

  return false;
}

export function setHeaders() {
  const token = localStorage.getItem('token');
  let config = {};
  config = {
    headers: { 'Authorization': `Bearer ${token}` }
  }
  return config;
}
