import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import Contect from "./pages/Contect"
import Education from "./pages/Education"
import Projects from "./Pages/Projects"
import Skills from "./pages/Skills"




const App = () => {
  return (
    <>

      <BrowserRouter>

        <Layout>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/eduction" element={<Education/>} /> 
            <Route path="/projects" element={<Projects/>} /> 
            <Route path="/skills" element={<Skills />} />
            <Route path="/contect" element={<Contect />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </>
  )
}

export default App
