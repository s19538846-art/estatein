"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Добавили AnimatePresence
import { Star, ChevronDown, CheckCircle, X } from "lucide-react"; // Добавили иконки

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
  const [isSent, setIsSent] = useState(false); // Состояние для модалки
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
    if (!form.agreed) return alert("Please agree to the terms");
    
    console.log("Form submitted:", form);
    setIsSent(true); // Показываем модалку
    
    // Очистка формы (опционально)
    setForm({
      firstName: "", lastName: "", email: "", phone: "",
      inquiryType: "", hearAbout: "", message: "", agreed: false,
    });

    // Авто-закрытие через 5 секунд
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section className="bg-[#141414] text-white py-20 px-6 md:px-16 border-t border-[#262626] relative">
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
          <h2 className="text-4xl font-semibold">Let&apos;s Connect</h2>
          <p className="text-sm leading-relaxed max-w-2xl text-gray-400">
            We&apos;re excited to connect with you and learn more about your real estate goals.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            <Field label="First Name">
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Enter First Name" className={inputBase} />
            </Field>

            <Field label="Last Name">
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Enter Last Name" className={inputBase} />
            </Field>

            <Field label="Email">
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your Email" className={inputBase} />
            </Field>

            <Field label="Phone">
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter Phone Number" className={inputBase} />
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

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <div className="relative mt-0.5 shrink-0">
                <input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} className="sr-only" />
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${form.agreed ? "bg-[#703BF7] border-[#703BF7]" : "bg-transparent border-[#4D4D4D]"}`}>
                  {form.agreed && <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </div>
              </div>
              <span className="text-sm text-gray-400">I agree with Terms of Use and Privacy Policy</span>
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#703BF7] text-white text-sm font-medium rounded-lg hover:bg-[#5f2fe0] transition-colors"
            >
              Send Your Message
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* МОДАЛЬНОЕ ОКНО УСПЕХА */}
      <AnimatePresence>
        {isSent && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            {/* Оверлей (фон) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSent(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            {/* Контент окна */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="relative bg-[#1A1A1A] border border-[#262626] p-10 rounded-3xl max-w-sm w-full text-center space-y-6 shadow-2xl"
            >
              <button 
                onClick={() => setIsSent(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mx-auto w-20 h-20 bg-[#703BF7]/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-[#703BF7]" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Thank you for contacting Estatein. We have received your message and will get back to you shortly.
                </p>
              </div>

              <button
                onClick={() => setIsSent(false)}
                className="w-full py-4 bg-[#703BF7] hover:bg-[#5f2fe0] text-white text-sm font-semibold rounded-xl transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}