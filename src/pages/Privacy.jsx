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
              Because our apps work differently, the details below are organized by app.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">Hanzi Match</h2>

            <h3 className="text-lg font-bold text-gray-900 mt-6">No Collection</h3>
            <p>
              Hanzi Match does not collect, store, or share any personal data.
              We have no access to your name, email, or usage habits.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">Local Storage</h3>
            <p>
              Your game progress and settings (like game mode and card count) are stored
              locally on your device via standard iOS storage. This data never leaves your device.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">No Third Parties</h3>
            <p>
              We do not use analytics SDKs, advertising frameworks, or any third-party tracking tools.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">Cast Chat</h2>
            <p>
              Cast Chat requires an account and uses AI to transcribe, summarize, and chat about
              podcast episodes. The following data is collected and processed to operate the service.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">Account Information</h3>
            <p>
              You sign in with Apple or Google. We store your account identifier, and your email and
              name when your provider shares them, to manage your account and subscription. Authentication
              is handled by Google Firebase.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">On-Device Transcription</h3>
            <p>
              Episode transcription runs entirely on your device using Apple's Speech framework.
              Your audio never leaves your phone.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">AI Features</h3>
            <p>
              When you use AI summaries, chat, quizzes, or Voice Mode, the relevant episode transcript
              text and your questions are sent to Google's Gemini models to generate a response.
              To make the app faster and reduce repeated work, transcripts and AI-generated character
              profiles are saved to our backend (Google Firestore) and may be reused by other users
              for the same episode. This shared content is keyed to the episode rather than shown
              alongside your profile, though a reference to the contributing account is retained.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">Usage &amp; Subscriptions</h3>
            <p>
              We store basic usage metrics (such as episode downloads and Voice Mode sessions) and your
              Cast Chat Pro subscription status. Subscription purchases are processed by Apple; we do not
              receive your payment details.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">No Advertising or Tracking</h3>
            <p>
              We do not use advertising frameworks or third-party tracking tools, and we do not sell
              your personal data.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">Account &amp; Data Deletion</h3>
            <p>
              You can delete your account at any time from within Cast Chat, or by{' '}
              <Link to="/contact" className="text-blue-600 hover:underline">contacting us</Link>.
              Deleting your account removes your account record and associated usage and subscription
              data from our backend. Shared episode transcripts that are no longer linked to your
              account may be retained so the app continues to work for other users.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">Third-Party Services</h3>
            <p>
              Cast Chat relies on Google Firebase (authentication and data storage) and Google's
              Gemini models (AI features); their handling of data is governed by Google's privacy
              policy. Subscriptions are processed by Apple under Apple's privacy policy.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6">Children</h3>
            <p>
              Cast Chat is not directed to children under 13, and we do not knowingly collect personal
              information from children.
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
