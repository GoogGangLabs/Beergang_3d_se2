import { useFBX, useScroll } from "@react-three/drei";
import React, { useRef } from "react";
import beergang from "assets/3d/beergang-1.fbx";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";
import { useRecoilValue } from "recoil";
import { pageNumState } from "store/atoms";

const BeergangTest1 = () => {
  const fbxLoad = useFBX(beergang);
  const scroll = useScroll();
  const pageNum = useRecoilValue(pageNumState);
  const action = useRef();

  useEffect(() => {
    fbxLoad.mixer = new AnimationMixer(fbxLoad);
    action.current = fbxLoad.mixer.clipAction(fbxLoad.animations[0]);
    action.current.play();
  }, [fbxLoad]);

  useFrame((state, delta) => {

    //카메라 이동
    const firstMove = scroll.range(0, 1 / pageNum);
    if (firstMove < 1) {
           state.camera.position.set(
             1.1 * firstMove,0,5 - firstMove * 0.7
           );
    }

    //애니메이션
    if (fbxLoad) {
      if (scroll.range(0, 1/pageNum) < 1) {
        if (action.current) {
          action.current.enabled = true;
          action.current.paused = false;
        }
      } else if (scroll.range(1/pageNum, 1/pageNum) < 1 && !action.current.paused) {
        action.current.reset().fadeOut(0.5);
        action.current.paused = true;
      }
      fbxLoad.mixer.update(delta);
    }
  });

  return <primitive object={fbxLoad} scale={0.3} dispose={null} position={[-0.1,-5,2.1]}/>;
};

export default BeergangTest1;
