import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-slate-900">
            Building apps for the <span className="text-blue-600">modern</span> world.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
            We are Junius and Lindsay, independent app development and UX specialists in the Pacific Northwest.
          </p>
        </div>
      </header>

      {/* Apps Section */}
      <section id="apps" className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Featured Apps</h2>
          <div className="h-1 w-24 bg-blue-600 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* PodPal */}
          <div className="app-card bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <img
              src="/cast-chat-icon.png"
              alt="PodPal App Icon"
              className="w-20 h-20 rounded-2xl mb-8 shadow-lg"
            />
            <h3 className="text-2xl font-bold mb-3">PodPal</h3>
            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              The AI podcast player that respects your time. Transcribe and
              summarize any episode, chat with episodes using your voice, and
              get the highlights without listening to everything.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://apps.apple.com/us/app/podpal/id6775019893"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                  alt="Download on App Store"
                  className="h-11"
                />
              </a>
              <div className="flex gap-4 text-sm">
                <a href="/podpal/privacy" className="text-blue-600 hover:underline">Privacy</a>
                <a href="/support" className="text-blue-600 hover:underline">Support</a>
              </div>
            </div>
          </div>

          {/* iPhone Screenshot */}
          <div className="flex justify-center">
            <div className="relative w-64 md:w-72">
              {/* iPhone frame */}
              <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Screenshot */}
                  <img
                    src="/cast-chat.png"
                    alt="PodPal Screenshot"
                    className="w-full rounded-[2.25rem]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hanzi Match */}
          <div className="app-card bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <img
              src="/AppIcon.png"
              alt="Hanzi Match App Icon"
              className="w-20 h-20 rounded-2xl mb-8 shadow-lg"
            />
            <h3 className="text-2xl font-bold mb-3">Hanzi Match</h3>
            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              Master Chinese characters through an engaging matching game.
              Flip cards to match hanzi with their pinyin and meaning.
              Perfect for beginners and intermediate learners.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://apps.apple.com/us/app/hanzi-match-learn-chinese/id6761600791"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                  alt="Download on App Store"
                  className="h-11"
                />
              </a>
              <div className="flex gap-4 text-sm">
                <a href="/hanzi-match/privacy" className="text-blue-600 hover:underline">Privacy</a>
                <a href="/support" className="text-blue-600 hover:underline">Support</a>
              </div>
            </div>
          </div>

          {/* iPhone Screenshot */}
          <div className="flex justify-center">
            <div className="relative w-64 md:w-72">
              {/* iPhone frame */}
              <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Screenshot */}
                  <img
                    src="/hanzi-match.png"
                    alt="Hanzi Match Screenshot"
                    className="w-full rounded-[2.25rem]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Recall Tutor */}
          <div className="app-card bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <img
              src="/recall-tutor-icon.png"
              alt="Recall Tutor App Icon"
              className="w-20 h-20 rounded-2xl mb-8 shadow-lg"
            />
            <h3 className="text-2xl font-bold mb-3">Recall Tutor</h3>
            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              Pick any topic and get a bite-sized AI lecture with visual cards,
              a recall quiz, and a live voice tutor who explains it out loud —
              at your reading level, from Elementary to University.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://apps.apple.com/us/app/recall-tutor/id0000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                  alt="Download on App Store"
                  className="h-11"
                />
              </a>
              <div className="flex gap-4 text-sm">
                <a href="/recall-tutor/privacy" className="text-blue-600 hover:underline">Privacy</a>
                <a href="/support" className="text-blue-600 hover:underline">Support</a>
              </div>
            </div>
          </div>

          {/* iPhone Screenshot */}
          <div className="flex justify-center">
            <div className="relative w-64 md:w-72">
              {/* iPhone frame */}
              <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Screenshot */}
                  <img
                    src="/recall-tutor.png"
                    alt="Recall Tutor Screenshot"
                    className="w-full rounded-[2.25rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
