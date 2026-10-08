import './App.css'
import Home from './pages/home/home'
import AuthPage from "./pages/Auth/AuthPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App
