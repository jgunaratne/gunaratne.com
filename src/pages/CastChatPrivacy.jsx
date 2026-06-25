import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function CastChatPrivacy() {
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
              src="/cast-chat-icon.png"
              alt="Cast Chat icon"
              className="w-14 h-14 rounded-2xl shadow-sm"
            />
            <h1 className="text-3xl font-bold">Cast Chat — Privacy Policy</h1>
          </div>
          <p className="text-gray-500 mb-8 italic text-sm">Last Updated: June 24, 2026</p>

          <div className="space-y-6 leading-relaxed text-gray-700">
            <p>
              Cast Chat is an AI podcast player that transcribes, summarizes, and lets you chat
              with podcast episodes. This policy explains what data is collected, how it is used,
              and the choices you have.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Account &amp; Authentication</h2>
            <p>
              An account is optional — Cast Chat can be used as a guest without signing in.
              Guests can provide their own Gemini API key to use AI features. If you choose
              to sign in with Apple or Google, authentication is handled by Google Firebase.
              We store your account identifier and, when your provider shares them, your email
              and display name. These are used to manage your account and subscription status.
              Signing in is required to use the built-in AI and to subscribe to Cast Chat Pro.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">On-Device Transcription</h2>
            <p>
              Episode transcription runs entirely on your device using Apple's Speech framework
              (SFSpeechRecognizer). No audio ever leaves your phone. On-device recognition requires
              iPhone 12 or newer (A14 chip or later).
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">AI Features (Summaries, Chat, Quiz, Voice Mode)</h2>
            <p>
              When you use AI summaries, chat, quizzes, or Voice Mode, the relevant episode
              transcript text and your messages are sent to an AI provider to generate a response.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cast Chat Pro subscribers (signed in):</strong> AI features are powered
                by Google's Gemini models through the Firebase AI Logic SDK. Voice Mode uses
                Gemini Live for real-time conversation. No personal API key is needed — the app
                authenticates through Firebase.
              </li>
              <li>
                <strong>Free tier (signed in):</strong> AI features work on your first 3 podcasts
                at no cost, using the same Firebase-backed infrastructure as subscribers.
              </li>
              <li>
                <strong>Bring your own API key (signed in or guest):</strong> If you provide your
                own Gemini API key, requests are sent directly from your device to Google. In that
                case, we do not store your transcripts or AI-generated content on our backend.
                Your API key is stored securely in your device's Keychain and is never sent to
                or stored by us.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Data Stored on Our Backend</h2>
            <p>
              To make the app faster and reduce repeated work, transcripts and AI-generated
              content (summaries and episode character profiles) are saved to our backend
              (Google Firestore) and may be reused by other users viewing the same episode.
              This shared content is keyed to the episode, not displayed alongside your profile,
              though a reference to the contributing account is retained internally.
            </p>
            <p>
              When you are signed in, we also store basic usage metrics (such as the number of
              podcasts you've used AI features on) and your Cast Chat Pro subscription status.
              Guests have no account, so this information is not stored on our backend.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Subscriptions &amp; Payments</h2>
            <p>
              Cast Chat Pro is a $4.99/month auto-renewable subscription processed entirely by
              Apple through the App Store. We do not receive or store your payment details.
              You can manage or cancel your subscription at any time through your device's
              Settings → Subscriptions.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">No Advertising or Tracking</h2>
            <p>
              We do not use advertising frameworks, third-party tracking tools, or analytics SDKs.
              We do not sell your personal data.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Account &amp; Data Deletion</h2>
            <p>
              You can delete your account at any time from within Cast Chat, or by{' '}
              <Link to="/contact" className="text-blue-600 hover:underline">contacting us</Link>.
              Deleting your account removes your account record, usage data, and subscription
              information from our backend. Shared episode transcripts that are no longer linked
              to your account may be retained so the app continues to work for other users.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Third-Party Services</h2>
            <p>Cast Chat relies on the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Firebase</strong> — authentication, data storage (Firestore),
                and AI model access via Firebase AI Logic SDK
              </li>
              <li>
                <strong>Google Gemini</strong> — AI summaries, chat, quiz generation, and
                Voice Mode conversations
              </li>
              <li>
                <strong>Apple</strong> — on-device speech recognition, subscription billing,
                and Sign in with Apple
              </li>
            </ul>
            <p>
              Each service's handling of data is governed by their respective privacy policies.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-10">Children</h2>
            <p>
              Cast Chat is not directed to children under 13, and we do not knowingly collect
              personal information from children.
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
