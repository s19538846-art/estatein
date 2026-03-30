"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";

const inputBase =
  "w-full bg-[#1A1A1A] border border-[#262626] rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors duration-200 focus:border-[#4D4D4D] placeholder:text-[#666666]";

const labelBase = "block text-sm text-white mb-2";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelBase}>{label}</label>
      {children}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, placeholder }: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <Field label={label}>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`${inputBase} appearance-none pr-10 ${value === "" ? "text-[#666666]" : "text-white"}`}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#1A1A1A] text-white">{opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#703BF7] pointer-events-none" />
      </div>
    </Field>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    hearAbout: "",
    message: "",
    agreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="flex items-end gap-1">
            <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
            <Star className="w-5 h-5 text-gray-400 fill-gray-400" />
            <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
          </div>
          <h2 className="text-4xl font-semibold">Let's Connect</h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#999999" }}>
            We're excited to connect with you and learn more about your real estate goals. Use the
            form below to get in touch with Estatein. Whether you're a prospective client, partner,
            or simply curious about our services, we're here to answer your questions.
          </p>
        </motion.div>

        {/* Form container */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#141414] border border-[#262626] rounded-2xl p-12 space-y-8"
        >
          {/* Fields grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">

            <Field label="First Name">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className={inputBase}
              />
            </Field>

            <Field label="Last Name">
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className={inputBase}
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className={inputBase}
              />
            </Field>

            <Field label="Phone">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className={inputBase}
              />
            </Field>

            <SelectField
              label="Inquiry Type"
              name="inquiryType"
              value={form.inquiryType}
              onChange={handleChange}
              options={["Buy", "Sell", "Rent", "Management"]}
              placeholder="Select Inquiry Type"
            />

            <SelectField
              label="How Did You Hear About Us?"
              name="hearAbout"
              value={form.hearAbout}
              onChange={handleChange}
              options={["Google", "Social Media", "Friend", "Other"]}
              placeholder="Select an Option"
            />

            {/* Message — full width */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <label className={labelBase}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your Message here..."
                rows={5}
                className={`${inputBase} resize-none`}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <div className="relative mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={form.agreed}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                    form.agreed ? "bg-[#703BF7] border-[#703BF7]" : "bg-transparent border-[#4D4D4D]"
                  }`}
                >
                  {form.agreed && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-sm leading-relaxed" style={{ color: "#999999" }}>
                I agree with{" "}
                <a href="#" className="text-white underline hover:text-purple-400 transition-colors">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-white underline hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0 px-8 py-3 bg-[#703BF7] text-white text-sm font-medium rounded-lg hover:bg-[#5f2fe0] transition-colors duration-200"
            >
              Send Your Message
            </motion.button>
          </div>
        </motion.form>

      </div>
    </section>
  );
}
