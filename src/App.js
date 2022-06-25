import './App.css'
import RightSide from './Components/RigtSide/RightSide';
import Sidebar from './Components/Sidebar/Sidebar';
import MainPage from './Components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom'
import { LoadingContext } from './AppContext'
import { useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false)
  const loader = { loading, setLoading }

  return (
    <div className="App">
      <BrowserRouter>
        <LoadingContext.Provider value={loader}>
          <div className="AppGlass">
            <Sidebar />
            <MainPage />
            <RightSide />
          </div>
        </LoadingContext.Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
