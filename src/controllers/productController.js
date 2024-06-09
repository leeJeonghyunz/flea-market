import express from "express";
const path = require("path");
const app = express();

export const handleHome = (req, res) => {
  return res.sendFile(path.join(__dirname, "../public/index.html"));
};

export const handleProduct = (req, res) => {
  console.log(req.params);
  return res.sendFile(path.join(__dirname, "../public/detail.html"));
};

export const createProduct = (req, res) => {
  return res.send("뭘만드려고");
};

export const deleteProduct = (req, res) => {
  return res.send("지우게??ㅜㅜ");
};

export const updateProduct = (req, res) => {
  return res.send("왜바꿔");
};
