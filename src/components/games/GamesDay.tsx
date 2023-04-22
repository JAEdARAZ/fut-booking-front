import { ReactElement, useEffect, useState } from "react";
import { Game, GamesByDay, getGames } from "../../services/api";
import GameCard from "./GameCard";
import { Stack } from "@mui/material";

export default function GamesDay() {
  const [gamesByDay, setGamesByDay] = useState<GamesByDay>({ date: "", games: [] });

  useEffect(() => {
    async function getApiGames() {
      const games = await getGames();
      setGamesByDay(gamesByDay);
    }

    getApiGames();
  }, []);

  const renderStacks = (games: Game[]) => {
    const stacks: ReactElement[] = [];
    for (let i = 0; i < games.length; i = i + 3) {
      const firstGameCard = <GameCard game={games[i]} />;
      const secondGameCard = (i + 1 < games.length) ? <GameCard game={games[i + 1]} /> : <></>;
      const thirdGameCard = (i + 2 < games.length) ? <GameCard game={games[i + 2]} /> : <></>;

      stacks.push(
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

    return stacks;
  }
}