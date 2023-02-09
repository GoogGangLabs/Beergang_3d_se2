import { MeshReflectorMaterial } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import Group from "assets/svg/Group.svg";
import { TextureLoader, Vector3 } from 'three';

const ImagePlane = ({args=[0,0,0], position=[0,0,0], img=Group, scale=1}: {args?:number[], position?:number[], img?:string, scale?:number}) => {
  const imageTexture = useLoader(TextureLoader, img);
  return (
    <mesh position={new Vector3(...position)} scale={scale}>
      <planeBufferGeometry args={args}/>
      <meshBasicMaterial map={imageTexture} transparent />
    </mesh>
  );
}

export default ImagePlane