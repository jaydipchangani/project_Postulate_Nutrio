import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import Form from './components/Form';
import { BrowserRouter as Router,Routes,Route,Navigate,} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Form" element={<Form/>}/>
      </Routes>
    </Router>
  );
}

export default App;
