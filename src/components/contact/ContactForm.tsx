"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export interface ContactFormProps {
  categories?: string[];
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  categories = siteConfig.contactFormCategories,
  className = "",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    category: categories[0] || "General Enquiry",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Message cannot be empty";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      category: categories[0] || "General Enquiry",
      subject: "",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div
      className={`bg-surface-white border-[2.5px] md:border-[3px] border-ink-black shadow-[6px_6px_0px_#121212] rounded-xl p-6 sm:p-8 ${className}`}
    >
      {/* Header */}
      <div className="border-b-2 border-ink-black pb-4 mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            {"// FORM PROTOCOL v2.4"}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-coral border border-ink-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-container border border-ink-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-mint border border-ink-black" />
          </div>
        </div>
        <h2 className="font-headline-md text-headline-sm sm:text-headline-md uppercase text-ink-black font-extrabold tracking-tight">
          TRANSMIT A MESSAGE
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Fill in the brief below. Our secretariat team routes inquiries directly to the
          respective domain leads.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 bg-accent-mint/20 border-2 border-ink-black shadow-[4px_4px_0px_#121212] rounded flex flex-col gap-4 text-ink-black animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[32px] text-accent-mint">
              check_circle
            </span>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-title-lg uppercase font-bold text-ink-black">
                TRANSMISSION RECEIVED!
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                A TechSoc coordinator will review your message.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 bg-surface-white border-2 border-ink-black font-label-sm uppercase font-bold shadow-[2px_2px_0px_#121212] hover:bg-secondary-container active:translate-x-0.5 active:translate-y-0.5"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Full Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="fullName"
                className="font-label-md text-label-md uppercase font-bold text-ink-black flex items-center gap-1"
              >
                Full Name <span className="text-accent-coral">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="e.g. Aditi Sharma"
                className={`w-full px-3.5 py-2.5 bg-canvas-cream border-[2.5px] border-ink-black rounded font-body-md text-body-md text-ink-black placeholder:text-outline shadow-[3px_3px_0px_#121212] focus:outline-none focus:bg-surface-white focus:shadow-[4px_4px_0px_#1d4ed8] transition-all ${
                  errors.fullName ? "border-accent-coral" : ""
                }`}
              />
              {errors.fullName && (
                <span className="font-label-sm text-[11px] text-accent-coral font-bold">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="font-label-md text-label-md uppercase font-bold text-ink-black flex items-center gap-1"
              >
                Email Address <span className="text-accent-coral">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="name@example.com"
                className={`w-full px-3.5 py-2.5 bg-canvas-cream border-[2.5px] border-ink-black rounded font-body-md text-body-md text-ink-black placeholder:text-outline shadow-[3px_3px_0px_#121212] focus:outline-none focus:bg-surface-white focus:shadow-[4px_4px_0px_#1d4ed8] transition-all ${
                  errors.email ? "border-accent-coral" : ""
                }`}
              />
              {errors.email && (
                <span className="font-label-sm text-[11px] text-accent-coral font-bold">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Category Radio Selector */}
          {categories && categories.length > 0 && (
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md uppercase font-bold text-ink-black">
                Category / Purpose
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFormData({ ...formData, category: cat })}
                    className={`px-3 py-1.5 font-label-sm text-label-sm uppercase font-bold tracking-wider rounded border-2 border-ink-black transition-all ${
                      formData.category === cat
                        ? "bg-secondary-container text-ink-black shadow-[3px_3px_0px_#121212] -translate-x-0.5 -translate-y-0.5"
                        : "bg-canvas-cream text-ink-black shadow-[1px_1px_0px_#121212] hover:bg-surface-container"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Subject Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="subject"
              className="font-label-md text-label-md uppercase font-bold text-ink-black"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              placeholder="e.g. Hackathon Partnership or Domain Workshop"
              className="w-full px-3.5 py-2.5 bg-canvas-cream border-[2.5px] border-ink-black rounded font-body-md text-body-md text-ink-black placeholder:text-outline shadow-[3px_3px_0px_#121212] focus:outline-none focus:bg-surface-white focus:shadow-[4px_4px_0px_#1d4ed8] transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="font-label-md text-label-md uppercase font-bold text-ink-black flex items-center gap-1"
            >
              Message <span className="text-accent-coral">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell us what you have in mind, deadlines, links, or expectations..."
              className={`w-full px-3.5 py-2.5 bg-canvas-cream border-[2.5px] border-ink-black rounded font-body-md text-body-md text-ink-black placeholder:text-outline shadow-[3px_3px_0px_#121212] focus:outline-none focus:bg-surface-white focus:shadow-[4px_4px_0px_#1d4ed8] transition-all resize-none ${
                errors.message ? "border-accent-coral" : ""
              }`}
            />
            {errors.message && (
              <span className="font-label-sm text-[11px] text-accent-coral font-bold">
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit Button & Encryption Notice */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-secondary-container text-ink-black font-label-lg text-label-lg uppercase tracking-wider font-extrabold border-[3px] border-ink-black shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all rounded cursor-pointer"
            >
              [ SEND MESSAGE → ]
            </button>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-[12px] font-bold">
              <span className="material-symbols-outlined text-[16px] text-ink-black">lock</span>
              <span>Encrypted directly to TechSoc inbox</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
