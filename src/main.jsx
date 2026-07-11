import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import PodPalPrivacy from './pages/PodPalPrivacy.jsx'
import HanziMatchPrivacy from './pages/HanziMatchPrivacy.jsx'
import RecallTutorPrivacy from './pages/RecallTutorPrivacy.jsx'
import Support from './pages/Support.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/podpal/privacy" element={<PodPalPrivacy />} />
        <Route path="/cast-chat/privacy" element={<PodPalPrivacy />} />
        <Route path="/hanzi-match/privacy" element={<HanziMatchPrivacy />} />
        <Route path="/recall-tutor/privacy" element={<RecallTutorPrivacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
