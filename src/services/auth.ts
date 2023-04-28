import { Auth } from "aws-amplify";

export async function loginCognito(username: string, password: string) {
  try {
    return await Auth.signIn(username, password);
  } catch (error) {
    console.log(error);
  }
}

export async function signOut(global?: false) {
  try {
    return await Auth.signOut({ global });
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthorizationHeader() {
  const response = await Auth.currentSession();
  const token = response.getAccessToken();
  const jwtToken = token.getJwtToken();

  const config = {
    headers: { Authorization: `Bearer ${jwtToken}` }
  }

  return config;
}