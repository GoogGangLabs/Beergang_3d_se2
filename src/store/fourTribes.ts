import { atom } from "recoil";
import beer from "assets/png/beer.png";

export const hoverImageState = atom<string>({
  key: "hoverImageState",
  default: beer,
});

export const imageVisibleState = atom<boolean>({
  key: "imageVisibleState",
  default: false
});
