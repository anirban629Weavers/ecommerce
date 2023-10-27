import jwt from "jsonwebtoken";

export const generateJwtToken = (
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
