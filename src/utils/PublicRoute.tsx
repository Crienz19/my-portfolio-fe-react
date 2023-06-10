import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/store-hooks";
import { authSelector } from "../store/authSlice";

type Props = {
    children: JSX.Element;
}

const PublicRoute : React.FC<Props> = ({children}) => {
    const { isAuthenticated } = useAppSelector(authSelector);

    return !isAuthenticated ? children : <Navigate to={"/admin/dashboard"} replace />;
}

export default PublicRoute;