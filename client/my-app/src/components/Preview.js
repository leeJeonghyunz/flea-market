import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { listIdState } from "../atoms";
import { MAIN_COLOR, timeFormat } from "../config";

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
  color: ${MAIN_COLOR};
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  width: 80%;
  justify-content: space-between;
`;

const Time = styled.span``;

const InfoDiv = styled.div`
  line-height: 1.5rem;
`;

export const Preview = ({ item }) => {
  const setListId = useSetRecoilState(listIdState);
  const onClickList = (id) => {
    setListId(id);
  };
  console.log(item.time);
  return (
    <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
      <Wrapper onClick={() => onClickList(item.id)}>
        <WrapperLeft>
          <Img src={item.img} alt="img" />
        </WrapperLeft>
        <WrapperRight>
          <Name>{item.name}</Name>
          <Info>
            <InfoDiv>
              <p>{item.location}</p>
              <p>{Number(item.price).toLocaleString("ko-KR")}원</p>
            </InfoDiv>
            <Time>{timeFormat(item.time)}</Time>
          </Info>
        </WrapperRight>
      </Wrapper>
    </Link>
  );
};
