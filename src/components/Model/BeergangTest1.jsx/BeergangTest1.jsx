import { useFBX } from "@react-three/drei";
import React, { useRef } from "react";
import beergang from "assets/3d/beergang-1.fbx";
import { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { AnimationMixer, Vector3 } from "three";
import { useRecoilValue } from "recoil";
import { introAcceptedState, pageNumState, sceneStartState } from "store/atoms";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
const targetPosX_1 = 1.1;
const targetPosY_1 = 0;
const targetPosZ_1 = 4.3;
const targetVector_1 = new Vector3(targetPosX_1, targetPosY_1, targetPosZ_1);

const targetPosX_2 = -1.1;
const targetPosY_2 = 0;
const targetPosZ_2 = 4.3;
const targetVector_2 = new Vector3(targetPosX_2, targetPosY_2, targetPosZ_2);

const BeergangTest1 = () => {
  const fbxLoad = useFBX(beergang);
  const scroll = useScroll();
  const pageNum = useRecoilValue(pageNumState);
  const sceneStart = useRecoilValue(sceneStartState);
  const clicked = useRecoilValue(introAcceptedState);
  const action = useRef();
  const { viewport } = useThree();

  useEffect(() => {
    fbxLoad.mixer = new AnimationMixer(fbxLoad);
    action.current = fbxLoad.mixer.clipAction(fbxLoad.animations[0]);
    action.current.play();
  }, [fbxLoad]);

  useFrame((state, delta) => {
    //카메라 이동
    const firstScene = scroll.range(0, 2 / pageNum);
    // const firstScene = scroll.range(0, 1 / pageNum);
    // const secondScene_curve = scroll.curve(1 / pageNum, 2 / pageNum);

    if (sceneStart) {
      if (firstScene < 1) {
        state.camera.position.set(
          1.1 * firstScene,
          0,
          5 - firstScene * (5 - targetPosZ_1)
        );
      }

      // else if (secondScene < 1) {
      //   state.camera.position.set(-1.1,0,4.3)
      // }
    }

    //애니메이션
    if (fbxLoad && clicked) {
      if (firstScene < 1) {
        if (action.current) {
          action.current.enabled = true;
          action.current.paused = false;
        }
      } else if (
        scroll.range(2 / pageNum, 1 / pageNum) < 1 &&
        !action.current.paused
      ) {
        action.current.reset().fadeOut(0.7);
        action.current.paused = true;
      }
      fbxLoad.mixer.update(delta);
    }
  });

  return (
    <primitive
      object={fbxLoad}
      scale={0.3}
      dispose={null}
      position={[-0.1, -5, 2.1]}
    />
  );
};

export default BeergangTest1;
