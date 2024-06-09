import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  height: 150px;
  color: black;
`;

const WrapperLeft = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperRight = styled.div`
  width: 80%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Img = styled.img`
  height: 80%;
`;

const Name = styled.h3`
  font-size: 20px;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  width: 80%;
  justify-content: space-between;
`;

const Time = styled.span``;

export const Preview = ({ list }) => {
  return (
    <Link to={`/${list.id}`} style={{ textDecoration: "none" }}>
      <Wrapper>
        <WrapperLeft>
          <Img src={list.img} alt="img" />
        </WrapperLeft>
        <WrapperRight>
          <Name>{list.name}</Name>
          <Info>
            <div>
              <p>{list.location}</p>
              <p>{list.price}원</p>
            </div>
            <Time>1분전</Time>
          </Info>
        </WrapperRight>
      </Wrapper>
    </Link>
  );
};
