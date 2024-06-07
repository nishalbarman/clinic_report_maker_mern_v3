const getTokenDetails = require("../helpter/getTokenDetails");
const { globalErrorHandler } = require("../utils");

const checkRole = (...allowedRoles) => {
  // 0 = user, 1 = super-admin, 2 = admin, 3 =  technician

  return (req, res, next) => {
    try {
      const token = req?.jwt?.token;
      if (!token) {
        return globalErrorHandler({
          res,
          message: "Authentication Error: Token not provided",
          statusCode: 401,
        });
      }

      const userDetails = getTokenDetails(token);
      if (!userDetails) {
        return globalErrorHandler({
          res,
          message: "Authentication Error: Token validation failed",
          statusCode: 401,
        });
      }

      req.user = userDetails;

      if (allowedRoles.includes(userDetails.role)) {
        req.jwt.role = userDetails?.role;
        req.jwt.center = userDetails?.center;
        return next();
      }

      return globalErrorHandler({
        res,
        message: "Authentication Error: Endpoint not allowed to this role",
        statusCode: 401,
      });
    } catch (error) {
      return globalErrorHandler({
        res,
        error,
      });
    }
  };
};

module.exports = checkRole;
