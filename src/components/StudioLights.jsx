import { Lightformer } from "@react-three/drei"
import { Environment } from "@react-three/drei"

const StudioLights = () => {
    return (
       <group name="lights">
        <Environment resolution={256}>
            <group>
                <Lightformer
                form='rect'
                intensity={10}
                rotation-y={Math.PI / 2}
                scale={10}
                position={[-10, 5, -5]}
                />
                 <Lightformer
                form='rect'
                intensity={10}
                rotation-y={Math.PI / 2}
                scale={10}
                position={[-10, 5, 10]}
                />
            </group>
        </Environment>
        <spotLight 
        position={[-2, 10, 5]} 
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2} />
        <spotLight 
        position={[0, -25, 10]} 
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2} />
        <spotLight 
        position={[0, 15, 5]} 
        angle={0.15}
        decay={0.1}
        intensity={Math.PI * 1} />

        </group>
    )
}

export default StudioLights