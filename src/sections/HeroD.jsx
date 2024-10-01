import { Suspense } from 'react';
import { Leva, useControls } from 'leva';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import { PerspectiveCamera } from '@react-three/drei';
import Button from '../components/Button.jsx';
import { TargetD } from '../components/TargetD';
import CanvasLoader from '../components/Loading.jsx';
import { HackerRoom } from '../../public/models/HackerRoom/Scene.jsx';
import { ReactLogoD } from '../components/ReactLogoD.jsx';
import Cube from '../components/Cube.jsx';
import Ring from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';

const HeroD = () => {
  // Use media queries to determine screen size
  const x = useControls('HackerRoom', {
    positionX: {
      value: 0,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 0,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 3,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 0.1,
      min: 0.1,
      max: 10,
    },
  });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  console.log(sizes);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Adrian <span className="waving-hand">✌</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building products & Brands</p>
        <p></p>
      </div>
      <Leva collapsed={true} />
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} scale={sizes.deskScale} />
            </HeroCamera>

            <group>
              <TargetD rotation={[0, Math.PI / 5, 0]} scale={1.5} position={sizes.targetPosition} />
              <ReactLogoD position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Ring position={sizes.ringPosition} />
            </group>
            <directionalLight intensity={1.5} />
            <ambientLight intensity={0.5} />
            {/* <OrbitControls /> */}
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
