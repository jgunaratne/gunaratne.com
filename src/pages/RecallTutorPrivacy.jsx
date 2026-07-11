import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function RecallTutorPrivacy() {
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
              src="/recall-tutor-icon.png"
              alt="Recall Tutor icon"
              className="w-14 h-14 rounded-2xl shadow-sm"
            />
            <h1 className="text-3xl font-bold">Recall Tutor — Privacy Policy</h1>
          </div>
          <p className="text-gray-500 mb-8 italic text-sm">Last Updated: July 2026</p>

          <div className="space-y-6 leading-relaxed text-gray-700">
            <p>
              Recall Tutor turns any topic into an AI-generated lecture with visual cards,
              a recall quiz, and a live voice tutor. This policy explains what data is
              collected, how it is used, and the choices you have.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Account &amp; Authentication</h2>
            <p>
              An account is optional — Recall Tutor can be used fully by supplying your own
              Anthropic or Gemini API key, with no sign-in at all. If you choose to sign in
              with Apple or Google, authentication is handled by Google Firebase. We store
              your account identifier and, when your provider shares them, your email and
              display name. Signing in is required only to use the built-in (no-key) tutor.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">AI Features (Lectures, Quizzes, Illustrations, Voice Tutor)</h2>
            <p>
              When you generate a lecture, quiz, illustration, or use the voice tutor, the
              relevant topic, lecture text, and your questions are sent to an AI provider to
              generate a response.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Built-in tutor (signed in):</strong> Powered by Google's Gemini models
                through the Firebase AI Logic SDK. The voice tutor uses Gemini Live for
                real-time conversation. No personal API key is needed — the app authenticates
                through Firebase. Usage on this tier is limited to 3 free lectures, then
                requires a Recall Tutor Pro subscription.
              </li>
              <li>
                <strong>Bring your own API key (signed in or not):</strong> If you provide your
                own Anthropic or Gemini API key, requests are sent directly from your device to
                that provider. Your API key is stored securely in your device's Keychain and is
                never sent to or stored by us.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Microphone</h2>
            <p>
              Microphone access is used only when you tap to ask the voice tutor a spoken
              question. Audio is streamed live to the active AI provider (Google Gemini) to
              generate a response and is not stored by us.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Data Stored on Our Backend</h2>
            <p>
              When you are signed in, we store your profile (email, display name), your
              Recall Tutor Pro subscription status, and how many free lectures you've used —
              in Google Cloud Firestore, scoped to your account only. This lets your usage and
              subscription status survive a reinstall or a new device. If you never sign in,
              no account data is stored on our backend at all.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Subscriptions &amp; Payments</h2>
            <p>
              Recall Tutor Pro is a $4.99/month auto-renewable subscription processed entirely
              by Apple through the App Store. We do not receive or store your payment details.
              You can manage or cancel your subscription at any time through your device's
              Settings → Subscriptions.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">No Advertising or Tracking</h2>
            <p>
              We do not use advertising frameworks, third-party tracking tools, or analytics
              SDKs. We do not sell your personal data.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Account &amp; Data Deletion</h2>
            <p>
              You can sign out at any time from within Recall Tutor, or{' '}
              <Link to="/contact" className="text-blue-600 hover:underline">contact us</Link>
              {' '}to have your account record, usage data, and subscription information
              removed from our backend.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Third-Party Services</h2>
            <p>Recall Tutor relies on the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Firebase</strong> — authentication, data storage (Firestore),
                and AI model access via Firebase AI Logic SDK
              </li>
              <li>
                <strong>Google Gemini</strong> — AI lectures, quizzes, illustrations, and
                voice tutor conversations
              </li>
              <li>
                <strong>Anthropic</strong> — AI lectures, quizzes, and reactions, if you supply
                your own Anthropic API key
              </li>
              <li>
                <strong>Apple</strong> — subscription billing and Sign in with Apple
              </li>
            </ul>
            <p>
              Each service's handling of data is governed by their respective privacy policies.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Children</h2>
            <p>
              Recall Tutor is not directed to children under 13, and we do not knowingly
              collect personal information from children.
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
              {' · '}
              <Link to="/privacy" className="text-blue-600 hover:underline">
                Full privacy policy (all apps)
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
