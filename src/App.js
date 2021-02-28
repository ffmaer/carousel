import './App.css';
import {useState} from 'react'
import './IntroVideo'
import IntroVideo from './IntroVideo';
import LandingPage from './LandingPage';


function App() {
  const [returned, setReturned] = useState(localStorage.getItem("returned")==="true")
  return (
    <div className="App">
      {!returned ? <IntroVideo setReturned={setReturned}/> : <LandingPage/>}
    </div>
  );
}

export default App;
