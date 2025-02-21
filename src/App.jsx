import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './UI/Navbar';
import Home from './components/Home';
import Resources from './components/resources/Resources';



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
