import './App.css'
import Login from './componant/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './componant/signUp/SignUp';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    </Routes></BrowserRouter>
  );
}
export default App;