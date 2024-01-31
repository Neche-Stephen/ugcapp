import GetStarted from "./Routes/getStarted/GetStarted";
import SignUp from "./Routes/signup/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<GetStarted />} />
        <Route path="/signup" element = {<SignUp />} />
      </Routes>
    </BrowserRouter>
    
  </>
  )
}

export default App
