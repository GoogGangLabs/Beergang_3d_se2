import { atom } from "recoil";

export const imageVisibleState = atom<boolean>({
  key: "imageVisibleState",
  default: false
});

export const isFirstSceneState = atom<boolean>({
  key: "isFirstSceneState",
  default: false,
});
