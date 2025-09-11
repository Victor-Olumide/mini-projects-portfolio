// import React, { useState } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h1>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Say Hi! and tell me what you think
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. Whether you have a project in mind, need advice on
            development, or want to share feedback, feel free to reach out.
            Let's connect and build something amazing together!
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-10">
        <form
          action="mailto:oyewumivictor7@gmail.com"
          method="post"
          enctype="text/plain"
          className="max-w-md mx-auto mb-8"
        >
          <input type="hidden" name="subject" value="Contact Form Submission" />
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className=" w-full p-3 rounded-3xl border-2 border-gray-200 focus:outline-none  focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-3xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="bg-gray-100 w-full p-3 rounded-3xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-3xl hover:bg-blue-800 transition-colors w-full"
          >
            Send Message
          </button>
        </form>

        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/victor-olumide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              href="https://github.com/Victor-Olumide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaGithub size={50} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
