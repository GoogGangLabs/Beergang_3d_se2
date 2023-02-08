import React, { useEffect, useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations, useScroll } from "@react-three/drei";
import testAsset from "assets/3d/test.glb"
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

export default function Test(props) {
  const group = useRef();
  const camera = useRef();
  const scroll = useScroll()
  const { nodes, materials, animations } = useGLTF(testAsset);
  const { actions } = useAnimations(animations, group);
  // console.log(actions["Armature|mixamo.com|Layer0"])
  useEffect(() => {
    actions["Animation"].play();
    console.log(actions)
    // CameraActions["Armature|mixamo.com|Layer0"].play();
  }, [actions])

  // useFrame((state, delta) => {
  //   //damp => (current, target, speed of movement, delta)
  //   const action = actions["Armature|mixamo.com|Layer0"];
  //   action.time = MathUtils.damp(
  //     action.time,
  //     action.getClip().duration * scroll.offset,
  //     3,
  //     delta
  //   );
  //   console.log(state.camera.position)
  // })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Light" rotation={[2.25, 1.1, -1.62]}>
          <directionalLight
            name="Light_Orientation"
            intensity={30}
            decay={2}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group position={[0, 0, -1]} />
          </directionalLight>
        </group>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Beta_Joints"
            geometry={nodes.Beta_Joints.geometry}
            material={materials.Beta_Joints_MAT1}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            name="Beta_Surface"
            geometry={nodes.Beta_Surface.geometry}
            material={materials.Beta_HighLimbsGeoSG3}
            skeleton={nodes.Beta_Surface.skeleton}
          />
        </group>
        <group
          name="BezierCurve"
          position={[1.26, 1.54, 0.02]}
          rotation={[0, -0.44, 0]}
        />
        <group
          name="BezierCurve001"
          position={[4.19, 4.07, 0.97]}
          rotation={[0, -0.44, 0]}
        />
        <group
          name="Camera001"
          position={[1.42, 2.68, -4.81]}
          rotation={[1.9, 0.09, -2.89]}
        >
          <PerspectiveCamera
            name="Camera001_Orientation"
            makeDefault={true}
            far={1000}
            near={0.1}
            fov={53.7}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(testAsset);
