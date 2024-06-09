import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Write } from "./Routes/write";
import { Home } from "./Routes/home";
import { Login } from "./Routes/login";
import Header from "./components/Header";
import { Detail } from "./Routes/detatil";
import { Join } from "./Routes/join";

const Body = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
`;

const Container = styled.div`
  width: 60vw;
`;

function App() {
  return (
    <BrowserRouter>
      <Body>
        <Container>
          <Header />
          <Routes>
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/write" element={<Write />} />
            <Route path="/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Body>
    </BrowserRouter>
  );
}

export default App;
