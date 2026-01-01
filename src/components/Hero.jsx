import { useRef, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { loadModelWithErrorHandling } from '../utils/errorHandler';

const Hero = () => {
  const sceneRef = useRef();

  useEffect(() => {
    if (sceneRef.current) {
      const scene = sceneRef.current;
      const renderer = scene.getRenderer();
      const modelUrl = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf';

      loadModelWithErrorHandling(
        scene,
        renderer,
        modelUrl,
        // eslint-disable-next-line no-unused-vars
        (_gltf) => {
          console.log('Model loaded successfully');
        },
        (error) => {
          console.error('Model load failed:', error);
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto paddingX flex flex-row items-start gap-5">
        {/* ...existing code... */}
      </div>

      <Canvas
        ref={sceneRef}
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full bg-transparent"
      >
        <Suspense fallback={<div className="loading-spinner"></div>}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Preload all />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;