// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

// Model component
const HeroModel = () => {
  const { scene } = useGLTF('/models/target-stand/react.glb');

  scene.scale.set(1, 1, 1);
  scene.position.set(0, -1, 0);

  return <primitive object={scene} />;
};

useGLTF.preload('/models/target-stand/react.glb');

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto paddingX flex flex-row items-start gap-5">
        {/* hero text / UI content */}
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full bg-transparent"
      >
        <Suspense fallback={null}>
          <HeroModel />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
