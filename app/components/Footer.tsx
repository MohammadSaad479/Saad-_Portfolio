import { Tooltip } from "@/components/tooltip";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import GithubIcon from "@/components/ui/github-icon";
import GmailIcon from "@/components/ui/gmail-icon";
import { EMAIL, GITHUB_URL, X_URL } from "@/lib/data";

const Footer = () => (
  <footer className="flex flex-col items-start justify-between gap-4 border-t-2 border-dashed border-line py-8 sm:flex-row sm:items-center">
    <p className="text-sm text-stone">
      © {new Date().getFullYear()} Mohammad Saad · <span className="font-script text-[20px] text-ink">made with care</span>
    </p>
    <div className="flex gap-4 text-stone">
      <Tooltip text="Twitter">
        <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent">
          <TwitterXIcon className="size-4" />
        </a>
      </Tooltip>
      <Tooltip text="GitHub">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent">
          <GithubIcon className="size-4" />
        </a>
      </Tooltip>
      <Tooltip text="Gmail">
        <a href={`mailto:${EMAIL}?subject=Contact from Portfolio`} aria-label="Email" className="hover:text-accent">
          <GmailIcon className="size-4" />
        </a>
      </Tooltip>
    </div>
  </footer>
);

export default Footer;
