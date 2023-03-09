import { displayInfoMessages, redirectAction } from '../actions/app';
import { handleLogout } from '../actions/authentication';

export default function (HTTPCode, store) {
  switch (HTTPCode) {
    case 401:
      store.dispatch(handleLogout());
      store.dispatch(redirectAction('/connexion'));
      break;
    case 403:
      store.dispatch(displayInfoMessages(['Erreur : Accès refusé !']));
      store.dispatch(redirectAction('/'));
      break;
    case 404:
      store.dispatch(redirectAction('/404'));
      break;
    default: return false;
  }
  return true;
}
