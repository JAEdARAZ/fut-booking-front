import StadiumIcon from '@mui/icons-material/Stadium';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Game } from '../../types/types';

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  const playersPerSide = game.playersNumber / 2;

  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        height="160"
        image={game.photoUrl}
      >
      </CardMedia>
      <CardContent>
        <Stack
          direction="row"
          spacing={2}
        >
          <StadiumIcon />
          <Typography sx={{ textTransform: "uppercase" }}>{game.location}</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
        >
          <GroupsIcon />
          <Typography>{`${playersPerSide}v${playersPerSide}`}</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
        >
          <EventIcon />
          <Typography sx={{ fontWeight: 'bold' }}>{`${game.time} (${game.date})`}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button 
          variant="contained" 
          sx={{ marginLeft: "auto", marginRight: 2 }}
          href={`games/${game.gameId}`}
        >
          BOOK
        </Button>
      </CardActions>
    </Card>
  )
}