import "./index.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landing from "./Pages/landing";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import { useState } from "react";


    function App()
{

  const[users,setusers] = useState(
    [
        {
            username:"vishnu",
            password:"123"
        }
    ]
)
  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
        <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path='/landing' element={<Landing/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
