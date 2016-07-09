// Check if user is authenticated
// used in checkAuthentication() in routes "onEnter"
export function checkIfAuthenticated(store, token) {
  if (!token) {
    return false;
  }

  if (store.getState().users.isAuthenticated === true) {
    return true;
  }

  return false;
}
