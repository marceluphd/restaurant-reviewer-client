// Check if user is authenticated
// used in checkAuthentication() in routes "onEnter"
export function checkIfAuthenticated (store, token) {
  // console.log('token', token);
  // console.log('user: ', store.getState().users);

  // Make sure if the user does have the token or not
  if (!token) {
    if (!localStorage.getItem('token')) {
      return false; 
    }
  }

  if (store.getState().users.isAuthenticated === true) {
    return true;
  }

  return false;
}

// Set headers : Authorization with JWT token
export function setHeaders () {
  const token = localStorage.getItem('token');
  let config = {};
  config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return config;
}

// Convert Mongoose generated Date to Human readable date format
export function getFormattedDate (rawDate) {
  let newDate = new Date(rawDate);

  let month
  let day;
  let year = newDate.getFullYear().toString();

  month = numToMonth(parseInt(newDate.getMonth() + 1));

  if (newDate.getDate() < 10) {
    day = '0' + newDate.getDate();
  } else {
    day = newDate.getDate().toString();
  }

  return `${month} ${day}, ${year}`;
}

function numToMonth(month) {
  switch(month){
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Aug';
    case 9:
      return 'Sep';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
  }
}