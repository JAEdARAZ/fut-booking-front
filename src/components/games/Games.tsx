import Stack from "@mui/material/Stack";
import { ReactElement, useEffect, useState } from "react";
import { Game, GamesByDay, getGames } from "../../services/api";
import GameCard from "./GameCard";
import { Typography } from "@mui/material";

export default function Games() {
  const [gamesByDay, setGamesByDay] = useState<GamesByDay[]>([]);

  useEffect(() => {
    async function getApiGames() {
      const games = await getGames();
      const gamesByDay = getGamesByDay(games);
      setGamesByDay(gamesByDay);
    }

    getApiGames();
  }, []);

  function getGamesByDay(games: Game[]) {
    const gamesByDayObject: any = {};
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

  const renderStacks = (gamesByDay: GamesByDay[]) => {
    const gamesByDayStacks: ReactElement[] = [];
    gamesByDay.forEach(gameByDay => {
      const gameCards: ReactElement[] = [];
      const games = gameByDay.games;
      for (let i = 0; i < games.length; i = i + 3) {
        const firstGameCard = <GameCard game={games[i]} />;
        const secondGameCard = (i + 1 < games.length) ? <GameCard game={games[i + 1]} /> : <></>;
        const thirdGameCard = (i + 2 < games.length) ? <GameCard game={games[i + 2]} /> : <></>;

        gameCards.push(
          <Stack
            direction={{ sm: 'column', md: 'row' }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {firstGameCard}
            {secondGameCard}
            {thirdGameCard}
          </Stack>
        )
      }

      gamesByDayStacks.push(
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography>{gameByDay.date}</Typography>
          {gameCards}
        </Stack>
      )
    })

    return gamesByDayStacks;
  }

  return (
    <>
      <Stack
        direction="column"
        spacing={6}
        marginBottom={10}
        alignItems="center"
        justifyContent="center"
      >
        {renderStacks(gamesByDay)}
      </Stack>
    </>
  )
}