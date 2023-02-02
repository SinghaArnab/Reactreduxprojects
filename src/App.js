import './App.css';
import Counter from './Components/Counter/Counter';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Nav/Navbar';
import Todo from './Components/Todo/Todo';
import Enav from './Components/E-commerece/Components/Enav';
import Home from './Components/E-commerece/pages/Home';
import Cart from './Components/E-commerece/pages/Cart';
import PageNF from './Nav/PageNF';
import SingleProduct from './Components/E-commerece/Components/SingleProduct';

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Navbar/>}>
            <Route index element={<Counter/>}/>
            <Route path='Todo' element={<Todo/>}/>

            <Route exaxt path='Eshop' element={<Enav/>}>
            <Route index element={<Home/>}/>
            <Route path='Cart' element={<Cart/>}/>
            <Route path='/Eshop/:ProductId' element={<SingleProduct/>}/>

            </Route>
            <Route path='*' element={<PageNF/>}/>
            </Route>
          </Routes>
     </BrowserRouter>






    </div>
  );
}

export default App;
