export interface User {
  id: string,
  name: string,
  email: string
}

export interface Game {
  gameId: string,
  date: string,
  time: string,
  playersNumber: number,
  location: string,
  photoUrl: string
}

export interface GamesByDay {
  date: string,
  games: Game[]
}