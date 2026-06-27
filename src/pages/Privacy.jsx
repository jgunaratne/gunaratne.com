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
              <strong className="text-gray-900">Our apps</strong> are built with privacy as a core principle.
              We never sell your data and we never use advertising or third-party tracking SDKs.
              Each app has its own dedicated privacy policy:
            </p>

            <div className="space-y-4 mt-8">
              <Link
                to="/podpal/privacy"
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition"
              >
                <img
                  src="/cast-chat-icon.png"
                  alt="PodPal icon"
                  className="w-12 h-12 rounded-xl shadow-sm"
                />
                <div>
                  <h2 className="text-lg font-bold text-gray-900">PodPal</h2>
                  <p className="text-sm text-gray-500">AI podcast player — transcribe, summarize, and chat</p>
                </div>
                <span className="ml-auto text-blue-600 text-lg">→</span>
              </Link>

              <Link
                to="/hanzi-match/privacy"
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition"
              >
                <img
                  src="/AppIcon.png"
                  alt="Hanzi Match icon"
                  className="w-12 h-12 rounded-xl shadow-sm"
                />
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Hanzi Match</h2>
                  <p className="text-sm text-gray-500">Chinese character matching game — zero data collection</p>
                </div>
                <span className="ml-auto text-blue-600 text-lg">→</span>
              </Link>
            </div>

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
