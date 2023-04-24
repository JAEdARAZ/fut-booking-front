import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import StadiumIcon from '@mui/icons-material/Stadium';
import { Box, Button, Stack, Typography } from "@mui/material";
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
        />
        <Box
          pb={0.5}
          display="flex"
          flexDirection="column"
          rowGap={0.5}
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
            <GroupsIcon fontSize="large" />
            <Typography variant="h5">{`${game.playersNumber / 2} vs ${game.playersNumber / 2}`}</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
          >
            <EventIcon fontSize="large" />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{`${game.time} (${game.date})`}</Typography>
          </Stack>
          <Stack
            direction="row"
            flexGrow={1}
            spacing={3}
          >
            <GroupsIcon fontSize="large" />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>PLAYERS FOR THE GAME: 10/16</Typography>
          </Stack>
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
        >
          LOCATION IN GOOGLE MAPS
        </Button>
        <Button variant="contained" sx={{ width: "100%" }}>BOOK</Button>
      </Box>
    </Box>
  )
}