import express from "express";
import morgan from "morgan";
import { globalRouter } from "./routers/globalRouter";
import { userRouter } from "./routers/userRouter";
import { productRouter } from "./routers/productRouter";
const app = express();
const PORT = 3000;

const handleListen = () => {
  console.log(`Go to ${PORT}🚀🚀🚀🚀💺`);
};

app.use(morgan("dev"));
app.use(globalRouter);
app.use("/product", productRouter);

app.listen(PORT, handleListen);

// const express = require("express");
// const path = require("path");
// const app = express();
// const PORT = process.env.PORT || 3000;

// // 정적 파일 제공 설정
// app.use(express.static(path.join(__dirname, "../client/my-app/build")));

// // API 엔드포인트 설정 예시
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from the server!" });
// });

// // React 애플리케이션 제공
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/my-app/build", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
