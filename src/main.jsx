import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import CastChatPrivacy from './pages/CastChatPrivacy.jsx'
import HanziMatchPrivacy from './pages/HanziMatchPrivacy.jsx'
import Support from './pages/Support.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cast-chat/privacy" element={<CastChatPrivacy />} />
        <Route path="/hanzi-match/privacy" element={<HanziMatchPrivacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
