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

export const productData = [
  {
    name: "시계",
    description: "비싼 롤렉스",
    price: "3000000",
    location: "서울",
    time: 1718602360718,
    id: 1,
    img: "http://localhost:3000/",
  },
  {
    name: "반지",
    description: "커플링",
    price: "300000",
    location: "서울",
    time: 1718302660718,
    id: 2,
  },
];

globalRouter.get("/api/user", (req, res) => {
  res.json(fakeUser);
});

globalRouter.get("/api/product", (req, res) => {
  res.json(productData);
});
