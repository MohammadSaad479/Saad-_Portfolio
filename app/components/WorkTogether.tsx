"use client";

import { ArrowUpRight, Mail, ArrowRight, CircleCheck } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const WorkTogether = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_fx1nqu9",
        "template_z508ff4",
        e.target,
        "MDWb9Epf8P07AdUWQ"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          e.target.reset();

          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <>
      {/* ✅ SUCCESS ALERT (TOP OF SCREEN) */}
      {success && (
  <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto flex justify-center">
    <div className="flex items-center gap-2 
      bg-green-100 border border-green-300 
      text-green-800 text-xs sm:text-sm md:text-base 
      px-3 sm:px-5 py-2 sm:py-3 
      rounded-lg shadow-md">

      <CircleCheck className="text-green-800 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      <span>Message sent successfully</span>

    </div>
  </div>
)}


      <div id="contact" className="mb-15 mt-20">
       <div className="px-3 md:px-0 lg:px-0">
         <h2 className="text-white/90 text-sm">Let's Work Together</h2>
        <p className="text-sm mt-2 text-gray-400/50">
          From concept to creation — done right.
        </p>
       </div>

        <div className="md:flex md:justify-between mt-5 px-2  gap-5 ">
          {/* LEFT CARD */}
        <div className="px-3 md:px-0 lg:px-0">
            <div className="w-90 h-110  bg-neutral-800/10 border border-white/10 rounded-lg">
            <div className="mt-10 ml-7">
              <h2 className="text-white text-lg tracking-tight">
                Get in Touch
              </h2>
              <p className="text-sm mt-2 text-gray-400/50">
                Feel free to reach out using your preferred method, and let’s
                talk about your project...
              </p>
            </div>

            <div className="mt-4 ml-7">
              <div className="bg-neutral-700/20 w-75 h-15 rounded-sm border border-white/20 hover:opacity-80">
                <div className="flex justify-between px-3">
                  <a className="flex gap-3"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=saadqureshi479@gmail.com&su=Contact via email"
                        target="_blank"
                        rel="noopener noreferrer">
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

              <div className="bg-neutral-700/20 w-75 h-15 rounded-sm border border-white/20 hover:opacity-80 mt-3">
                <div className="flex justify-between px-3">
                  <a className="flex gap-3"  href="https://x.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer">
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
        </div>

          {/* RIGHT CARD */}
          <div className="px-3 md:px-0 lg:px-0">
            <div className="w-90 h-110  mt-10 md:mt-0 lg:mt-0 bg-neutral-800/10 border border-white/10 rounded-lg">
            <div className="mt-10 ml-7">
              <h2 className="text-white text-lg tracking-tight">
                Send a Message
              </h2>
              <p className="text-sm mt-2 text-gray-400/50">
                Prefer writing? Fill out the form,
                <br /> and I’ll respond within 24 hours.
              </p>
            </div>

            <form
              onSubmit={sendEmail}
              className="mt-4 ml-7 flex flex-col gap-4"
            >
              <input
                className="bg-neutral-700/20 w-75 h-12 px-4 rounded-sm border border-white/20 text-white/90 placeholder:text-sm focus:outline-none"
                type="text"
                placeholder="Full Name"
                name="fullName"
                required
              />

              <input
                className="bg-neutral-700/20 w-75 h-12 px-4 rounded-sm border border-white/20 text-white/90 placeholder:text-sm focus:outline-none"
                type="email"
                placeholder="Email Address"
                name="email"
                required
              />

              <textarea
                className="bg-neutral-700/20 w-75 h-20 px-4 py-3 rounded-sm border border-white/20 text-white/90 placeholder:text-sm focus:outline-none resize-none"
                placeholder="Your Message"
                name="message"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-75 h-12 mt-1 flex items-center justify-center gap-2 rounded-sm border border-white/30 text-white/50 hover:bg-white/80 hover:text-black transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="stroke-1" />
              </button>
            </form>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default WorkTogether;
