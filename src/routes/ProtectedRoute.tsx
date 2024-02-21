import { Navigate, useLocation } from "react-router-dom"
import { ACCESS_TOKEN_KEY } from '../hooks/core/const';

const ProtectedRoute = ({ children }: any) => {
    let location = useLocation();
    const token = localStorage.getItem(ACCESS_TOKEN_KEY)

    if (!Boolean(token)) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children

};

export default ProtectedRoute;