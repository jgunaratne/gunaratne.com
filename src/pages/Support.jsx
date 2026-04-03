import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Support() {
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

      <div className="max-w-xl mx-auto px-6 py-16">
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <h1 className="text-3xl font-bold mb-4">Hanzi Match Support</h1>
          <p className="text-gray-500 mb-8">We're here to help you master Chinese characters.</p>

          <div className="space-y-8">
            <section>
              <h2 className="font-bold text-lg mb-2 text-blue-600">Contact Us</h2>
              <p className="text-gray-700">
                For bug reports or feature requests:<br />
                <Link
                  to="/contact"
                  className="inline-block mt-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-700 transition"
                >
                  Send us a message
                </Link>
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg mb-2">FAQ</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>How do I see the pinyin?</strong><br />
                  Simply tap the blue card to flip it over. It will reveal the pinyin
                  and the English meaning.
                </p>
                <p>
                  <strong>Can I change the number of cards?</strong><br />
                  Yes! Tap the gear icon in the top right to select between 10, 20, 30, 50,
                  or all cards.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
