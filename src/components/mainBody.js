  
import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./earth/index";
import { MainSection } from "./mainsection";
import { TopSection } from "./topsection";
const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 10%;
`;

function App() {
  return (
    <CanvasContainer id="earthSection" > 
      <TopSection />
        <Canvas > 
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
    </CanvasContainer>
  );
}

export default App;