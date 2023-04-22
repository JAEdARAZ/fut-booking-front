import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { GamesByDay } from "../../services/api";
import { getGamesByDay } from "../../services/service";
import GamesDay from "./GamesDay";

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