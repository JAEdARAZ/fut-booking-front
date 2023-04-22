import { Game, GamesByDay, getGames } from "./api";

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