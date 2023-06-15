import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTemplate from "./MainTemplate";
import Concepts from "./Concepts";
import IntroReact from "./components/IntroReact";
import Rendering from "./components/Rendering";
import Component from "./components/Component";
import Props from "./components/Props";
import State from "./components/State";
import LifecycleMethods from "./components/LifecycleMethods";
import HandlingEvent from "./components/HandlingEvent";
import ConditionalRendering from "./components/ConditionalRendering";
import TypeCheck from "./components/TypeChecking";
import { UniDirectionalDataFlow } from "./components/UniDirectionalDataFlow";
import ParentComponent from "./components/ContextAPI";
import Forms from "./components/Forms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainTemplate />} />
          <Route path="/template" element={<Concepts />} />
          <Route path="/introduction" element={<IntroReact />}></Route>
          <Route path="/rendering" element={<Rendering />}></Route>
          <Route path="/component" element={<Component />}></Route>
          <Route path="/props" element={<Props />}></Route>
          <Route path="/state" element={<State />}></Route>
          <Route
            path="/lifecycle-methods"
            element={<LifecycleMethods />}
          ></Route>
          <Route path="/handling-events" element={<HandlingEvent />}></Route>
          <Route
            path="/conditional-rendering"
            element={<ConditionalRendering />}
          ></Route>
          <Route path="/forms" element={<Forms />}></Route>
          <Route
            path="/type-checking"
            element={
              <TypeCheck name={"Innova"} age={25} />
            }
          ></Route>
          <Route
            path="/uni-directional"
            element={<UniDirectionalDataFlow />}
          ></Route>
          <Route
            path="/context-API"
            element={<ParentComponent />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
