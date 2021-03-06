import { CounterContextProvider } from "./context/CounterContext";
import { NameContextProvider } from "./context/NameContext";
import { Counter } from "./components/Counter/Counter";
import { Mirror } from "./components/Mirror/Mirror";
import { Name } from "./components/Name/Name";

function App() {
  return (
    <>
      <CounterContextProvider>
        <NameContextProvider>
          <Counter />
          <Name />
          <hr />
          <Mirror />
        </NameContextProvider >
      </CounterContextProvider>
    </>
  );
}

export default App;
