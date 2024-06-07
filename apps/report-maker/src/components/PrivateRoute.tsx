import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux";
import { toast } from "react-toastify";

type PrivateRouteProps = {
  children?: React.ReactNode;
  authorizedRoles: Set<number>;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  authorizedRoles,
}) => {
  const { token, role } = useAppSelector((state) => state.auth);

  console.log(token, role, authorizedRoles);
  console.log(
    !token || role === undefined || isNaN(role) || !authorizedRoles.has(role)
  );

  if (
    !token ||
    role === undefined ||
    isNaN(role) ||
    !authorizedRoles.has(role)
  ) {
    toast.error("You are not authorized to view this page!");
    return <Navigate to={"/auth/login"} />;
  }

  return children;
};

export default PrivateRoute;
