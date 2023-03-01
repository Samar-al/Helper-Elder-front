import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/* This component needs to be given as element prop
for Routes that should be accessible to logged users only.
If a user is present in the state (i.e. user is logged), returns element.
If there is no user, returns a Navigate element to the connexion page */
export default function PrivateRoute({ element }) {
  const { user } = useSelector((state) => state.authentication);

  if (!user) return <Navigate to="/connexion" />;

  return element;
}

PrivateRoute.propTypes = { element: PropTypes.element.isRequired };
