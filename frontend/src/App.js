
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { Outlet } from 'react-router-dom'

function App() {
  return (
   <>
   <Header />

        <Outlet />
    
    <Footer />
   </>
  );
}

export default App;
