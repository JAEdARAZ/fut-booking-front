import { Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { Game, GamesByDay } from "../../services/api";
import GameCard from "./GameCard";

interface GamesDayProps {
  gamesByDay: GamesByDay
}

export default function GamesDay({ gamesByDay }: GamesDayProps) {
  const renderGames = (games: Game[]) => {
    const gameCards: ReactElement[] = [];
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

    return gameCards;
  }

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      <Typography>{gamesByDay.date}</Typography>
      {renderGames(gamesByDay.games)}
    </Stack>
  )
}