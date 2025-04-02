"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill in all required fields.",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mzzejedg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          message: "Thank you! Your message has been sent successfully.",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setFormStatus({ submitted: false, error: false, message: "" });
        }, 5000);
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: error.message || "Failed to send message.",
      });
    }
  };

  return (
    <div id="contact" className="w-full h-full overflow-y-auto py-8 px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
        <p className="mt-2 text-black">
          I'd love to hear about your project. Let's work together!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact Information */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg border border-gray-100 shadow-sm p-5">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Information
            </h3>
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-blue-500 rounded-full p-1.5 text-white">
                <Mail size={16} />
              </div>
              <div className="ml-3">
                <p className="text-xs font-semibold text-white">Email</p>
                <div className="text-sm text-white cursor-none">
                  <a
                    href="mailto:onaopemipomichael1999@gmail.com"
                    className="hover:text-blue-500"
                  >
                    onaopemipomichael1999@gmail.com
                  </a>
                  <br />
                  <a
                    href="mailto:excellentmichael2110@gmail.com"
                    className="hover:text-blue-500 cursor-pointer"
                  >
                    excellentmichael2110@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-green-500 rounded-full p-1.5 text-white">
                <Phone size={16} />
              </div>
              <div className="ml-3">
                <p className="text-xs font-semibold text-white">Phone</p>
                <a
                  href="tel:08066688966"
                  className="text-sm text-white hover:text-green-500"
                >
                  080 6668 8966
                </a>
              </div>
            </div>
            <h4 className="text-xs font-medium text-white mb-3">
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/opemich"
                target="_blank"
                className="text-white hover:text-blue-500"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/onaopemipo-michael-784147300/"
                target="_blank"
                className="text-white hover:text-blue-500"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/Priest077"
                target="_blank"
                className="text-white hover:text-blue-500"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="bg-gray-800 rounded-lg border border-gray-100 shadow-sm p-5">
            <h3 className="text-lg font-semibold text-white mb-4">
              Send Me a Message
            </h3>

            {formStatus.message && (
              <div
                className={`p-3 mb-4 rounded-md text-sm ${
                  formStatus.error
                    ? "bg-red-50 text-red-800"
                    : "bg-green-50 text-green-800"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-white mb-1"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-900 text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-white mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-900 text-white"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-white mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-900 text-white"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-white mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-900 text-white"
                  required
                ></textarea>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 text-sm bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  {formStatus.submitted ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
