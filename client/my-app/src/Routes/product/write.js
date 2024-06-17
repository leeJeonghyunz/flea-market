import styled from "styled-components";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../config";
import { useNavigate } from "react-router";

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

export const Write = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    try {
      const response = await fetch(`${BASE_URL}product/write`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: e.name,
          description: e.description,
          price: e.price,
          id: new Date().getTime(),
          time: new Date().getTime(),
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
      console.log("error", error);
    }

    navigate("/");
  };

  return (
    <div>
      <ImageUpload></ImageUpload>
      <Form onSubmit={handleSubmit(onSubmit)} method="POST">
        <Tag>상품명</Tag>
        <input
          placeholder="상품명을 입력해주세요."
          {...register("name", { required: "* 상품명을 입력해주세요." })}
        />
        <ErrorMsg>{errors.name && errors.name.message}</ErrorMsg>
        <Tag>희망 가격</Tag>
        <input
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
          placeholder="간략한 설명을 입력해주세요."
          {...register("description")}
        />
        <Button>등록하기</Button>
      </Form>
    </div>
  );
};
