import { Canvas } from '@react-three/fiber';
import Button from '../components/Button.jsx';
import { OrbitControls } from '@react-three/drei';
import { HackerRoom } from '../../public/models/HackerRoom/Scene.jsx';
import { Suspense } from 'react';
import CanvasLoader from '../components/Loading.jsx';
import { Leva, useControls } from 'leva';

const HeroD = () => {
  // Use media queries to determine screen size
  const x = useControls('HackerRoom', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0.5,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0.5,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0.5,
      min: -10,
      max: 10,
    },
    scale: {
      value: 1,
      min: 0.1,
      max: 10,
    },
  });

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Adrian <span className="waving-hand">✌</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building products & Brands</p>
      </div>
      <Leva />
      <div   className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <HackerRoom
              position={[x.positionX, x.positionY, x.positionZ]}
              rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              scale={x.scale}
            />
            <directionalLight intensity={1.5} />
            <ambientLight intensity={0.5} />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default HeroD;
