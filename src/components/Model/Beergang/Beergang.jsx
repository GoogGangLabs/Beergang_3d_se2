import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import beergang from "assets/3d/beergang.glb";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const pageNum = 5;

//이전 카메라 위치에서의 이동거리 차
const initialCameraZ = 5;

const cameraTargetX_1 = 0.1;
const cameraTargetY_1 = 0.03;
const cameraTargetZ_1 = -0.21;

const cameraTargetX_2 = -0.5;
const cameraTargetY_2 = -0.1;
const cameraTargetZ_2 = 0.1;

const cameraTargetX_3 = 0.5;
const cameraTargetY_3 = -0.35;
const cameraTargetZ_3 = 1.3;

const cameraTargetX_4 = 0;
const cameraTargetY_4 = 0;
const cameraTargetZ_4 = 0;

export default function Beergang(props) {
  const group = useRef();
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF(beergang);
  const { actions } = useAnimations(animations, group);
  const [action, setAction] = useState("dance");
  const previousAction = usePrevious(action);

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  useFrame((state, delta) => {
    //ex)5페이지 기준 = 0.2 스크롤비율 * 5 = 1.0

    const offsetPerPage = (scroll.offset % (1 / pageNum)) * pageNum;
    // state.camera.lookAt(
    //   0, 0, 3.8
    // );
    if (scroll.offset <= 1 / pageNum) {
      state.camera.position.set(
        offsetPerPage * cameraTargetX_1,
        offsetPerPage * cameraTargetY_1,
        initialCameraZ + offsetPerPage * cameraTargetZ_1
      );
      state.camera.lookAt(
        offsetPerPage * cameraTargetX_1 * 25,
        offsetPerPage * cameraTargetY_1 * 25,
        initialCameraZ + offsetPerPage * cameraTargetZ_1 - 100
      );
    } else if (scroll.offset <= 2 / pageNum) {
      state.camera.position.set(
        cameraTargetX_1 + offsetPerPage * cameraTargetX_2,
        cameraTargetY_1 + offsetPerPage * cameraTargetY_2,
        initialCameraZ + cameraTargetZ_1 + offsetPerPage * cameraTargetZ_2
      );
      // state.camera.lookAt(
      //   cameraTargetX_1 * 25 + offsetPerPage * cameraTargetX_2 * 40,
      //   cameraTargetY_1 * 25 + offsetPerPage * cameraTargetY_2 * 25,
      //   initialCameraZ + cameraTargetZ_1 + offsetPerPage * cameraTargetZ_2 - 10
      // );
      state.camera.lookAt(
        cameraTargetX_1 * 25 * (1 - offsetPerPage),
        cameraTargetY_1 * 25 * (1 - offsetPerPage),
        initialCameraZ + cameraTargetZ_1 + offsetPerPage * cameraTargetZ_2 - 100
      );
    } else if (scroll.offset <= 3 / pageNum) {
      state.camera.position.set(
        cameraTargetX_1 + cameraTargetX_2 + offsetPerPage * cameraTargetX_3,
        cameraTargetY_1 + cameraTargetY_2 + offsetPerPage * cameraTargetY_3,
        initialCameraZ +
          cameraTargetZ_1 +
          cameraTargetZ_2 +
          offsetPerPage * cameraTargetZ_3
      );

      state.camera.lookAt(
        cameraTargetX_1 + offsetPerPage * cameraTargetX_3 * 80,
        cameraTargetY_1 + offsetPerPage * cameraTargetY_3 * 20,
        initialCameraZ +
          cameraTargetZ_1 +
          cameraTargetZ_2 +
          offsetPerPage * cameraTargetZ_3 - 100
      );
    } else if (scroll.offset <= 4 / pageNum) {
      state.camera.position.set(
        cameraTargetX_1 +
          cameraTargetX_2 +
          cameraTargetX_3 -
          offsetPerPage * cameraTargetX_3,
        cameraTargetY_1 +
          cameraTargetY_2 +
          cameraTargetY_3 -
          offsetPerPage * cameraTargetY_3,
        initialCameraZ +
          cameraTargetZ_1 +
          cameraTargetZ_2 +
          offsetPerPage * cameraTargetZ_3
      );
    }

    //페이지 전환이 완전히 되기 전에 동작2로 넘어가야함. (1/5 페이지)
    // if (scroll.offset < 1 / pageNum) {
    //   // actions["dance"].play().paused = false;
    // } else if (
    //   scroll.offset >=
    //   1 / pageNum
    //   // &&
    //   // !actions["dance"].play().paused
    //   // Math.ceil(actions["dance"].getClip().duration) ===
    //   //   Math.ceil(actions["dance"].time)
    // ) {
    //   // actions["dance"].play().paused = true;
    //   // actions["dance"].fadeOut(0.2);
    //   // actions["dance"].stop();
    //   // actions["dance"].reset();
    // }
    if (scroll.offset < 1 / pageNum) {
      //
    } else if (scroll.offset >= 1 / pageNum && action === "dance") {
      setAction("");
      actions["dance"].fadeOut(0.5);
    }
  });

  // useEffect(() => {
  //   actions["dance"].play();
  //   actions["dance"].fadeIn(0.2);
  // }, [actions]);

  // useEffect(() => {
  //   if (previousAction) {
  //     actions[previousAction].fadeOut(0.4);
  //     actions[action].stop();
  //   }
  //   actions[action].play();
  //   actions[action].fadeIn(0.2);
  // }, [actions, action, previousAction]);

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

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

useGLTF.preload(beergang);
