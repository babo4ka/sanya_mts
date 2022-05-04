import './App.scss';
import Application from './components/Application';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import PrivacyPolicy from './components/PrivacyPolicy';
function App() {
    return(
      // <Application/>

      <Router>
        
        <Routes>

          <Route exact path="/" element={<Application/>}/>
          <Route exact path="/privacy" element={<PrivacyPolicy/>}/>

        </Routes>

      </Router>
    )
}

export default App;
