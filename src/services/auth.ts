import { Auth } from "aws-amplify";

interface newUser {
  username: string,
  password: string,
  email: string,
  name: string,
  surname: string,
  gender: string,
  birthdate: string
}

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

export async function registerNewUser(newUser: newUser) {
  try {
    await Auth.signUp({
      username: newUser.username,
      password: newUser.password,
      attributes: {
        email: newUser.email,
        name: newUser.name,
        family_name: newUser.surname,
        gender: newUser.gender,
        birthdate: newUser.birthdate
      }
    });

    console.log(`${newUser.username} has been created`);
  } catch (error) {
    console.log(error);
  }
}

export async function sendForgotPasswordCode(username: string) {
  try {
    await Auth.forgotPassword(username);
    console.log("the code has been sent");
  } catch (error) {
    console.log(error);
  }
}

export async function submitNewPassword(username: string, newPassword: string, code: string) {
  try {
    await Auth.forgotPasswordSubmit(username, code, newPassword)
    console.log("the new password has been set");
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