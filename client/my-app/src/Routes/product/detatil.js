import { useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import { useRecoilState } from "recoil";
import { productState } from "../../atoms";

const ImageBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: grey;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 10px 0px;
`;

const UserWrapper = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
`;

const UserIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: grey;
  margin-right: 10px;
`;

const UserName = styled.p`
  font-weight: 600;
`;

const UserDiv = styled.div`
  line-height: 1.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Border = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Description = styled.div`
  height: 250px;
  margin-bottom: 15px;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

export const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useRecoilState(productState);

  useEffect(() => {
    fetch(`${BASE_URL}api/product`)
      .then((res) => res.json())
      .then((res) => setProduct(res[id - 1]));
  }, []);

  return (
    <div>
      <ImageBox></ImageBox>
      <UserWrapper>
        <UserIcon></UserIcon>
        <UserDiv>
          <div>
            <UserName>김갑숭</UserName>
            <p>{product.location}</p>
          </div>
          <Link to={`edit`}>
            <p>수정하기</p>
          </Link>
        </UserDiv>
      </UserWrapper>
      <Border></Border>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Price>{Number(product.price).toLocaleString("ko-KR")} 원</Price>
    </div>
  );
};
