import { useFBX, useScroll } from "@react-three/drei";
import React, { useRef, useState } from "react";
import beergang from "assets/3d/beergang-1.fbx";
import { useEffect } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useFrame, useThree } from "@react-three/fiber";
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
  }, [fbxLoad]);

  useFrame((state, delta) => {
    if (fbxLoad) {
      if (scroll.offset <= 1 / pageNum) {
        action.current.play();

      } else if (scroll.offset > 1 / pageNum && !action.current.paused) {
        action.current.reset().fadeOut(0.3);
        action.current.paused = true;
      
      }
      fbxLoad.mixer.update(delta);
    }

  });

  return <primitive object={fbxLoad} scale={0.1} dispose={null} />;
};

export default BeergangTest1;
