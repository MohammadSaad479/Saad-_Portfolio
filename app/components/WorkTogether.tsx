"use client";

import { useRef, useState, FormEvent } from "react";
import { ArrowRight, ArrowUpRight, CircleCheck, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";
import { EMAIL, GMAIL_COMPOSE, X_URL } from "@/lib/data";

const channels = [
  { href: GMAIL_COMPOSE, icon: <Mail className="size-4" />, title: EMAIL, note: "Quick queries & questions" },
  { href: X_URL, icon: <FaXTwitter className="size-4" />, title: "Connect on X", note: "Follow for updates & insights" },
];

const WorkTogether = ({ title = "Let’s work together" }: { title?: string }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");
    emailjs.sendForm("service_fx1nqu9", "template_z508ff4", formRef.current, "MDWb9Epf8P07AdUWQ").then(
      () => {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      },
      (error) => {
        console.error(error);
        setStatus("error");
      }
    );
  };

  return (
    <section id="contact" className="scroll-mt-8">
      {status === "success" && (
        <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
          <div className="chip px-4 py-2 text-sm">
            <CircleCheck className="size-4 text-accent" /> Message sent successfully
          </div>
        </div>
      )}

      <SectionHeader eyebrow="Contact" title={title} description="From concept to creation — done right." />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="card flex flex-col">
          <h3 className="headline-sm">Get in touch</h3>
          <p className="mt-2 text-sm leading-6 text-stone">
            Reach out using your preferred method, and let’s talk about your project.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl bg-subtle px-4 py-3 transition-colors hover:bg-muted"
              >
                <span className="text-stone group-hover:text-accent">{c.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-ink">{c.title}</span>
                  <span className="block text-xs text-stone">{c.note}</span>
                </span>
                <ArrowUpRight className="size-4 text-stone group-hover:text-accent" />
              </a>
            ))}
          </div>
          <p className="mt-auto pt-6 font-script text-[20px] leading-[22px] text-stone">
            Replies within 24 hours · available for hire
          </p>
        </div>

        <div className="card">
          <h3 className="headline-sm">Send a message</h3>
          <p className="mt-2 text-sm leading-6 text-stone">Prefer writing? Fill out the form and I’ll respond within 24 hours.</p>
          <form ref={formRef} onSubmit={sendEmail} className="mt-5 flex flex-col gap-3">
            <input className="input" type="text" placeholder="Full name" name="fullName" aria-label="Full name" required />
            <input className="input" type="email" placeholder="Email address" name="email" aria-label="Email address" required />
            <textarea className="input h-28 resize-none rounded-2xl" placeholder="Your message" name="message" aria-label="Your message" required />
            {status === "error" && <p className="text-sm text-error">Something went wrong — please try again or email me directly.</p>}
            <button type="submit" disabled={status === "loading"} className="btn-primary self-start">
              {status === "loading" ? "Sending…" : "Send message"} <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
