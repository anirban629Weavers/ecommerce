export const headersWithAuthorizartion = (
  accessToken: string,
  refreshToken: string
) => {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    "X-Refresh-Token": refreshToken,
  };
  return header;
};
