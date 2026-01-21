import LinkIcon from '@/components/ui/link-icon'
import { IoLogoJavascript } from "react-icons/io";
import { Tooltip } from "@/components/tooltip"
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";


const Projects = () => {
    return (
        <>
            <div className='mt-15'>
                <div className='px-3 md:px-0 lg:px-0'>
                    <h2 className='text-white/90 text-sm'>Projects</h2>
                    <p className='text-gray-400/50 text-sm mt-2'>These are a few projects I created as part of my learning and skill development...</p>
                </div>

                <div className='md:flex  md:gap-10 gap-8 px-10 md:px-0 lg:px-0'>
                    {/* Project-1 */}
                    <div className='w-70 h-105 overflow-hidden rounded-lg bg-neutral-900/50 mt-10 border border-dashed border-white/30'>
                        <img className='w-full h-55 hover:scale-90 hover:rounded-lg' src="/img2.png" alt="" />
                        <a
                            href="https://ai-saas-next-js-template.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between px-4 mt-4"
                        >
                            <p className="text-white/90 text-sm">AI Starter Kit</p>
                            <LinkIcon className="text-gray-400/50 size-6 hover:text-white/90" />
                        </a>

                        <p className='text-gray-400/50 text-xs  tracking-tighter mt-3 ml-4'>AI-SaaS Next.js Template is a clean and modern starter UI for building AI-powered SaaS apps with Next.js, designed to help developers launch quickly.
                        </p>
                        <div className='px-4'>

                            <Tooltip text="JavaScript">
                                <div className="flex   justify-center items-center size-10 mt-5 rounded-sm ">
                                    <IoLogoJavascript className="text-yellow-300 size-7" />
                                </div>
                            </Tooltip>

                            <Tooltip text="Tailwind Css">
                                <div className="flex  justify-center items-center size-10 mt-5 rounded-sm  ">
                                    <RiTailwindCssFill className="text-blue-500/80 size-7" />
                                </div>
                            </Tooltip>

                            <Tooltip text="TypeScript">
                                <div className="flex  justify-center items-center size-10 mt-5 rounded-sm  ">
                                    <SiTypescript className="text-blue-500/80 size-7" />
                                </div>
                            </Tooltip>

                            <Tooltip text="React">
                                <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                    <FaReact className="text-blue-400/90 size-7" />
                                </div>
                            </Tooltip>

                            <Tooltip text="Nextjs">
                                <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                    <RiNextjsFill className="text-white/90 size-7" />
                                </div>
                            </Tooltip>
                        </div>


                    </div>

                    {/* Project-2 */}
                    <div className='w-70 h-105 overflow-hidden rounded-lg bg-neutral-900/50 mt-10 border border-dashed border-white/30'>
                        <img className='w-full h-55 hover:scale-90 hover:rounded-lg' src="/linear.png" alt="" />
                        <div className='flex justify-between px-4 mt-4'>
                            <p className='text-white/90 text-sm'>Saas product template</p>
                            <LinkIcon className='text-gray-400/50 size-6 hover:text-white/90' />
                        </div>
                        <p className='text-gray-400/50 text-sm tracking-tighter mt-3 ml-4'>Modern saas template made using futuristic technologies like React, Tailwind CSS, Nextjs, Javascript</p>
                        <div className='px-4'>

                            <Tooltip text="JavaScript">
                                <div className="flex   justify-center items-center size-10 mt-5 rounded-sm ">
                                    <IoLogoJavascript className="text-yellow-300 size-7" />
                                </div>
                            </Tooltip>

                            <Tooltip text="Tailwind Css">
                                <div className="flex  justify-center items-center size-10 mt-5 rounded-sm  ">
                                    <RiTailwindCssFill className="text-blue-500/80 size-7" />
                                </div>
                            </Tooltip>

                            <Tooltip text="Nodejs">
                                <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                    <FaNodeJs className="text-green-700 size-7" />
                                </div>
                            </Tooltip>

                            <Tooltip text="React">
                                <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                    <FaReact className="text-blue-400/90 size-7" />
                                </div>
                            </Tooltip>

                            <Tooltip text="Nextjs">
                                <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                    <RiNextjsFill className="text-white/90 size-7" />
                                </div>
                            </Tooltip>
                        </div>


                    </div>
                </div>

                {/* Project 3-4 */}
                <div className='md:flex justify-center md:gap-10 gap-8 px-10 md:px-0 lg:px-0'>
                    {/* Project-1
                <div className='w-70 h-105 overflow-hidden rounded-lg bg-neutral-900/50 mt-10 border border-dashed border-white/30'>
                    <img className='w-full h-55 hover:scale-90 hover:rounded-lg' src="/linear.png" alt="" />
                    <div className='flex justify-between px-4 mt-4'>
                        <p className='text-white/90 text-sm'>Saas product template</p>
                        <LinkIcon className='text-gray-400/50 size-6 hover:text-white/90' />
                    </div>
                    <p className='text-gray-400/50 text-sm tracking-tighter mt-3 ml-4'>Modern saas template made using futuristic technologies like React, Tailwind CSS, Nextjs, Javascript</p>
                    <div className='px-4'>

                        <Tooltip text="JavaScript">
                            <div className="flex   justify-center items-center size-10 mt-5 rounded-sm ">
                                <IoLogoJavascript className="text-yellow-300 size-7" />
                            </div>
                        </Tooltip>

                        <Tooltip text="Tailwind Css">
                            <div className="flex  justify-center items-center size-10 mt-5 rounded-sm  ">
                                <RiTailwindCssFill  className="text-blue-500/80 size-7" />
                            </div>
                        </Tooltip>

                        <Tooltip text="Nodejs">
                            <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                <FaNodeJs className="text-green-700 size-7" />
                            </div>
                        </Tooltip>

                        <Tooltip text="React">
                            <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                <FaReact className="text-blue-400/90 size-7" />
                            </div>
                        </Tooltip>

                        <Tooltip text="Nextjs">
                            <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                <RiNextjsFill className="text-white/90 size-7" />
                            </div>
                        </Tooltip>
                    </div>


                </div> */}

                    {/* Project-2
                <div className='w-70 h-105 overflow-hidden rounded-lg bg-neutral-900/50 mt-10 border border-dashed border-white/30'>
                    <img className='w-full h-55 hover:scale-90 hover:rounded-lg' src="/linear.png" alt="" />
                    <div className='flex justify-between px-4 mt-4'>
                        <p className='text-white/90 text-sm'>Saas product template</p>
                        <LinkIcon className='text-gray-400/50 size-6 hover:text-white/90' />
                    </div>
                    <p className='text-gray-400/50 text-sm tracking-tighter mt-3 ml-4'>Modern saas template made using futuristic technologies like React, Tailwind CSS, Nextjs, Javascript</p>
                    <div className='px-4'>

                        <Tooltip text="JavaScript">
                            <div className="flex   justify-center items-center size-10 mt-5 rounded-sm ">
                                <IoLogoJavascript className="text-yellow-300 size-7" />
                            </div>
                        </Tooltip>

                        <Tooltip text="Tailwind Css">
                            <div className="flex  justify-center items-center size-10 mt-5 rounded-sm  ">
                                <RiTailwindCssFill  className="text-blue-500/80 size-7" />
                            </div>
                        </Tooltip>

                        <Tooltip text="Nodejs">
                            <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                <FaNodeJs className="text-green-700 size-7" />
                            </div>
                        </Tooltip>

                        <Tooltip text="React">
                            <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                <FaReact className="text-blue-400/90 size-7" />
                            </div>
                        </Tooltip>

                        <Tooltip text="Nextjs">
                            <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                                <RiNextjsFill className="text-white/90 size-7" />
                            </div>
                        </Tooltip>
                    </div>


                </div> */}
                </div>

            </div>
        </>
    )
}

export default Projects