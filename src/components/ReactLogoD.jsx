import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react"



export const ReactLogoD = (props) => {
    const reactLogoRef = useRef();
    const {scene} = useGLTF();

 

  return (
    <mesh {...props} ref={reactLogoRef}  />
  )
}
