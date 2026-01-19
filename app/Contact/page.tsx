"use client";

import { ArrowUpRight, Mail, ArrowRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Page = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_fx1nqu9",
      "template_z508ff4",
      e.target,
      "MDWb9Epf8P07AdUWQ"
    ).then(
      () => {
        setSuccess(true);
        setLoading(false);
        e.target.reset();
        setTimeout(() => setSuccess(false), 5000);
      },
      () => setLoading(false)
    );
  };

  return (
    <div className="w-full min-h-screen bg-neutral-950">
      <div className="w-full max-w-3xl mx-auto min-h-screen bg-neutral-950 px-4 sm:px-6 lg:px-0">

        {success && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-green-100 border border-green-300 text-green-800 text-sm px-6 py-3 rounded-md shadow-md">
              Message sent successfully. We will get back to you shortly!
            </div>
          </div>
        )}

        <div id="contact" className=" pt-10">
          <h2 className="text-white/90 text-md ml-2.5">Contact Us</h2>

          <div className="flex flex-col lg:flex-row justify-between gap-6 mt-5 px-1 sm:px-0">

            {/* LEFT CARD */}
            <div className="w-full lg:w-90 min-h-[27rem] bg-neutral-800/10 border border-white/10 rounded-lg p-4 sm:p-0">
              <div className="mt-6 sm:mt-10 sm:ml-7">
                <h2 className="text-white text-lg tracking-tight">Get in Touch</h2>
                <p className="text-sm mt-2 text-gray-400/50">
                  Feel free to reach out using your preferred method, and let’s talk about your project...
                </p>
              </div>

              <div className="mt-4 sm:ml-7">
                <div className="bg-neutral-700/20 w-full lg:w-75 h-15 rounded-sm border border-white/20 hover:opacity-80">
                  <div className="flex justify-between px-3">
                    <a
                      className="flex gap-3"
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=saadqureshi479@gmail.com&su=Contact via email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="text-white/50 mt-4.5 stroke-1 size-5" />
                      <div>
                        <h2 className="text-white/90 text-[13px] mt-3 tracking-tighter">
                          saadqureshi479@gmail.com
                        </h2>
                        <p className="text-gray-400/50 text-[9px] tracking-tight">
                          Quick queries & questions
                        </p>
                      </div>
                    </a>
                    <ArrowUpRight className="text-white/50 size-5 mt-4.5 stroke-1" />
                  </div>
                </div>

                <div className="bg-neutral-700/20 w-full lg:w-75 h-15 rounded-sm border border-white/20 hover:opacity-80 mt-3">
                  <div className="flex justify-between px-3">
                    <a
                      className="flex gap-3"
                      href="https://x.com/YOUR_USERNAME"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter className="text-white/50 mt-4.5 size-5" />
                      <div>
                        <h2 className="text-white/90 text-[13px] mt-3 tracking-tighter">
                          Connect on X
                        </h2>
                        <p className="text-gray-400/50 text-[9px] tracking-tight">
                          Follow for updates & insights
                        </p>
                      </div>
                    </a>
                    <ArrowUpRight className="text-white/50 size-5 mt-4.5 stroke-1" />
                  </div>
                </div>

                <div className="mt-10 text-[10px]">
                  <h2 className="text-gray-400/50 hover:text-white/70 transition-all duration-300">
                    Responses within 24 hours | Available for hire
                  </h2>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full lg:w-90 min-h-[27rem] bg-neutral-800/10 border border-white/10 rounded-lg p-4 sm:p-0">
              <div className="mt-6 sm:mt-10 sm:ml-7">
                <h2 className="text-white text-lg tracking-tight">Send a Message</h2>
                <p className="text-sm mt-2 text-gray-400/50">
                  Prefer writing? Fill out the form, and I’ll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={sendEmail} className="mt-4 sm:ml-7 flex flex-col gap-4 pr-2">
                <input className="bg-neutral-700/20 w-full lg:w-75 h-12 px-4 rounded-sm border border-white/20 text-white/90" placeholder="Full Name" name="fullName" required />
                <input className="bg-neutral-700/20 w-full lg:w-75 h-12 px-4 rounded-sm border border-white/20 text-white/90" placeholder="Email Address" name="email" type="email" required />
                <textarea className="bg-neutral-700/20 w-full lg:w-75 h-20 px-4 py-3 rounded-sm border border-white/20 text-white/90 resize-none" placeholder="Your Message" name="message" required />
                <button disabled={loading} className="w-full lg:w-75 h-12 mt-1 flex items-center justify-center gap-2 rounded-sm border border-white/30 text-white/50 hover:bg-white/80 hover:text-black transition-all duration-300 disabled:opacity-50">
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="stroke-1" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

