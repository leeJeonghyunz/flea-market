import React from "react";
import { useRecoilValue } from "recoil";
import { listIdState, productState } from "../../atoms";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../config";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const ImageUpload = styled.div`
  background-color: grey;
  width: 100px;
  height: 100px;
`;

const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Tag = styled.div`
  margin: 5px 0;
`;

const DescriptionInput = styled.textarea`
  height: 3rem;
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
  margin: 5px 0;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 10px;
  margin: 5px 0;
`;

export const Edit = () => {
  const listId = useRecoilValue(listIdState);
  const navigate = useNavigate();
  const product = useRecoilValue(productState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    try {
      const response = await fetch(`${BASE_URL}product/${listId}/edit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: e.name,
          description: e.description,
          price: e.price,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from server:", errorData.error);
        return;
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    navigate(`/product/${listId}`);
  };

  return (
    <div>
      <ImageUpload></ImageUpload>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Tag>상품명</Tag>
        <input
          placeholder="상품명을 입력해주세요."
          defaultValue={product.name}
          {...register("name", { required: "* 상품명을 입력해주세요." })}
        />
        <ErrorMsg>{errors.name && errors.name.message}</ErrorMsg>
        <Tag>희망 가격</Tag>
        <input
          defaultValue={product.price}
          placeholder={"단위 ￦"}
          {...register("price", {
            required: "* 가격을 입력해주세요.",
            pattern: {
              value: /^\d+$/,
              message: "* 숫자만 입력 가능합니다.",
            },
          })}
        />
        <ErrorMsg>{errors.price && errors.price.message}</ErrorMsg>
        <Tag>상품 설명</Tag>
        <DescriptionInput
          defaultValue={product.description}
          placeholder="간략한 설명을 입력해주세요."
          {...register("description")}
        />
        <Button>등록하기</Button>
      </Form>
    </div>
  );
};
