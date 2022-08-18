import './App.scss';
import Application from './components/Application';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import PrivacyPolicy from './components/PrivacyPolicy';
import { Provider } from 'react-redux';
import {store} from "./store/store"
function App() {
    return(
      <Provider store={store}>

      <Router>
        
        <Routes>

          <Route exact path="/" element={<Application/>}/>
          <Route exact path="/privacy" element={<PrivacyPolicy/>}/>

        </Routes>

      </Router>
      </Provider>
    )
}

export default App;
