import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CardPage from './pages/CardPage'; 
import Nav from './components/Nav';
import Calc from './pages/FormularioPage';
import Todo from './pages/TodoPage';
import IngEst from "./pages/IngresarEstudiantePage"
import CatBio from './components/ComponenteContenedor';
function App() {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/Bio"
                        element={<CardPage nombre="Christian Marin" edad="18" informacion="Desarrollador de software."/>}
                    />
                    <Route path="/FormularioPage" element={<Calc />} />
                    <Route path="/TodoPage" element={<Todo />} />
                    <Route path="/IngEst" element={<IngEst />} />
                    <Route path="/CatBio" element={<CatBio />} />

                </Routes>
            </Router>
        </>
    );
}

export default App;