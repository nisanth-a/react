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
import Hooks from "./components/Hooks/Hooks";
import XMLcall from "./components/Service-Calls/XMLcall";
import AxiosCall from "./components/Service-Calls/AxiosCall";
import FetchCall from "./components/Service-Calls/FetchCall";
import Objectusestate from "./components/Immutability/Objectusestate";
import Arrayusestate from "./components/Immutability/Arrayusestate";
import AxiosBasic from "./components/Service-Calls/AxiosBasic";
import CounterFunctional from "./components/Redux/CounterFunctional";
import UserThunkWrapper from "./components/Redux Middleware/UserThunkWrapper";
import UserSagaWrapper from "./components/Redux Middleware/UserSagaWrapper";
import ClickIncrease from "./components/HOC/ClickIncrease";
import HoverIncrease from "./components/HOC/HoverIncrease";
import Lazy_Loading from "./components/Lazy_Loading/Lazy_Loading";
import Welcome from "./components/ErrorBoundary/Welcome";
import EventComponent from "./components/ErrorBoundary/EventComponent";

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
          <Route path="/hooks" element={<Hooks />} />

          <Route path="/xmlcall" element={<AxiosCall />} />
          <Route path="/immutable" element={<Arrayusestate />} />
          {/* <Route path="/hoc" element={<XMLcall />} /> */}

          <Route path="/redux" element={<CounterFunctional />} />

          <Route
            path="/redux-middleware-thunk"
            element={<UserThunkWrapper />}
          />
          <Route path="/redux-middleware-saga" element={<UserSagaWrapper />} />
          <Route
            path="/hoc"
            element={
              <>
                <ClickIncrease />
                <HoverIncrease />
              </>
            }
          />
          <Route path="/lazy-loading" element={<Lazy_Loading />} />
          <Route path="/errorboundaries" element={<Welcome />} />
          <Route path="/eventComponent" element={<EventComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
