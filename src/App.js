import './App.css'
import RightSide from './Components/RigtSide/RightSide';
import Table from './Components/Table/Table'
import Sidebar from './Components/Sidebar/Sidebar';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainPage/>
        <Table/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
