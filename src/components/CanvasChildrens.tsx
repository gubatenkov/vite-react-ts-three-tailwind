import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

export default function CanvasChildrens() {
  const boxRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (boxRef.current) {
      boxRef.current.rotation.y = clock.elapsedTime / 3
    }
  })

  return (
    <>
      <OrbitControls />
      <mesh ref={boxRef}>
        <meshBasicMaterial color="green" wireframe />
        <boxGeometry args={[3, 3, 3]} />
      </mesh>
    </>
  )
}
