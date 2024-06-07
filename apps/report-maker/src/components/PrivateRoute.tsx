import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux";

type PrivateRouteProps = {
  children?: React.ReactNode;
  requiredRole?: number[];
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { jwtToken, role } = useAppSelector((state) => state.auth);

  if (!jwtToken || !role || isNaN(role) || !requiredRole?.includes(role))
    return <Navigate to={"/auth/login"} />;

  return children;
};

export default PrivateRoute;
