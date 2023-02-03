import React, { useRef } from "react";
import example from "../../assets/3d/example.glb";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Example(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(example);
  const { actions } = useAnimations(animations, group);
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

useGLTF.preload("/example.glb");
