import { useGLTF } from "@react-three/drei";
import { useRef } from "react"

export const TargetD = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')


  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene}  />      
    </mesh>
  )
}
