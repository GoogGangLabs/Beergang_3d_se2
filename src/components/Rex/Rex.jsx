import React, { useEffect, useLayoutEffect, useRef } from "react";
import rex from "assets/3d/rex_roar.glb";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { MathUtils, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export default function Rex(props) {
  const group = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF(rex);
  const { actions } = useAnimations(animations, group);

  useEffect(() => void (actions["Rex-Roar"].play().paused = true), [actions]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (actions["Rex-Roar"].play().paused) {
        actions["Rex-Roar"].play().repetitions = 1;
        actions["Rex-Roar"].play().paused = false;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [actions]);

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 100, ease: "power4.easeIn" },
    });

    tl.current
      .to(group.current.position, {}, 0)
      .to(group.current.position, { x: 5, z: 20 }, 4)
      .to(group.current.position, { z: 10 }, 20);
  });

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  useFrame((state, delta) => {
    const action = actions["Rex-Roar"];
   
    //damp => (current, target, speed of movement, delta)
    // action.time = MathUtils.damp(
    //   action.time,
    //   action.getClip().duration * scroll.offset,
    //   3,
    //   delta
    // );

    state.camera.position.set(0, 0, -scroll.offset * 20 + 5);

    tl.current.seek(tl.current.duration() * scroll.offset);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name="1a6866c38d47491bbfee7aa65ad01762fbx_1"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.03}
                >
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="Object_4_4">
                        <group name="GLTF_created_0">
                          <primitive object={nodes.GLTF_created_0_rootJoint} />
                          <group name="Object_7_7_correction">
                            <group name="Object_7_7" />
                          </group>
                          <group name="Object_8_8_correction">
                            <group name="Object_8_8" />
                          </group>
                          <skinnedMesh
                            name="Object_88"
                            geometry={nodes.Object_88.geometry}
                            material={materials.RexBodyMat_Colorized}
                            skeleton={nodes.Object_88.skeleton}
                          ></skinnedMesh>
                          <skinnedMesh
                            name="Object_91"
                            geometry={nodes.Object_91.geometry}
                            material={materials.RexHeadMat_Colorized}
                            skeleton={nodes.Object_91.skeleton}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(rex);
