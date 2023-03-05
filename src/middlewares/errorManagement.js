import { redirectAction } from '../actions/app';
import { handleLogout } from '../actions/authentication';

export default function (HTTPCode, store) {
  switch (HTTPCode) {
    case 401:
      store.dispatch(handleLogout());
      store.dispatch(redirectAction('/connexion'));
      break;
    case 404:
      store.dispatch(redirectAction('/404'));
      break;
    default: break;
  }
}
