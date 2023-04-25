import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StadiumIcon from '@mui/icons-material/Stadium';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Box, Button, LinearProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getGame as getApiGame } from "../../services/gamesService";
import { Game } from "../../types/types";


export function GameDetail() {
  //const { gameId } = useParams();
  const initalGame: Game = { gameId: "", date: "", location: "", locationGM: "", photoUrl: "", playersTotal: 0, playersJoined: 0, time: "" };
  const [game, setGame] = useState<Game>(initalGame);

  useEffect(() => {
    async function getGame() {
      const game = await getApiGame();
      setGame(game);
    }

    getGame();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      border="1px solid"
      borderRadius="2%"
      borderColor="#1976d2"
    >
      <Typography variant="h4">{game.location}</Typography>
      <Typography variant="h4">{`${game.time} - (${game.date})`}</Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        width="100%"
        mt={4}
        mb={2}
        rowGap={5}
      >
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 295, md: 350 },
            maxWidth: { xs: 380, md: 450 },
            borderRadius: "5%"
          }}
          alt="Pitch"
          src={game.photoUrl}
          pr={0.5}
        />
        <Box
          pb={0.5}
          display="flex"
          flexDirection="column"
          rowGap={0.5}
          pl={0.5}
        >
          <Stack
            direction="row"
            spacing={3}
          >
            <StadiumIcon fontSize="large" />
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>{game.location}</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
          >
            <AccessTimeIcon fontSize="large" />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{`${game.time} (${game.date})`}</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
          >
            <GroupsIcon fontSize="large" />
            <Typography variant="h5">{`${game.playersTotal / 2} vs ${game.playersTotal / 2}`}</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
          >
            <SportsSoccerIcon fontSize="large" />
            <Typography variant="h5">Players for the game: {`${game.playersJoined}/${game.playersTotal}`}</Typography>
          </Stack>
          <Box flexGrow={1} width="100%" color="black">
            <LinearProgress 
              sx={{ height: "17px"}} 
              color="inherit" 
              variant="determinate" 
              value={game.playersJoined/game.playersTotal * 100} 
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignSelf="stretch"
        rowGap={1}
        mt={4}
      >
        <Button
          variant="contained"
          color="success"
          sx={{ width: "100%" }}
          startIcon={<LocationOnIcon />}
          href={game.locationGM}
          target="_blank"
        >
          LOCATION IN GOOGLE MAPS
        </Button>
        <Button variant="contained" sx={{ width: "100%" }}>BOOK</Button>
      </Box>
    </Box>
  )
}