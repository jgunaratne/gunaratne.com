import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Contact() {
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
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-3">Contact Us</h1>
          <p className="text-gray-500 leading-relaxed">
            Have a question, feedback, or partnership inquiry?<br />
            We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8">
          <form className="space-y-5" action="https://formspree.io/f/your-form-id" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%239ca3af' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="" disabled>Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="partnership">Partnership / Business</option>
                <option value="privacy">Privacy / Data Request</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                required
                rows={5}
                className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors resize-y"
              />
            </div>

            {/* Honeypot field for spam protection */}
            <input type="text" name="_gotcha" className="hidden" />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-5 rounded-xl border border-gray-100 bg-white shadow-sm text-center">
            <i className="fas fa-clock text-2xl text-blue-600 mb-2"></i>
            <h3 className="text-sm font-semibold mb-1">Response Time</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We typically respond within 1-2 business days
            </p>
          </div>
          <div className="p-5 rounded-xl border border-gray-100 bg-white shadow-sm text-center">
            <i className="fas fa-shield-alt text-2xl text-green-600 mb-2"></i>
            <h3 className="text-sm font-semibold mb-1">Privacy</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Your information is never shared with third parties
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
