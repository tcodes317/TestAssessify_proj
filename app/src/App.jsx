import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import FindJobs from "./components/pages/FindJob";
import ForCompanies from "./components/pages/Companies";
import Login from "./components/pages/login";
import "./App.css";
import NotFound from "./components/pages/NotFound";
export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/findjob" element={<FindJobs />} />
          <Route path="/forcompanies" element={<ForCompanies />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}