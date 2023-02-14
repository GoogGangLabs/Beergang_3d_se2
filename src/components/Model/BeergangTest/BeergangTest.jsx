import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BeergangTest(props) {
  const { nodes, materials } = useGLTF('/beergang_hairfoam_test.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group position={[0, -7.39, 0]} scale={0.4} />
        <group
          position={[-0.17, -0.71, -0.32]}
          rotation={[1.76, -0.13, 0.16]}
          scale={0.09}
        >
          <mesh
            geometry={nodes.headphones_01.geometry}
            material={nodes.headphones_01.material}
          />
          <mesh
            geometry={nodes.headphones_02.geometry}
            material={nodes.headphones_02.material}
          />
          <mesh
            geometry={nodes.headphones_03.geometry}
            material={materials["Acc_Headphone_Red_PVC.001"]}
          />
          <mesh
            geometry={nodes.headphones_04.geometry}
            material={materials["Acc_Headphone_Red_leather.001"]}
          />
          <mesh
            geometry={nodes.headphones_05.geometry}
            material={materials["Acc_Headphone_Red_leather.001"]}
          />
          <mesh
            geometry={nodes.headphones_06.geometry}
            material={materials["Acc_Headphone_Red_leather.001"]}
          />
          <mesh
            geometry={nodes.headphones_07.geometry}
            material={materials["Acc_Headphone_Red_leather.001"]}
          />
          <mesh
            geometry={nodes.headphones_08.geometry}
            material={materials["Acc_Headphone_Red_metal.001"]}
          />
          <mesh
            geometry={nodes.headphones_09.geometry}
            material={materials["Acc_Headphone_Red_metal.001"]}
          />
          <mesh
            geometry={nodes.headphones_10.geometry}
            material={materials["Acc_Headphone_Red_metal.001"]}
          />
          <mesh
            geometry={nodes.headphones_11.geometry}
            material={materials["Acc_Headphone_Red_PVC.001"]}
          />
          <mesh
            geometry={nodes.headphones_12.geometry}
            material={materials["Acc_Headphone_Red_PVC.001"]}
          />
          <mesh
            geometry={nodes.headphones_13.geometry}
            material={materials["Acc_Headphone_Red_PVC.001"]}
          />
          <mesh
            geometry={nodes.headphones_16.geometry}
            material={materials["Acc_Headphone_Red_metal.001"]}
          />
          <mesh
            geometry={nodes.headphones_17.geometry}
            material={materials["Acc_Headphone_Red_PVC.001"]}
          />
          <mesh
            geometry={nodes.headphones_18.geometry}
            material={materials["Acc_Headphone_Red_leather.001"]}
          />
          <mesh
            geometry={nodes.headphones_19.geometry}
            material={materials["Acc_Headphone_Red_leather.001"]}
          />
          <mesh
            geometry={nodes.headphones_20.geometry}
            material={materials["Acc_Headphone_Red_metal.001"]}
          />
          <mesh
            geometry={nodes.headphones_21.geometry}
            material={materials["Acc_Headphone_Red_metal.001"]}
          />
          <mesh
            geometry={nodes.headphones_22.geometry}
            material={materials["Acc_Headphone_Red_metal.001"]}
          />
          <mesh
            geometry={nodes.headphones_23.geometry}
            material={materials["Acc_Headphone_Red_metal.001"]}
          />
          <mesh
            geometry={nodes.headphones_24.geometry}
            material={materials["Acc_Headphone_Red_metal.001"]}
          />
          <mesh
            geometry={nodes.headphones_25.geometry}
            material={materials["Acc_Headphone_Red_leather.001"]}
          />
        </group>
        <group
          position={[-0.03, 0.55, -0.11]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0011}
        >
          <mesh
            geometry={nodes.button_3.geometry}
            material={materials["button.002"]}
            position={[-633.14, 57.31, 661.38]}
            scale={10}
          />
          <mesh
            geometry={nodes.buttonhole_low.geometry}
            material={materials["Varsity Jacket 01.006"]}
            position={[4.61, 105.09, 15.7]}
            scale={10}
          />
          <group>
            <mesh
              geometry={nodes.Varsity_Jacket_low_2001.geometry}
              material={materials["Varsity Jacket 01.007"]}
            />
            <mesh
              geometry={nodes.Varsity_Jacket_low_2001_1.geometry}
              material={materials["Varsity Jacket 01.006"]}
            />
          </group>
        </group>
        <group
          position={[-0.03, -0.61, -0.11]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.09}
        >
          <group>
            <group
              position={[0.22, 0.4, -18.57]}
              rotation={[1.72, -0.47, 0.13]}
              scale={0.56}
            >
              <mesh
                geometry={nodes.eyeballLf.geometry}
                material={materials["04_eyeball_Blue_mat"]}
              />
            </group>
            <group
              position={[-0.22, 0.4, -18.57]}
              rotation={[1.72, 0.47, 3.01]}
              scale={0.56}
            >
              <mesh
                geometry={nodes.eyeballRt.geometry}
                material={materials["04_eyeball_Purple_mat"]}
              />
            </group>
          </group>
          <group>
            <group>
              <mesh
                geometry={nodes.eyebrow_lf.geometry}
                material={materials.eyebrow_Basic}
              />
              <mesh
                geometry={nodes.eyebrow_rt.geometry}
                material={materials.eyebrow_Basic}
              />
              <mesh
                geometry={nodes.teethLow.geometry}
                material={materials.Inside_Basic}
              />
              <mesh
                geometry={nodes.teethUp.geometry}
                material={materials.Inside_Basic}
              />
              <mesh
                geometry={nodes.tongue.geometry}
                material={materials.Inside_Basic}
              />
            </group>
            <mesh
              geometry={nodes.head.geometry}
              material={materials.head_Type_L_Basic}
            />
          </group>
          <mesh
            geometry={nodes.body_Lyquid.geometry}
            material={materials.body_Type_L_Basic}
          />
          <mesh
            geometry={nodes.eyecoat_Lf.geometry}
            material={materials.eyecoat}
          />
          <mesh
            geometry={nodes.eyecoat_Rt.geometry}
            material={materials.eyecoat}
          />
          <mesh
            geometry={nodes.hair_Wu_Lyquid.geometry}
            material={materials.Foam_Hair_L}
          />
        </group>
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials.Material}
          position={[0, 0.04, 0.16]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.34, 1, 0.29]}
        />
        <mesh
          geometry={nodes.ARpants.geometry}
          material={nodes.ARpants.material}
          position={[-0.03, -0.61, -0.11]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.09}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/beergang_hairfoam_test.glb");
