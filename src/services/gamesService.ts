import { Game, GamesByDay } from "../types/types";
import { getNorwayTodayAndTomorrow } from "../utils/dates";
import { getGames } from "./api";

export async function getGame() {
  const games = await getGames();
  return games[Math.floor(Math.random() * games.length)];
}

export async function getGamesByDay(): Promise<GamesByDay[]> {
  const games = await getGames();
  const gamesByDayObject: { [key: string]: Game[] } = {};
  games.forEach(game => {
    if (gamesByDayObject.hasOwnProperty(game.date)) {
      gamesByDayObject[game.date].push(game);
    } else {
      gamesByDayObject[game.date] = [game];
    }
  })

  const gamesByDay: GamesByDay[] = [];
  for (var key of Object.keys(gamesByDayObject)) {
    gamesByDay.push({ date: key, games: gamesByDayObject[key] });
  }

  return gamesByDay;
}

export function getGameDateText(date: string): string {
  const norwayTodayAndTomorrow = getNorwayTodayAndTomorrow();
  if (date === norwayTodayAndTomorrow.today) {
    return `TODAY (${date})`;
  } else if (date === norwayTodayAndTomorrow.tomorrow) {
    return `TOMORROW (${date})`;
  } else {
    return date;
  }
}