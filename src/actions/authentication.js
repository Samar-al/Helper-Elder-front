// actions creators
export const HANDLE_LOGIN = 'HANDLE_LOGIN'; // For the middleware (later)
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
export const SAVE_SUCCESSFUL_AUTH = 'SAVE_SUCCESSFUL_AUTH';

// actions types
export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const saveSuccessfulAuth = (data) => ({
  type: SAVE_SUCCESSFUL_AUTH,
  data: data,

});
