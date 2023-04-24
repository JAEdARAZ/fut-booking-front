import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getGame as getApiGame } from "../../services/gamesService";
import { Game } from "../../types/types";


export function GameDetail() {
  //const { gameId } = useParams();
  const initalGame: Game = { gameId: "", date: "", location: "", photoUrl: "", playersNumber: 0, time: "" }
  const [game, setGame] = useState<Game>(initalGame);

  useEffect(() => {
    async function getGame() {
      const game = await getApiGame();
      setGame(game);
    }

    getGame();
  }, []);

  return (
    <Box>
      <Typography>{game.gameId}</Typography>
      <Typography>{`${game.time} - (${game.date})`}</Typography>
      <Typography>{game.location}</Typography>
      <Typography>{`${game.playersNumber}v${game.playersNumber}`}</Typography>
    </Box>
  )
}