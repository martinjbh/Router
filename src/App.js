
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Muestra from './Componentes/Muestra';
import { Users } from './Componentes/Users';
import { Nav } from './Componentes/Nav';
import Home from './Componentes/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/prueba/:id" element={<Muestra prueba="prueba" />} />

          <Route path="/users" element={<Users />} />

        </Routes>
      </BrowserRouter>
    </div>

    // 

  );
}

export default App;
