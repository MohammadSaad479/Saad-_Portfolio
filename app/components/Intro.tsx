
"use client"
import BrandNextjsIcon from '@/components/ui/brand-nextjs-icon'
import BrandReactIcon from '@/components/ui/brand-react-icon'
import { IconBrandTailwind, IconBrandTypescript } from '@tabler/icons-react'
import { Tooltip } from "@/components/tooltip"
import { Mail } from 'lucide-react'
import TwitterXIcon from '@/components/ui/twitter-x-icon'
import GithubIcon from '@/components/ui/github-icon'
import GmailIcon from '@/components/ui/gmail-icon'

const Intro = () => {
    return (
        <div className='md:mt-10 lg:mt-10 mt-5 px-3 md:px-0 lg:px-0'>
            <p className='text-gray-300 leading-loose  text-[16.5px]  md:text-lg lg:text-lg '>I build interactive web applications using <span className='text-blue-400 py-1 bg-blue-400/20 px-2 border border-dashed border-blue-400/50 rounded-sm'> <IconBrandTypescript className='inline-flex ' /> TypeScript</span>,<span className='text-cyan-400 py-1 bg-cyan-400/20 px-2 border border-dashed border-cyan-400/50 rounded-sm'><BrandReactIcon className='inline-flex' /> React</span>, <span className='text-[#00bed7] py-1 bg-[#00bed7]/20 px-2 border border-dashed border-[#00bed7] rounded-sm'> <IconBrandTailwind className='inline-flex' /> Tailwind CSS</span> and <span className='text-white py-1 bg-gray-300/20 px-2 border border-dashed border-gray-400/50 rounded-sm'><BrandNextjsIcon className='inline-flex' /> Next.js</span> with a strong focus on UI design. I’m passionate about creating seamless user experiences and driven by a sharp eye for detail.</p>

            <div className='mt-10'>
                <p className='text-white/90  text-sm'>Want to connect with me??</p>
                <p className='text-gray-400/50  text-sm mt-1'>I’m open to new opportunities, collaborations, and interesting projects.</p>
            </div>
            <div className='mt-5 pb-2 flex gap-3  items-center'>
                <button onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }} className='text-white py-1 px-4 bg-neutral-800/70 rounded-sm border border-dashed border-white/20 cursor-pointer'> < Mail className='inline-flex size-5 stroke-1 ' /> Contact</button>

                <Tooltip text="Twitter">
                    <a
                        href="https://x.com/MohammadSa3918"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center py-1 px-1 bg-neutral-800/70 rounded-sm border border-dashed border-white/20"
                    >
                        <TwitterXIcon className="text-white size-5.4" />
                    </a>
                </Tooltip>

                <Tooltip text="Github">
                    <a
                        href="https://github.com/MohammadSaad479"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center py-1 px-1 bg-neutral-800/70 rounded-sm border border-dashed border-white/20"
                    >
                        <GithubIcon className="text-white size-5.4" />
                    </a>
                </Tooltip>

                <Tooltip text="Gmail">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=saadqureshi479@gmail.com&su=Contact via email"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center py-1 px-1 bg-neutral-800/70 rounded-sm border border-dashed border-white/20"
                    >
                        <GmailIcon className="text-white size-5.4" />
                    </a>
                </Tooltip>

            </div>

        </div>
    )
}

export default Intro