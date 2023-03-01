import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ element }) {
  const { user } = useSelector((state) => state.authentication);

  if (!user) return <Navigate to="/connexion" />;

  return element;
}

PrivateRoute.propTypes = { element: PropTypes.element.isRequired };
