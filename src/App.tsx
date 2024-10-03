import { Canvas } from '@react-three/fiber'

import CanvasChildrens from './components/CanvasChildrens.tsx'

export default function App() {
  return (
    <div className="size-full bg-black">
      <Canvas camera={{ position: [5, 5, 5] }} gl={{ antialias: true }}>
        <CanvasChildrens />
      </Canvas>
    </div>
  )
}
