import './App.css'
import RightSide from './Components/RigtSide/RightSide';
import Table from './Components/Table/Table'
import Sidebar from './Components/Sidebar/Sidebar';
import MainPage from './Components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="AppGlass">
          <Sidebar />
          <MainPage />
          <Table />
          <RightSide />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
