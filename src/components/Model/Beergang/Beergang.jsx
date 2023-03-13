import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import beergang from "assets/3d/beergang_test1.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { pageNumState } from "store/atoms";
import { useRecoilValue } from "recoil";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";

//이전 카메라 위치에서의 이동거리 차
const initialCameraZ = 5;

const cameraTargetX_1 = 0.1;
const cameraTargetY_1 = 0.03;
const cameraTargetZ_1 = -0.21;

const cameraTargetX_2 = -0.5;
const cameraTargetY_2 = -0.1;
const cameraTargetZ_2 = 0.1;

const cameraTargetX_3 = 1.5;
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
  const pageNum = useRecoilValue(pageNumState);
  const three = useThree();
  const previousAction = usePrevious(action);

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  useFrame((state, delta) => {
    //ex)5페이지 기준 = 0.2 스크롤비율 * 5 = 1.0
    //range함수를 쓸 수 있지만 아래 수식을 이용하면 범위 입력 필요 X
    // const offsetPerPage = (scroll.offset % (1 / pageNum)) * pageNum;

    // } else if (scroll.offset <= 4 / pageNum) {

    // }

    // //페이지 전환이 완전히 되기 전에 동작2로 넘어가야함. (1/5 페이지)
    // if (scroll.offset < 1 / pageNum) {
    //   actions["dance"].play().paused = false;
    // } else if (
    //   scroll.offset >=
    //   1 / pageNum
    //   // &&
    //   // !actions["dance"].play().paused
    //   // Math.ceil(actions["dance"].getClip().duration) ===
    //   //   Math.ceil(actions["dance"].time)
    // ) {
    //   actions["dance"].play().paused = true;
    //   actions["dance"].fadeOut(0.2);
    //   actions["dance"].stop();
    //   actions["dance"].reset();
    // }
    // if (scroll.offset < 2 / pageNum) {

    // } else if (scroll.offset >= 1 / pageNum && action === "dance") {
    //   setAction("");
    //   actions["dance"].fadeOut(0.5);
    // }

    const firstScene = scroll.range(0, 3 / pageNum);
    const secondSceneStart = scroll.range(3 / pageNum, 1 / pageNum);
    const secondScene = scroll.range(4 / pageNum, 4.5 / pageNum);
    const secondSceneEnd = scroll.range(8.5 / pageNum, 1 / pageNum);
    const thirdSceneStart = scroll.range(9.8 / pageNum, 1.5 / pageNum);
    const thirdScene = scroll.range(11.3 / pageNum, 1.5 / pageNum);
    const thirdSceneEnd = scroll.range(12.8 / pageNum, 1.5 / pageNum);
    const fourthSceneStart = scroll.range(14.3 / pageNum, 1.5 / pageNum);
    const fourthScene = scroll.range(15.8 / pageNum, 1.5 / pageNum);
    const fourthSceneEnd = scroll.range(17.3 / pageNum, 1.5 / pageNum);
    const fifthWholeScene = scroll.range(18.8 / pageNum, 4.5 / pageNum);
    const sixthWholeScene = scroll.range(23.3 / pageNum, 4.5 / pageNum);
    const seventhWholeScene = scroll.range(27.8 / pageNum, 2 / pageNum);
    const lastScene = scroll.range(30.8 / pageNum, 2 / pageNum);
    if (firstScene < 1) {
      state.camera.position.set(
        Math.atan((Math.PI * firstScene) / 2) * 2,
        0,
        Math.atan((Math.PI * firstScene) / 2) * -1.5
      );
      // state.camera.lookAt(0, 0, -10)
    } else if (secondSceneEnd < 1) {
      state.camera.position.set(
        2 + secondScene * -4,
        0,
        -1.5 +
          Math.sin((secondSceneStart * Math.PI) / 8) * 3 +
          Math.sin(secondScene * Math.PI) * 4 -
          Math.sin((secondSceneEnd * Math.PI) / 8) * 3
      );
      // state.camera.lookAt(0, 0, -10)
      group.current.rotation.set(0, secondScene * (-Math.PI / 8), 0);
    } else if (thirdSceneEnd < 1) {
      state.camera.position.set(
        -2 + 2.2 * thirdSceneStart + 2.2 * thirdScene + 2.2 * thirdSceneEnd,
        -thirdSceneStart - thirdScene - thirdSceneEnd,
        -1.5 + (1.5 * thirdSceneStart + 1.5 * thirdScene + 1.5 * thirdSceneEnd)
      );
      group.current.rotation.set(
        0,
        -Math.PI / 8 + thirdScene * (Math.PI / 8),
        0
      );
    } else if (fourthSceneEnd < 1) {
      state.camera.position.set(
        4.6 +
          fourthSceneStart * -2 +
          fourthScene * -2 +
          Math.atan((fourthSceneEnd * Math.PI) / 2) * -1,
        -3,
        3 +
          fourthSceneStart * 3 +
          Math.atan((fourthScene * Math.PI) / 2) * 4 +
          fourthSceneEnd * 3
      );
      group.current.rotation.set(
        0,
        fourthScene * (-Math.PI / 8),
        0
      );
    } else if (fifthWholeScene < 1) {
      state.camera.position.set(
        -0.4 + fifthWholeScene * -1,
        -3 + Math.atan((fifthWholeScene * Math.PI) / 2) * 5,
        10 + Math.atan((fifthWholeScene * Math.PI) / 2) * -8.5
      );
    } else if (sixthWholeScene < 1) {
      state.camera.position.set(
        -1.4,
        2 + Math.atan((sixthWholeScene * Math.PI) / 2) * -4,
        1.5
      );
    } else if (seventhWholeScene < 1) {
      state.camera.position.set(
        -1.4 + seventhWholeScene * 1.4,
        -2,
        1.5 + seventhWholeScene * 1
      );
    } else if (lastScene < 1) {
      state.camera.position.set(0, -2 + lastScene * -15, 2.5);
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button_3.geometry}
        material={nodes.button_3.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earPiercing_geo.geometry}
        material={materials.Jewelry_Ears_Ring}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyecoat_Lf.geometry}
        material={materials.eye_corona}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyecoat_Rt.geometry}
        material={materials.eye_corona}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hair_Wu_Lyquid.geometry}
        material={materials.Hair_L_Wu}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyebrow_lf.geometry}
        material={materials.eyebrow_Basic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyebrow_rt.geometry}
        material={materials.eyebrow_Basic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.teethLow.geometry}
        material={materials.Inside_Basic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.teethUp.geometry}
        material={materials.Inside_Basic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tongue.geometry}
        material={materials.Inside_Basic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyeballRt.geometry}
        material={materials["04_eyeball_Brown_mat"]}
        position={[-0.22, 18.56, 0.4]}
        rotation={[-1.48, -0.12, 2.67]}
        scale={0.56}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyeballLf.geometry}
        material={materials["04_eyeball_Purple_mat"]}
        position={[0.22, 18.56, 0.4]}
        rotation={[1.66, -0.12, -0.47]}
        scale={0.56}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Varsity_Jacket_retopo.geometry}
        material={materials["Material #102"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_Lyquid.geometry}
        material={materials.body_Type_L_Basic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head.geometry}
        material={materials.head_Type_L_Basic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ARpants.geometry}
        material={materials.pants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ARsneakers_lf.geometry}
        material={materials.sneakers_red}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ARsneakers_rt.geometry}
        material={materials.sneakers_red}
        scale={0.1}
      />
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
