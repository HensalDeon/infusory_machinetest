import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";

const Model = ({ url }) => {
    const { scene } = useGLTF(url);
    const modelRef = useRef();
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.001;
            modelRef.current.rotation.x += 0.001;
        }
    });
    return (
        <mesh ref={modelRef}>
            <primitive object={scene} position-y={0} rotation-y={0} />
        </mesh>
    );
};

const ModelViewer = ({ url }) => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{
                fov: 30,
                near: 0.1,
                far: 200,
                position: [4, 2, 6],
            }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={"jsdjdb"}>
                <Model url={url} />
            </Suspense>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    );
};

export default ModelViewer;
