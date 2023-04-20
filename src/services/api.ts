import axios, { AxiosResponse } from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";
export interface User {
  id: string,
  name: string,
  email: string
}

export async function getUsers(): Promise<User[]> {
  try {
    const users: AxiosResponse<User[]> = await axios.get(`${baseUrl}/users`);
    return users.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}