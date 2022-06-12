import './App.css'
import RightSide from './Components/RigtSide/RightSide';
import Table from './Components/Table/Table'
import Sidebar from './Components/Sidebar/Sidebar';
import MainPage from './Components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom'
import { LoadingContext, TableContext } from './AppContext'
import { useState } from 'react';
import OrderDetails from './Components/DetailsModal/OrderDetails/OrderDetails';

function App() {

  const [tableRouterData, setTableRouterData] = useState({
    route: 'orders',
    component: OrderDetails
  })
  const [loading, setLoading] = useState(false)

  const table = { tableRouterData, setTableRouterData }
  const loader = { loading, setLoading }

  return (
    <div className="App">
      <BrowserRouter>
        <LoadingContext.Provider value={loader}>
          <TableContext.Provider value={table}>
            <div className="AppGlass">
              <Sidebar />
              <MainPage />
              <Table />
              <RightSide />
            </div>
          </TableContext.Provider>
        </LoadingContext.Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
