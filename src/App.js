import './App.css';
import { Outlet } from "react-router-dom";
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <Outlet />
    </>
  );
}

export default App;
