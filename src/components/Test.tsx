import { Stack } from "@mui/material";
import { games } from "../services/dummyData";
import GameCard from "./games/GameCard";

export function Test() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      flexWrap="wrap"
      rowGap={2}
      columnGap={4}
      mb={5}
    >
      <GameCard game={games[Math.floor(Math.random() * games.length)]}/>
      <GameCard game={games[Math.floor(Math.random() * games.length)]}/>
      <GameCard game={games[Math.floor(Math.random() * games.length)]}/>
      <GameCard game={games[Math.floor(Math.random() * games.length)]}/>
      <GameCard game={games[Math.floor(Math.random() * games.length)]}/>
      <GameCard game={games[Math.floor(Math.random() * games.length)]}/>
      <GameCard game={games[Math.floor(Math.random() * games.length)]}/>
    </Stack>
  )
}