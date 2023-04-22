import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { getGamesByDay } from "../../services/gamesService";
import GamesDay from "./GamesDay";
import { GamesByDay } from "../../types/types";

export default function Games() {
  const [gamesByDayList, setGamesByDayList] = useState<GamesByDay[]>([]);

  useEffect(() => {
    async function getApiGames() {
      const gamesByDayList = await getGamesByDay();
      setGamesByDayList(gamesByDayList);
    }

    getApiGames();
  }, []);

  return (
    <Stack
      direction="column"
      spacing={6}
      marginBottom={10}
      alignItems="center"
      justifyContent="center"
    >
      {
        gamesByDayList.map((gamesByDay) => (
          <GamesDay gamesByDay={gamesByDay} />
        ))
      }
    </Stack>
  )
}