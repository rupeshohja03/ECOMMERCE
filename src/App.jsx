
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import './index.css'

function App() {


  return (
    <>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={"/"} exact={true} element ={<Home/>}/>
    </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
