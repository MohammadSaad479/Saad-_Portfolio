import { Tooltip } from "@/components/tooltip"
import { CopyrightIcon } from 'lucide-react'
import TwitterXIcon from '@/components/ui/twitter-x-icon'
import GithubIcon from '@/components/ui/github-icon'
import GmailIcon from '@/components/ui/gmail-icon'


const Footer = () => {
  return (
    <div className="w-full h-15 rounded-t  bg-neutral-800/20 border-white/10 border-t flex items-end">
      <div className="w-full flex justify-between px-5 pb-3">
        <span className="text-white/40 text-xs flex items-center gap-2">
          <CopyrightIcon className="text-white/40 size-3 stroke-1" />
          2026 Mohammad Saad
        </span>

        <div className="flex gap-3">
          <Tooltip text="Twitter">
            <a
              href="https://x.com/MohammadSa3918"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <TwitterXIcon className="text-white/70 size-4 stroke-1" />
            </a>
          </Tooltip>

          <Tooltip text="Github">
            <a
              href="https://github.com/MohammadSaad479"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <GithubIcon className="text-white/70 size-4 stroke-1" />
            </a>
          </Tooltip>

          <Tooltip text="Gmail">
  <a
    href="mailto:saadqureshi479@gmail.com?subject=Contact from Portfolio&body=Hello Mohammad Saad,"
    className="flex items-center justify-center"
  >
    <GmailIcon className="text-white/70 size-4 stroke-1" />
  </a>
</Tooltip>

        </div>
      </div>
    </div>
  )
}

export default Footer
