
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header  from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout';
import CheckoutProduct from './components/CheckoutProduct';
function App() {
  return (
    <Router>
      
      <Routes>
        {/* <Route path='/' element={ <Header/>}></Route> */}
        <Route path='/' element={
          <div>
            <Header/>
            <Home/>
          </div>
          }></Route>
        <Route path='/checkout' element={
          <div>
            <Header/>
            <Checkout/>
          </div>
        }/>
        <Route path='/login' element={<h1>Login</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
