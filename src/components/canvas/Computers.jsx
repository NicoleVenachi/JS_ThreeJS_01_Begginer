import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; //canvas pa dibujar
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // helpers to draw

import CanvasLoader from "../Loader"; //un simple loader mientras se pone la img

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf"); //import del 3D modelo, GLTF (from public forlder)

  return (
    <mesh>
      {/* mesh, container de 3js elements */}

      <hemisphereLight intensity={0.15} groundColor='black' />
      {/* ligth to see thins on th emsh */}

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow //creo una sombrita
        shadow-mapSize={1024}
      />

      <pointLight intensity={1} />
      {/* glare o unto de luz */}


      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      {/* en primitive, metemos el 3js element a mostrar, ajustamos su tamaño y tales */}
    </mesh>
  );
};

const ComputersCanvas = () => {
  // canvsa to show/place the 3js elements
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows // le meto shados
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }} //posición x, y, z, y fov se enceuntran probando
      gl={{ preserveDrawingBuffer: true }} // gl pa properly render el model
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* suspense para tener un loadder mientras el modelo carga. i.e., dynamic importing */}

        {/*  interfaz a renderizar, el pc y los orbit controls */}
        <OrbitControls
          enableZoom={false} // no zoom
          maxPolarAngle={Math.PI / 2} // para no rotarlo todo un angulo, isno limiarlo
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        {/* render del pc  */}

      </Suspense>

      <Preload all />
      {/* preload de todo */}
    </Canvas>
  );
};

export default ComputersCanvas;