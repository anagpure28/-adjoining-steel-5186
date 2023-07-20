import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import Products from './Pages/Products';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App" >
  <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
    </div>
  );
}

export default App;
