export interface User {
  id: string,
  name: string,
  email: string
}

export interface Game {
  gameId: string,
  date: string,
  time: string,
  playersTotal: number,
  playersJoined: number,
  location: string,
  locationGM: string,
  photoUrl: string
}

export interface GamesByDay {
  date: string,
  games: Game[]
}