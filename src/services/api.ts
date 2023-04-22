import axios, { AxiosResponse } from "axios";
import { games } from "./dummyData";

const baseUrl = "https://jsonplaceholder.typicode.com";
export interface User {
  id: string,
  name: string,
  email: string
}

export interface Game {
  date: string,
  playersNumber: number,
  location: string,
  photoUrl: string
}

export interface GamesByDay {
  date: string,
  games: Game[]
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

export async function getGames(): Promise<Game[]> {
  return games;
}