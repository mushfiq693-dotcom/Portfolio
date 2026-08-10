"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/content/profile";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    
    // Simulate brief client side form processing or mailto trigger
    await new Promise((res) => setTimeout(res, 800));

    // Fallback mailto trigger for direct email client execution
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;

    window.open(mailtoUrl, "_blank");

    setSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Build Something <span className="text-emerald-400">Great Together</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Have a project in mind, an opportunity to discuss, or just want to connect? Send me a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
              <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Feel free to reach out directly via email or social platforms.
              </p>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-900/80 border border-white/5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Email Address</span>
                    <a href={`mailto:${profileData.email}`} className="text-gray-200 hover:text-emerald-400 transition-colors font-medium">
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-900/80 border border-white/5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Location</span>
                    <span className="text-gray-200 font-medium">{profileData.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-900/80 border border-white/5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Status</span>
                    <span className="text-emerald-400 font-medium">{profileData.status}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-gray-400 block mb-3 uppercase tracking-wider">Connect on Social</span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3 rounded-xl bg-gray-900 border border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3 rounded-xl bg-gray-900 border border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center gap-3"
                >
                  <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-2">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Prepared!</h3>
                  <p className="text-gray-300 text-sm max-w-md">
                    Your email client should open shortly with the pre-filled message. You can also send directly to{" "}
                    <span className="text-emerald-400 font-mono">{profileData.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-500 text-gray-950 font-semibold text-xs transition-all hover:bg-emerald-400"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Name *</label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                      />
                      {errors.name && (
                        <span className="text-rose-400 text-xs mt-1 block">{errors.name.message}</span>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Email *</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                      />
                      {errors.email && (
                        <span className="text-rose-400 text-xs mt-1 block">{errors.email.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">Subject *</label>
                    <input
                      {...register("subject")}
                      type="text"
                      placeholder="Backend Engineering Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                    />
                    {errors.subject && (
                      <span className="text-rose-400 text-xs mt-1 block">{errors.subject.message}</span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm resize-none"
                    />
                    {errors.message && (
                      <span className="text-rose-400 text-xs mt-1 block">{errors.message.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
