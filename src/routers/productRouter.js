import express from "express";
import {
  writePostProduct,
  writeProduct,
  deleteProduct,
  editProduct,
  handleProduct,
  postEditProduct,
} from "../controllers/productController";

export const productRouter = express.Router();

productRouter.get("/write", writeProduct);
productRouter.post("/write", writePostProduct);
productRouter.get("/:id//delete", deleteProduct);
productRouter.get("/:id/edit", editProduct);
productRouter.post("/:id/edit", postEditProduct);
productRouter.get("/:id", handleProduct);
