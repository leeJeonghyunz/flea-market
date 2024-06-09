import styled from "styled-components";
import Onion from "../img/517559.png";
import { Link } from "react-router-dom";

const TitleDiv = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.img`
  height: 100%;
`;

const LogoDiv = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  font-family: "Jua", sans-serif;
  font-size: 32px;
  color: #d76996;
`;

const Button = styled.button`
  padding: 10px;
  width: 100px;
  height: 50%;
  background-color: #d76996;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
`;

const Border = styled.div`
  margin: 10px 0;
  border: 3px solid #d76996;
`;

const Header = () => {
  return (
    <>
      <TitleDiv>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoDiv>
            <Logo src={Onion} />
            <h3>양파마켓</h3>
          </LogoDiv>
        </Link>
        <Link to="/login " style={{ textDecoration: "none" }}>
          <Button>Login</Button>
        </Link>
      </TitleDiv>
      <Border></Border>
    </>
  );
};

export default Header;
