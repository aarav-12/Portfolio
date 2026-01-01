// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { loadModelWithErrorHandling } from '../utils/errorHandler';

// this component runs *inside* the Canvas so we can access scene + renderer
const ModelLoader = () => {
  const { scene, gl: renderer } = useThree();

  useEffect(() => {
    const modelUrl =
      'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.glb';

    loadModelWithErrorHandling(
      scene,
      renderer,
      modelUrl,
      (gltf) => {
        console.log('Model loaded successfully');
        
        // make sure model is visible
        const model = gltf.scene;
        model.scale.set(1, 1, 1);      // resize if needed
        model.position.set(0, -1, 0);  // adjust placement so it's not off-screen
        
        scene.add(model); // <-- the missing piece that actually shows the model
      },
      (error) => {
        console.error('Model load failed:', error);
      }
    );
  }, [scene, renderer]);

  return null;
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto paddingX flex flex-row items-start gap-5">
        {/* ...your hero text or content... */}
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full bg-transparent"
      >
        <Suspense fallback={<div className="loading-spinner"></div>}>
          <ModelLoader />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Preload all />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
