import { Canvas } from '@react-three/fiber';
import Button from '../components/Button.jsx';
import { OrbitControls, Environment } from '@react-three/drei';
import { HackerRoom } from '../../public/models/HackerRoom/Scene.jsx';

const HeroD = () => {
  // Use media queries to determine screen size

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Adrian <span className="waving-hand">✌</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building products & Brands</p>
      </div>
      <Canvas className='w-full h-full absolute top-0 left-0 z-0'>
        <HackerRoom />
        <OrbitControls />
        <Environment preset="sunset" background  />
      </Canvas>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default HeroD;
