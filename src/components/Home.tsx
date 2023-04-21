import Stack from "@mui/material/Stack";
import { ReactElement, useEffect, useState } from "react";
import { Game, getGames } from "../services/api";
import GameCard from "./GameCard";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function getApiGames() {
      const games = await getGames();
      setGames(games);
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

  return (
    <>
      <Stack
        direction="column"
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {renderStacks(games)}
      </Stack>
    </>
  )
}