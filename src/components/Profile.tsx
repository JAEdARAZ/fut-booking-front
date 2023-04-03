import { Container, Typography, Paper, Button } from "@mui/material";
import profileImage from "../assets/me.jpg";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Profile() {
  return (
    <Container>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom={true}
        align="center">
        Profile
      </Typography>
      <Grid2 container spacing={2} sx={{ height: "250px", maxHeight: "250px", backgroundColor: "white" }}>
        <Grid2 textAlign={"center"} xs={3} xl={3} sx={{ height: "inherit", maxHeight: "inherit" }}>
          <img src={profileImage} alt="" className="img" />
          <Button variant="outlined">Change picture</Button>
        </Grid2>
        <Grid2 xs={9} xl={9} sx={{ height: "inherit", maxHeight: "inherit", backgroundColor: "white" }}>
          <Paper elevation={2} sx={{ paddingY: 3 }}>
            <Typography variant="h4" component="h3" marginBottom={2} paddingLeft={4}>Name: Jhon Doe</Typography>
            <Typography variant="h4" component="h3" marginBottom={2} paddingLeft={4}>Position: Midfielder</Typography>
            <Typography variant="h4" component="h3" marginBottom={2} paddingLeft={4}>Date of birth: 10/10/2010</Typography>
          </Paper>
        </Grid2>
      </Grid2>
      <Typography variant="h1" component="h1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas corporis pariatur quibusdam totam ab qui aliquid neque quo placeat esse! Ea amet eligendi quaerat officiis sequi mollitia, libero odit autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas corporis pariatur quibusdam totam ab qui aliquid neque quo placeat esse! Ea amet eligendi quaerat officiis sequi mollitia, libero odit autem.</Typography>
    </Container>
  );
}