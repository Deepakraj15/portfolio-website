
import './App.css';
import Main from './screens/Main.js';
import Progressbar from './components/ProgressBar.js';
import { usePlatform } from './hooks/usePlatform.js';
import MobileMain from './screens/MobileMain.js';
function App() {
  const isMobileView = usePlatform();
  return (
    <>
      <Progressbar />
      {isMobileView? <MobileMain/>:< Main />}
    </>  
  );
}

export default App;
