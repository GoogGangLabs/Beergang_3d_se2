import React, { useEffect, useLayoutEffect, useRef } from "react";
import beergang from "assets/3d/beergang.glb";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

//최초 카메라 위치 = (0,0,5)
const pageNum = 5;

const cameraTargetX_1 = 0.15;
const cameraTargetY_1 = 0.3;
const cameraTargetZ_1 = 5 - 4.2;

const cameraTargetX_2 = -0.6;
const cameraTargetY_2 = -0.33;
const cameraTargetZ_2 = 0.3;

export default function Beergang(props) {
  const group = useRef();
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF(beergang);
  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  useFrame((state, delta) => {
    console.log(scroll.offset)
    if (scroll.offset <= 1 / pageNum) {
      state.camera.position.set(
        Math.min(scroll.offset * pageNum * cameraTargetX_1, cameraTargetX_1),
        Math.min(scroll.offset * pageNum * cameraTargetY_1, cameraTargetY_1),
        5 - Math.min(scroll.offset * pageNum * cameraTargetZ_1, cameraTargetZ_1)
      );
    } else if (scroll.offset <= 2 / pageNum) {
      // state.camera.position.set(
      //   cameraTargetX_1 +
      //   cameraTargetX_2,
      //   cameraTargetY_1 +
      //   cameraTargetY_2,
      //   5-cameraTargetZ_1 + cameraTargetZ_2
      //   );
      state.camera.position.set(
        cameraTargetX_1 +
        (scroll.offset - 1 / pageNum) * pageNum * cameraTargetX_2,
        cameraTargetY_1 +
        (scroll.offset - 1 / pageNum) * pageNum * cameraTargetY_2,
        5-cameraTargetZ_1 + (scroll.offset - 1 / pageNum) * pageNum * cameraTargetZ_2
        );
        console.log(state.camera.position);
      }

    //페이지 전환이 완전히 되기 전에 동작2로 넘어가야함. (1/5 페이지)
    if (scroll.offset < 0.2 && actions["dance"].play().paused) {
      actions["dance"].play().paused = false;
    } else if (
      scroll.offset >= 0.2 &&
      !actions["dance"].play().paused
      // Math.ceil(actions["dance"].getClip().duration) ===
      //   Math.ceil(actions["dance"].time)
    ) {
      actions["dance"].play().paused = true;
      actions["dance"].stop();
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh
            name="ARpants"
            geometry={nodes.ARpants.geometry}
            material={materials.pants_MAT}
            skeleton={nodes.ARpants.skeleton}
          />
          <skinnedMesh
            name="ARpantsPocket"
            geometry={nodes.ARpantsPocket.geometry}
            material={materials.pants_MAT}
            skeleton={nodes.ARpantsPocket.skeleton}
          />
          <skinnedMesh
            name="base_head001"
            geometry={nodes.base_head001.geometry}
            material={materials.base_head_MAT}
            skeleton={nodes.base_head001.skeleton}
          />
          <skinnedMesh
            name="ARbody"
            geometry={nodes.ARbody.geometry}
            material={materials.Lyquid_body_MAT}
            skeleton={nodes.ARbody.skeleton}
          />
          <skinnedMesh
            name="BomberJacket"
            geometry={nodes.BomberJacket.geometry}
            material={materials.bomberJacket_MAT}
            skeleton={nodes.BomberJacket.skeleton}
          />
          <skinnedMesh
            name="ARsneakers_lf"
            geometry={nodes.ARsneakers_lf.geometry}
            material={materials.sneakers_white_MAT}
            skeleton={nodes.ARsneakers_lf.skeleton}
          />
          <skinnedMesh
            name="ARsneakers_rt"
            geometry={nodes.ARsneakers_rt.geometry}
            material={materials.sneakers_white_MAT}
            skeleton={nodes.ARsneakers_rt.skeleton}
          />
        </group>
        <mesh
          name="hair_Wu_Lyquid"
          castShadow
          receiveShadow
          geometry={nodes.hair_Wu_Lyquid.geometry}
          material={materials.Foam_Hair_C}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload(beergang);
