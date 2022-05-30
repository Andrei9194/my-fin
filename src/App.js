import { Content } from "./components/content";
import { NavBar } from "./components/navbar";
import { Wrapper } from "./components/wrapper";
import {BrowserRouter as Router} from 'react-router-dom'


function App() {



  return (
    <Router>
      <Wrapper>
        <NavBar />
        <Content />
      </Wrapper>
    </Router>
  );
}

export default App;
