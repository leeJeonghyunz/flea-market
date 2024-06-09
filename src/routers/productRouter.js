import express from "express";
import {
  createProduct,
  deleteProduct,
  handleProduct,
  updateProduct,
} from "../controllers/productController";

export const productRouter = express.Router();

productRouter.get("/create", createProduct);
productRouter.get("/delete", deleteProduct);
productRouter.get("/update", updateProduct);
productRouter.get("/:id", handleProduct);
