import express from "express";
import { handleHome } from "../controllers/productController";
import { handleLogin } from "../controllers/userController";

export const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleHome);
globalRouter.get("/login", handleLogin);

const fakeUser = {
  이름: "로기완",
  국가: "북한",
};

const productData = [
  {
    상품명: "시계",
    설명: "비싼 롤렉스",
    가격: "300만원",
    id: 1,
  },
  {
    상품명: "반지",
    설명: "커플링",
    가격: "30만원",
    id: 2,
  },
];

globalRouter.get("/api/user", (req, res) => {
  res.json(fakeUser);
});

globalRouter.get("/api/product", (req, res) => {
  res.json(productData);
});
