import React, { useEffect, useLayoutEffect, useRef } from "react";
import example from "../../assets/3d/example.glb";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

export default function Example(props) {
  const group = useRef();
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF(example);
  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  useEffect(() => void (actions["Scene"].play().paused = true), [actions]);

  useFrame((state, delta) => {
    const action = actions["Scene"];
    const offset = 1 - scroll.offset;

    //damp => (current, target, speed of movement, delta)
    action.time = MathUtils.damp(
      action.time,
      action.getClip().duration * scroll.offset,
      3,
      delta
    );

    //최초에 카메라 offset을 계산 후, 0으로 수렴하도록 함.
    state.camera.position.set(
      Math.sin(offset) * -10,
      Math.atan(offset * Math.PI * 3) * 3,
      Math.cos((offset * Math.PI) / 4) * -10 + 3
    );

    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Thugfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="1018" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_574"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <skinnedMesh
                      name="Object_575"
                      geometry={nodes.Object_575.geometry}
                      material={materials["Retopo.010"]}
                      skeleton={nodes.Object_575.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Eyes019"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(example);
