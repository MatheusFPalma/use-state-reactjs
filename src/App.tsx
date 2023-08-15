import "./App.css";
import DefaultTheme from "./config/theme/DefaultTheme";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <>
      <DefaultTheme>
        <RoutesApp />
      </DefaultTheme>
    </>
  );
}

export default App;
