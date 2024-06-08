const { globalErrorHandler, getTokenDetails } = require("../utils");

const checkRole = (...allowedRoles) => {
  // 0 = user, 1 = super-admin, 2 = admin, 3 =  technician

  return (req, res, next) => {
    try {
      const token = req.get("Authorization");

      if (!token) {
        return globalErrorHandler({
          res,
          message: "Authentication Error: Token not provided",
          statusCode: 401,
        });
      }

      const userDetails = getTokenDetails(token.split("Bearer ")[1]);
      if (!userDetails) {
        return globalErrorHandler({
          res,
          message: "Authentication Error: JWT validation failed",
          statusCode: 401,
        });
      }

      req.user = userDetails;

      if (allowedRoles.includes(userDetails.role)) {
        console.log(userDetails);
        return next();
      }

      return globalErrorHandler({
        res,
        message:
          "Authentication Error: User not authorized for this endpoint with this role",
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
