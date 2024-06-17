import express from "express";
const path = require("path");
const app = express();
import { productData } from "../routers/globalRouter";

export const handleHome = (req, res) => {
  return res.json(productData);
};

export const handleProduct = (req, res) => {
  const { id } = req.params;
  res.json(productData[id - 1]);
};

export const writeProduct = (req, res) => {
  console.log(req.body);
  return res.send("뭘만드려고");
};

export const writePostProduct = (req, res) => {
  const { name, price, description, id, time } = req.body;
  console.log(req.body);
  productData.unshift({
    name,
    price,
    description,
    id,
    time,
  });
  return res.redirect(`/`);
};

export const deleteProduct = (req, res) => {
  return res.send("지우게??ㅜㅜ");
};

export const editProduct = (req, res) => {
  const { id } = req.params;
  res.json(productData[id - 1]);
};

export const postEditProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!price) {
    return res.status(400).json({ error: "Price is required" });
  }

  const newData = productData[id - 1];
  newData.name = name;
  newData.price = price;
  newData.description = description;

  return res.redirect(`/product/${id}`);
};
