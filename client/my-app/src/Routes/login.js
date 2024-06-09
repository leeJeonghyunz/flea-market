import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 200px;
  background-color: #f1f2f6;
  box-sizing: border-box;
  padding: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Tag = styled.div`
  margin: 5px 0;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 10px;
  margin: 5px 0;
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

const JoinDiv = styled.div`
  margin-top: 15px;
`;

const JoinSpan = styled.span`
  color: blue;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };

  console.log(errors);

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Tag>ID</Tag>
          <input {...register("id", { required: "* ID를 입력해주세요." })} />
          <ErrorMsg>{errors.id && errors.id.message}</ErrorMsg>
          <Tag>Password</Tag>
          <input
            {...register("password", {
              required: "* 비밀번호를 입력해주세요.",
            })}
          />
          <ErrorMsg>{errors.password && errors.password.message}</ErrorMsg>
          <Button>Login</Button>
        </Form>
      </Wrapper>
      <JoinDiv>
        <span>회원정보가 없으세요?</span>{" "}
        <Link to="/join" style={{ textDecoration: "none" }}>
          <JoinSpan>가입하기</JoinSpan>
        </Link>
      </JoinDiv>
    </Container>
  );
};
