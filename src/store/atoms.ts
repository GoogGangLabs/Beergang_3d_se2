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

export const showLogoState = atom<string>({
  key: "showLogoState",
  default: "opacity-0"
});

export const iconColorState = atom<{ filter: string }>({
  key: "iconColorState",
  default: { filter : "brightness(0%)" }
});

export const introDeniedState = atom<boolean>({
  key: "introDeniedState",
  default: false,
});

export const toggleMusicState = atom<boolean>({
  key: "toggleMusicState",
  default: true,
});
