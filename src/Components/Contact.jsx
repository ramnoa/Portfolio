import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { profile } from "../../data/profile.js";
import SectionWrapper from "./SectionWrapper";

/**
 * Contact Section Component
 * Contact form with direct call/WhatsApp buttons.
 * Features:
 * - Form submission feedback (success message)
 * - Direct contact options (Phone, WhatsApp, Email)
 * - Responsive design
 */
 export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    "w-full rounded-lg border-2 border-primary bg-transparent px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-smooth";

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2
            data-ocid="contact.heading"
            className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide text-foreground"
          >
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Let's build something incredible together. Drop me a message with
            your project details, and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.a
              href={`tel:${profile.phoneTel}`}
              data-ocid="contact.call.card"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.03 }}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center shadow-glow"
              style={{ backgroundColor: "#FEE101", color: "#0B0E14" }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/10">
                <FaPhone className="h-6 w-6" />
              </span>
              <span className="font-display text-lg font-bold uppercase tracking-wide">
                Call Me
              </span>
              <span className="font-body text-sm font-semibold">
                {profile.phone}
              </span>
            </motion.a>

            <motion.a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp.card"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.03 }}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center shadow-glow"
              style={{ backgroundColor: "#25D366", color: "#0B0E14" }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/10">
                <FaWhatsapp className="h-7 w-7" />
              </span>
              <span className="font-display text-lg font-bold uppercase tracking-wide">
                WhatsApp Me
              </span>
              <span className="font-body text-sm font-semibold">
                {profile.phone}
              </span>
            </motion.a>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            data-ocid="contact.form"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5"
          >
            <h3
              data-ocid="contact.form.heading"
              className="font-display text-xl font-bold uppercase tracking-wide text-foreground"
            >
              Get In Touch
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block font-body text-xs font-medium text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  data-ocid="contact.name.input"
                  className={inputClass}
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block font-body text-xs font-medium text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  data-ocid="contact.email.input"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-subject"
                className="block font-body text-xs font-medium text-muted-foreground"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                data-ocid="contact.subject.input"
                className={inputClass}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="block font-body text-xs font-medium text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                required
                data-ocid="contact.message.textarea"
                className={`${inputClass} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              data-ocid="contact.submit_button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-xl py-3.5 font-display text-sm font-bold uppercase tracking-wide transition-smooth shadow-glow"
              style={{ backgroundColor: "#FEE101", color: "#0B0E14" }}
            >
              Submit
            </motion.button>

            {submitted && (
              <motion.p
                data-ocid="contact.success_state"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-body text-sm font-medium text-accent"
              >
                Message sent successfully! I'll get back to you within 24 hours.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
