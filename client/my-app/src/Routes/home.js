import React, { useEffect } from "react";
import styled from "styled-components";
import { Preview } from "../components/Preview";
import { Link } from "react-router-dom";
import { BASE_URL } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { listState } from "../atoms";

const Container = styled.div`
  padding: 10px;
`;

const Selling = styled.div`
  font-family: "Jua", sans-serif;
  font-size: 1.5rem;
  color: #d76996;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const IconDiv = styled.div`
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 50px;
  right: 100px;
  border-radius: 50%;
  background-color: #d76996;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.svg`
  color: white;
  height: 60%;
`;

export const Home = () => {
  const [list, setList] = useRecoilState(listState);

  useEffect(() => {
    fetch(`${BASE_URL}api/product`)
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Container>
      <Selling>Now Selling</Selling>
      <Wrapper>
        {list.length > 0 ? (
          list.map((item, index) => <Preview key={index} item={item} />)
        ) : (
          <div>No Data</div>
        )}
        <Link to="/write" style={{ textDecoration: "none" }}>
          <IconDiv>
            <Icon>
              <FontAwesomeIcon icon={faPen} />
            </Icon>
          </IconDiv>
        </Link>
      </Wrapper>
    </Container>
  );
};
