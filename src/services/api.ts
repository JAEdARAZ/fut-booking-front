import axios, { AxiosResponse } from "axios";
import { games } from "./dummyData";
import { Game, User } from "../types/types";

const baseUrl = "https://jsonplaceholder.typicode.com";

export async function getUsers(): Promise<User[]> {
  try {
    const users: AxiosResponse<User[]> = await axios.get(`${baseUrl}/users`);
    return users.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getGames(): Promise<Game[]> {
  return games;
}