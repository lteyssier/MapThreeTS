/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: tux (https://sketchfab.com/tux)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/arc-de-triumphe-paris-3ecde6dbbcde48ffb84ea7fe93485cd7
Title: Arc de Triumphe Paris
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
  };
  materials: {
    mat0: THREE.MeshBasicMaterial;
  };
};

export function Arc(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/arct.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={20}  
        position={[-7000,5000,14000]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.mat0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.mat0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/arct.glb");
