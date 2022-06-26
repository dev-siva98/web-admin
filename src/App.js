import './App.css'
import RightSide from './Components/RigtSide/RightSide';
import Sidebar from './Components/Sidebar/Sidebar';
import MainPage from './Components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom'
import { LoadingContext, SelectMenuContext } from './AppContext'
import { useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(null)
  const loader = { loading, setLoading }
  const selector = { selected, setSelected }

  return (
    <div className="App">
      <BrowserRouter>
        <LoadingContext.Provider value={loader}>
          <SelectMenuContext.Provider value={selector}>
            <div className="AppGlass">
              <Sidebar />
              <MainPage />
              <RightSide />
            </div>
          </SelectMenuContext.Provider>
        </LoadingContext.Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
