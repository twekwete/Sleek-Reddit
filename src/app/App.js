import Nav from "../components/Nav"
import "../App.css";
import AppContainer from "./AppContainer";
import Content from "../components/ContentLayout";

function App() {
  return (
    <AppContainer>
      <Nav />
      <Content />
    </AppContainer>
  );
}

export default App;
