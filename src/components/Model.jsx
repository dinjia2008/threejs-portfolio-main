/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/Poimandres.gltf');
  return (
    <group ref={group} {...props} dispose={null} scale={0.5}>
      <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
    </group>
  );
}

useGLTF.preload('/models/Poimandres.gltf');
