import { Box, Stack, Typography } from "@mui/material";
import { getGameDateText } from "../../services/gamesService";
import { GamesByDay } from "../../types/types";
import GameCard from "./GameCard";

interface GamesDayProps {
  gamesByDay: GamesByDay
}

export default function GamesDay({ gamesByDay }: GamesDayProps) {
  return (
    <Box>
      <Box display="flex">
        <Typography
          flex={1}
          align="center"
          variant="h6"
          component="h2"
          mb={2}
        >
          {getGameDateText(gamesByDay.date)}
        </Typography>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        rowGap={2}
        columnGap={4}
      >
        {gamesByDay.games.map((game) => (<GameCard game={game} key={game.gameId} />))}
      </Stack>
    </Box>
  )
}