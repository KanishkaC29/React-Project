import {BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Index from "./pages/Index"
import About from "./pages/About"

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/index" element={<Index/>}></Route>
      <Route path="/about" element={<About/>}></Route>

    </Routes>
    </BrowserRouter>
  
    </>
   
  ) 
}
export default App
