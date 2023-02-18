import { atom } from "recoil";

export const pageNumState = atom<number>({
  key: "pageNumState",
  default: 12,
});

export const imageVisibleState = atom<boolean>({
  key: "imageVisibleState",
  default: false
});

export const isFirstSceneState = atom<boolean>({
  key: "isFirstSceneState",
  default: false,
});
