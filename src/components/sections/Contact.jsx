import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

const serviceId =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.VITE_SERVICE;
const templateId =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
  import.meta.env.VITE_TEMPLATE_ID;
const publicKey =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_PUBLIC_KEY;

// 1. Initialize EmailJS globally with your public key
if (publicKey) {
  emailjs.init(publicKey);
}

const emailJsConfigured =
  Boolean(serviceId) && Boolean(templateId) && Boolean(publicKey);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailJsConfigured) {
      console.error(
        "EmailJS is not configured. Copy .env.example to .env and set VITE_EMAILJS_* variables."
      );
      alert(
        "Contact form is not configured yet. Please try again later or email directly."
      );
      return;
    }

    setSending(true);
    try {
      // 2. Pass only the serviceId, templateId, and the HTML form element (e.target)
      await emailjs.sendForm(serviceId, templateId, e.target);
      
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS API Error Details:", error);
      alert(`EmailJS Error: ${error?.text || error?.message || JSON.stringify(error)}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-[600px]">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-center text-sm mb-8 max-w-sm mx-auto">
            Have an infrastructure project, automated workflow, or engineering position to discuss? Drop a line below or connect via my active profiles.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="from_name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Professional Social Channels Footer Separation */}
          <div className="mt-12 pt-6 border-t border-white/10 flex justify-center space-x-8 text-sm font-medium">
            <a
              href="https://github.com/Lamidogidado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>🐙</span> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-lamido-6b4550254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <span>💼</span> LinkedIn
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};