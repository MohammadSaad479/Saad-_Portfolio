import { Mail } from "lucide-react";
import Link from "next/link";
import { Tooltip } from "@/components/tooltip";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import GithubIcon from "@/components/ui/github-icon";
import GmailIcon from "@/components/ui/gmail-icon";
import { GITHUB_URL, GMAIL_COMPOSE, X_URL } from "@/lib/data";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-serif text-[1.2em] italic text-ink">{children}</span>
);

const Intro = () => (
  <section>
    <p className="body-md text-stone sm:text-[18px]">
      I build interactive web applications using <Highlight>TypeScript</Highlight>, <Highlight>React</Highlight>,{" "}
      <Highlight>Tailwind CSS</Highlight> and <Highlight>Next.js</Highlight> with a strong focus on UI design. I’m
      passionate about creating seamless user experiences and driven by a sharp eye for detail.
    </p>

    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Link href="#contact" className="btn-primary">
        <Mail className="size-4" /> Get in touch
      </Link>
      <Tooltip text="Twitter">
        <a href={X_URL} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="Twitter">
          <TwitterXIcon className="size-4" />
        </a>
      </Tooltip>
      <Tooltip text="GitHub">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
          <GithubIcon className="size-4" />
        </a>
      </Tooltip>
      <Tooltip text="Gmail">
        <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="Email">
          <GmailIcon className="size-4" />
        </a>
      </Tooltip>
    </div>
  </section>
);

export default Intro;
