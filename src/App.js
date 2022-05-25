import styled from "styled-components";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Div>
      <Sidebar/>
      <Dashboard/>
    </Div>
  );
}

export default App;

const Div = styled.div``;
