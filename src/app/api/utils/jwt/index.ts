import jwt from "jsonwebtoken";

const oneDay: number = 24 * 60 * 60 * 1000;
const accessTokenDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
// const accessTokenDuration = 30000; // 30 seconds
const refreshTokenDuration = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
const accessTokenExpiration = new Date(Date.now() + accessTokenDuration); // 5 minutes
const refreshTokenExpiration = new Date(Date.now() + refreshTokenDuration); // 3 days

const generateJwtToken = (
  payload: object,
  secret: string,
  expiry: string = "1d"
) => {
  try {
    const token = jwt.sign(payload, secret, {
      expiresIn: expiry,
    });
    return token;
  } catch (error) {
    console.error("Error generating JWT token:", error);
    throw error;
  }
};

const generateAccessToken = (payload: object) => {
  return generateJwtToken(
    payload,
    process.env.ACCESS_TOKEN_SECRET_KEY as string,
    // "10000"
    accessTokenDuration.toString()
  );
};

const generateRefreshToken = (payload: object) => {
  return generateJwtToken(
    payload,
    process.env.REFRESH_TOKEN_SECRET_KEY as string,
    // "60000"
    refreshTokenDuration.toString()
  );
};

export {
  generateJwtToken,
  oneDay,
  accessTokenDuration,
  refreshTokenDuration,
  accessTokenExpiration,
  refreshTokenExpiration,
  generateAccessToken,
  generateRefreshToken,
};
