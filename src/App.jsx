import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "./containers/home";
import NoPage from "./containers/noPage";   

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
