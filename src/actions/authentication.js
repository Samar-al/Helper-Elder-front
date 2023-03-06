// actions creators
export const HANDLE_LOGIN = 'HANDLE_LOGIN'; // For the middleware (later)
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
export const SAVE_JWT = 'SAVE_JWT';
export const FETCH_LOGGED_USER = 'FETCH_LOGGED_USER';
export const SAVE_LOGGED_USER = 'SAVE_LOGGED_USER';

// actions types
export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const saveJwt = (token) => ({
  type: SAVE_JWT,
  token: token,
});

export const fetchLoggedUser = () => ({
  type: FETCH_LOGGED_USER,
});

export const saveLoggedUser = (user) => ({
  type: SAVE_LOGGED_USER,
  user: user,
});
