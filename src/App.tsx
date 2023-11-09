import { useFrame, Vector3 } from "@react-three/fiber";
import "maplibre-gl/dist/maplibre-gl.css";
import { FC, useRef, useState } from "react";
import Map from "react-map-gl/maplibre";
import { Mesh } from "three";
import { Canvas } from "react-three-map/maplibre";
import { Garnier } from "./components/garnier";
import { Eiffel } from "./components/towermodel";
import { Police } from "./components/police";
import { Arc } from "./components/arcmodel";
import { Notre } from "./components/notre";
import { Environment } from "@react-three/drei";

export default { title: "Canvas" };
const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';
const Box: FC<{ position: Vector3 }> = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  //useFrame((_state, delta) => (ref.current!.rotation.x += delta));
  //useFrame((_state, delta) => (ref.current!.rotation.z -= delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={ 2000}
      //onClick={() => click(!clicked)}
      //onPointerOver={() => hover(true)}
      //onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={ "orange"} />
    </mesh>
  );
};
const Box2: FC<{ position: Vector3 }> = (props) => {
  const ref = useRef<Mesh>(null);
  return (
    <mesh
      {...props}
      ref={ref}
      scale={ 5}
    >
      <Garnier/>
    </mesh>
  );
};

export function App() {
  return (
    <div style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}>
      <Map
        antialias
        initialViewState={{
          latitude: 48.856614,
          longitude:2.3522219,
          zoom: 10,
          pitch: 60,
        }}
        mapStyle={MAP_STYLE}
      >
        <Canvas latitude={48.856614} longitude={2.3522219}>
          <hemisphereLight
            args={["#ffffff", "#60666C"]}
            position={[1, 4.5, 3]}
          />
          <Environment preset="city"/>
          <group>
              <Garnier />
              <Eiffel/>
              <Police/>
              <Arc/>
              <mesh>
                <Box position={[1000,0,10000]}/>
              </mesh>
              <mesh>
                <Box position={[-5000,0,-10000]}/>
              </mesh>
          </group>
          
        </Canvas>
      </Map>
    </div>
  );
}
