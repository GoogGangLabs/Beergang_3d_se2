import { useFBX } from "@react-three/drei";
import React, { useRef } from "react";
import beergang from "assets/3d/beergang-1.fbx";
import { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { AnimationMixer, MathUtils, Vector3 } from "three";
import { useRecoilValue } from "recoil";
import { introAcceptedState, pageNumState, sceneStartState } from "store/atoms";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";

const BeergangTest1 = () => {
  const fbxLoad = useFBX(beergang);
  const scroll = useScroll();
  const pageNum = useRecoilValue(pageNumState);
  const sceneStart = useRecoilValue(sceneStartState);
  const clicked = useRecoilValue(introAcceptedState);

  const action = useRef();

  useEffect(() => {
    fbxLoad.mixer = new AnimationMixer(fbxLoad);
    action.current = fbxLoad.mixer.clipAction(fbxLoad.animations[0]);
    action.current.play().fadeIn(0.2);
  }, [fbxLoad]);

  useFrame((state, delta) => {
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
    const fifthWholeScene = scroll.range(18.8/pageNum, 4.5/pageNum);
    const sixthWholeScene = scroll.range(23.3/pageNum, 4.5 / pageNum);
    const seventhWholeScene = scroll.range(27.8/pageNum, 2 / pageNum);
    const lastScene = scroll.range(31.8/pageNum, 3 / pageNum);

    if (sceneStart) {
      if (firstScene < 1) {
        state.camera.position.set(
          Math.atan((Math.PI * firstScene) / 2) * 0.2,
          0,
          Math.atan((Math.PI * firstScene) / 2) * -0.11
        );
      } else if (secondSceneEnd < 1) {
        state.camera.position.set(
          0.2 + secondScene * -0.5,
          0,
          -0.11 +
            Math.sin((secondSceneStart * Math.PI) / 8) / 1.5 +
            Math.sin(secondScene * Math.PI) / 2 -
            Math.sin((secondSceneEnd * Math.PI) / 8) / 1.5
        );
      } else if (thirdSceneEnd < 1) {
        state.camera.position.set(
          -0.3 + 0.3 * thirdSceneStart + 0.3 * thirdScene + 0.3 * thirdSceneEnd,
          0 - (0.1 * thirdSceneStart + 0.1 * thirdScene + 0.1 * thirdSceneEnd),
          -0.11 +
            (0.2 * thirdSceneStart + 0.2 * thirdScene + 0.2 * thirdSceneEnd)
        );
      } else if (fourthSceneEnd < 1) {
        state.camera.position.set(
          0.6 +
            fourthSceneStart * -0.3 +
            fourthScene * -0.3 +
            Math.atan((fourthSceneEnd * Math.PI) / 2) * -0.1,
          -0.3,
          0.49 +
            fourthSceneStart * 0.3 +
            Math.atan((fourthScene * Math.PI) / 2) * 0.4 +
            fourthSceneEnd * 0.3
        );
      } else if (fifthWholeScene < 1) {
        state.camera.position.set(
          -0.1 + fifthWholeScene * -0.2,
          -0.3 + Math.atan((fifthWholeScene * Math.PI) / 2) * 0.7,
          1.49 + Math.atan((fifthWholeScene * Math.PI) / 2) * -1.2
        );
      } else if (sixthWholeScene < 1) {
        state.camera.position.set(
          -0.3,
          0.4 + Math.atan(sixthWholeScene * Math.PI / 2) * -0.6,
          0.26
        );
      } else if (seventhWholeScene < 1) {
        state.camera.position.set(
          -0.3 + seventhWholeScene * 0.3,
          -0.2,
          0.26 + seventhWholeScene * 0.1
        );
      } else if (lastScene < 1) {
        state.camera.position.set(
          0,
          -0.2 + lastScene * -1.7,
          0.36
        );
      }
    }

    //애니메이션
    if (fbxLoad && clicked) {
      if (firstScene < 1) {
        if (action.current) {
          action.current.enabled = true;
          action.current.paused = false;
          // action.current.play().fadeIn(0.7);
        }
      } else if (secondScene < 1 && !action.current.paused) {
        action.current.reset().fadeOut(0.7);
        action.current.paused = true;
      }
      fbxLoad.mixer.update(delta);
    }
  });

  return (
    <>
      <primitive
        object={fbxLoad}
        scale={0.05}
        dispose={null}
        position={[-0.04, -0.8, -0.55]}
      />
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          bokehScale={4}
          focalLength={0.05}
        />
      </EffectComposer>
    </>
  );
};

export default BeergangTest1;
