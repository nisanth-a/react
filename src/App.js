import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTemplate from "./MainTemplate";
import Concepts from "./Concepts";
import IntroReact from "./components/IntroReact";
import Rendering from "./components/Rendering";
import Component from "./components/Component";
import Props from "./components/Props/Props";
import LifecycleMethods from "./components/LifecycleMethods";
import HandlingEvent from "./components/HandlingEvent";
import ConditionalRendering from "./components/ConditionalRendering";
import TypeCheck from "./components/TypeChecking";
import { UniDirectionalDataFlow } from "./components/UniDirectionalDataFlow";
import ParentComponent from "./components/ContextAPI";
import Forms from "./components/Forms";
import Composition from "./components/Composition";
import StateParent from "./components/lifting-state-up/StateParent";
import Counter from "./components/State/Counter";
import SimpleRef from "./components/Refs-concepts/SimpleRef";
import LogIn from "./components/Refs-concepts/LogIn";
import VideoPlayer from "./components/Refs-concepts/VideoPlayer";
import HomeRouting from "./components/Routing/HomeRouting";
import Employees from "./components/Routing/Employees";
import Departments from "./components/Routing/Departments";
import Projects from "./components/Routing/Projects";
import Fragments from "./components/Fragments";
import Calculator from "./components/react-ws/calculator/Calculator";
import TodoApp from "./components/react-ws/Todo-App/My_Todo";

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
          <Route path="/state" element={<Counter />}></Route>
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
          <Route path="/lifting-state-up" element={<StateParent />}></Route>
          <Route
            path="/composition-inheritance"
            element={<Composition />}
          ></Route>

          <Route
            path="/type-checking"
            element={<TypeCheck name={"Innova"} age={25} />}
          ></Route>
          <Route
            path="/uni-directional"
            element={<UniDirectionalDataFlow />}
          ></Route>
          <Route path="/context-API" element={<ParentComponent />}></Route>
          <Route path="/fragments" element={<Fragments />}></Route>
          <Route path="ref-react" element={<VideoPlayer />} />

          <Route path="/employees" element={<Employees />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/homerouting" element={<HomeRouting />} />
          <Route path="/basic-calc" element={<Calculator />} />
          <Route path="/todo-app" element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
