import { atom } from "recoil";

export const pageNumState = atom<number>({
  key: "pageNumState",
  default: 33,
});

export const imageVisibleState = atom<number>({
  key: "imageVisibleState",
  default: 0
});

export const isFirstSceneState = atom<boolean>({
  key: "isFirstSceneState",
  default: false,
});

export const showLogoState = atom<string>({
  key: "showLogoState",
  default: "opacity-0"
});

export const iconColorState = atom<{ filter: string }>({
  key: "iconColorState",
  default: { filter : "brightness(0%)" }
});

export const introAcceptedState = atom<boolean>({
  key: "introAcceptedState",
  default: false,
});

export const introDeniedState = atom<boolean>({
  key: "introDeniedState",
  default: false,
});

export const toggleMusicState = atom<boolean>({
  key: "toggleMusicState",
  default: true,
});

export const sceneStartState = atom<boolean>({
  key: "sceneStartState",
  default: false,
});
