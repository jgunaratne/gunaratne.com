import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tight text-slate-800">
            Gunaratne
          </Link>
          <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition">
            <i className="fas fa-arrow-left mr-2"></i>Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8 italic text-sm">Last Updated: June 2026</p>

          <div className="space-y-6 leading-relaxed text-gray-700">
            <p>
              <strong className="text-gray-900">Hanzi Match</strong> is built with privacy as a core principle.
              Here is what you need to know:
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">1. No Collection</h2>
            <p>
              The app does not collect, store, or share any personal data.
              We have no access to your name, email, or usage habits.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">2. Local Storage</h2>
            <p>
              Your game progress and settings (like game mode and card count) are stored
              locally on your device via standard iOS storage. This data never leaves your device.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8">3. No Third Parties</h2>
            <p>
              We do not use analytics SDKs, advertising frameworks, or any third-party tracking tools.
            </p>

            <hr className="my-8 border-gray-200" />

            <p className="text-sm text-gray-500">
              Questions?{' '}
              <Link to="/contact" className="text-blue-600 hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
