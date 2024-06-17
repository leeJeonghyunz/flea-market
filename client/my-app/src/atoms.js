import { atom } from "recoil";

export const listState = atom({
  key: "listState",
  default: [],
});

export const listIdState = atom({
  key: "listIdState",
  default: [],
});

export const productState = atom({
  key: "productState",
  default: "",
});
