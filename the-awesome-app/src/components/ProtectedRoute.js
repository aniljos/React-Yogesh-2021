import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

function ProtectedRoute(props) {

    const { path, component } = props;
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if (isAuthenticated === true) {
        return (
            <Route path={path} component={component} />
        )
    }
    else {
        return (
            <Route path={path}>
                <Redirect to="/login" />
            </Route>
        )
    }
}
export default ProtectedRoute;