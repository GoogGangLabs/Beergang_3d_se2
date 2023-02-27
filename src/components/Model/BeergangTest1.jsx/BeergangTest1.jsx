import { useFBX } from "@react-three/drei";
import React, { useRef } from "react";
import beergang from "assets/3d/beergang-1.fbx";
import { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { AnimationMixer, MathUtils, Vector3 } from "three";
import { useRecoilValue } from "recoil";
import { introAcceptedState, pageNumState, sceneStartState } from "store/atoms";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";

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
    const fourthSceneStart = scroll.range(14.5 / pageNum, 1.5 / pageNum);
    const fourthScene = scroll.range(16 / pageNum, 1.5 / pageNum);
    const fourthSceneEnd = scroll.range(17.5 / pageNum, 1.5 / pageNum);
    

    if (sceneStart) {
      if (firstScene < 1) {
        state.camera.position.set(
          Math.atan((Math.PI * firstScene) / 2) * 0.2,
          0,
          Math.atan((Math.PI * firstScene) / 2) * -0.11
        );
        console.log(Math.atan((Math.PI * firstScene) / 2) * 0.2, "이것");
      } else if (secondSceneEnd < 1) {
        state.camera.position.set(
          0.2 + secondScene * -0.5,
          0,
          -0.11 +
            Math.sin((secondSceneStart * Math.PI) / 8) / 2 +
            Math.sin(secondScene * Math.PI) / 2 -
            Math.sin((secondSceneEnd * Math.PI) / 8) / 2
        );
      } else if (thirdSceneEnd < 1) {
        state.camera.position.set(
          -0.3 + 0.3 * thirdSceneStart + 0.3 * thirdScene + 0.3 * thirdSceneEnd,
          0 - (0.1 * thirdSceneStart + 0.1 * thirdScene + 0.1 * thirdSceneEnd),
          -0.11 +
            (0.2 * thirdSceneStart + 0.2 * thirdScene + 0.2 * thirdSceneEnd)
        );
      } else if (fourthSceneEnd < 1) {
        
      }
    }

    //애니메이션
    // if (fbxLoad && clicked) {
    //   if (firstScene < 1) {
    //     if (action.current) {
    //       action.current.enabled = true;
    //       action.current.paused = false;
    //       // action.current.play().fadeIn(0.7);
    //     }
    //   } else if (
    //     scroll.range(2 / pageNum, 1 / pageNum) < 1 &&
    //     !action.current.paused
    //   ) {
    //     action.current.reset().fadeOut(0.7);
    //     action.current.paused = true;
    //   }
    //   fbxLoad.mixer.update(delta);
    // }
  });

  return (
    <primitive
      object={fbxLoad}
      scale={0.05}
      dispose={null}
      position={[-0.04, -0.9, -0.6]}
    />
  );
};

export default BeergangTest1;
