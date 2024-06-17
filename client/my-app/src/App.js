import Header from "./components/Header";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Routes/home";
import { Login } from "./Routes/user/login";
import { Join } from "./Routes/user/join";
import { Detail } from "./Routes/product/detatil";
import { Edit } from "./Routes/product/edit";
import { Write } from "./Routes/product/write";

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
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/product/:id/edit" element={<Edit />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Body>
    </BrowserRouter>
  );
}

export default App;
