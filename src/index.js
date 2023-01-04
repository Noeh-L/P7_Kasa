import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Error from './pages/Error'
import Footer from './components/Footer'
import Accomodation from './pages/Accomodation/Accomodation'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:idInURL" element={<Accomodation />} />
          <Route path="/accomodation/*" element={<Error />} />
          {/* ici l'erreur est send si on a acco/id/unTruc. Il faut aussi send une erreur quand id est autre que id from database */}
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
)
