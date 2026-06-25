import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function HanziMatchPrivacy() {
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
          <div className="flex items-center gap-4 mb-2">
            <img
              src="/AppIcon.png"
              alt="Hanzi Match icon"
              className="w-14 h-14 rounded-2xl shadow-sm"
            />
            <h1 className="text-3xl font-bold">Hanzi Match — Privacy Policy</h1>
          </div>
          <p className="text-gray-500 mb-8 italic text-sm">Last Updated: June 2026</p>

          <div className="space-y-6 leading-relaxed text-gray-700">
            <p>
              Hanzi Match is built with privacy as a core principle. We never sell your data
              and we never use advertising or third-party tracking SDKs.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">No Data Collection</h2>
            <p>
              Hanzi Match does not collect, store, or share any personal data.
              We have no access to your name, email, or usage habits.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Local Storage</h2>
            <p>
              Your game progress and settings (like game mode and card count) are stored
              locally on your device via standard iOS storage. This data never leaves your device.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">No Third Parties</h2>
            <p>
              We do not use analytics SDKs, advertising frameworks, or any third-party tracking tools.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Children</h2>
            <p>
              Hanzi Match is a learning game suitable for all ages. Because we do not collect
              any personal data, there is no risk of collecting information from children.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this page
              with an updated date.
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
