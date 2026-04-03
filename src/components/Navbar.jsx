import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-800">
          Gunaratne
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#apps" className="hover:text-blue-600 transition">My Apps</a>
          <Link
            to="/contact"
            className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-700 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
