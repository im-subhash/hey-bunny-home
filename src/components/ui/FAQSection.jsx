"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeams } from "./background-beams";

const faqs = [
  {
    question: "What is this platform all about? 🤔",
    answer:
      "Our platform helps you streamline your social media game! Schedule posts, track analytics, and automate content like a pro! 📈🚀",
  },
  {
    question: "Can I use this on my phone? 📱",
    answer:
      "Absolutely! We're mobile-friendly, so you can manage everything on the go. Your content, your rules – anywhere, anytime! 📲",
  },
  {
    question: "How do I schedule posts across multiple platforms? 📅",
    answer:
      "Just set it up in our scheduler! Pick your platforms, set the time, and we'll handle the rest – Facebook, Instagram, Twitter? All covered! 🌐",
  },
  {
    question: "Can I customize my posts? 🎨",
    answer:
      "Totally! With flexible options, you can adjust each post's design, add emojis, and make it uniquely yours. 🎉",
  },
  {
    question: "Is it free to use? 🆓",
    answer:
      "Yes! It's completely free to use! No hidden charges, no credit card required – just sign up and start creating amazing content! 🌟",
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq-section" className="relative w-full bg-neutral-950 flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      <div className="max-w-2xl mx-auto relative z-10">
        <h1 className="text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-10">
          Frequently Asked Questions 
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 flex items-center justify-between text-left bg-gray-800 hover:bg-gray-700"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  className="ml-2"
                >
                  ➕
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900 p-4 text-gray-300"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
