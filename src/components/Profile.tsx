import { Button, Container, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import profileImage from "../assets/me.jpg";
import { User, getUsers as getApiUsers } from "../services/api";

export default function Profile() {
  const initalUser: User = { id: "", name: "", email: "" }
  const [user, setUser] = useState<User>(initalUser);

  useEffect(() => {
    async function getUser() {
      const users = await getApiUsers();
      const user = users[0];
      setUser(user);
    }
    
    getUser();
  }, []);

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
            <Typography variant="h4" component="h3" marginBottom={2} paddingLeft={4}>UserId: {user.id}</Typography>
            <Typography variant="h4" component="h3" marginBottom={2} paddingLeft={4}>Name: {user.name}</Typography>
            <Typography variant="h4" component="h3" marginBottom={2} paddingLeft={4}>Email: {user.email}</Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
}