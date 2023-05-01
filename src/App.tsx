
import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { ForgotPassword } from "./components/access/ForgotPassword";
import NavBar from "./components/navbar/NavBar";
import { Login } from "./components/access/Login";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          {/* <Route path="/" element={<Games />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games/:gameId" element={<GameDetail />} /> */}
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
