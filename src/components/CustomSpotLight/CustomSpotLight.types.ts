export interface CustomSpotLightType {
  // lightRef: any;
  lightFrom: number[];
  lightTo: number[];
  lightColor?: string;
  intensity?: number;
  distance?: number;
  angle?: number;
  penumbra?: number;
  decay?: number;
}