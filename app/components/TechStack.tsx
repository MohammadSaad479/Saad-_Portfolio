import { IoLogoJavascript } from "react-icons/io";
import { Tooltip } from "@/components/tooltip"
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";


const TechStack = () => {
    return (
        <div className='mt-10 pb-10 px-3 md:px-0 lg:px-0 '>
            <h2 className='text-white/90 text-sm'>Tech Stack</h2>
            <p className='text-gray-400/50 text-sm mt-1 md:w-2xl'>These are the technologies that have shaped me into a strong developer. I enjoy working with them and continuously improving my skills by building real-world projects.</p>
            <div className=" md:flex lg:flex gap-1">
                <Tooltip text="JavaScript">
                    <div className="flex   justify-center items-center size-10 mt-5 rounded-sm ">
                        <IoLogoJavascript className="text-yellow-300 size-7" />
                    </div>
                </Tooltip>

                <Tooltip text="TypeScript">
                    <div className="flex  justify-center items-center size-10 mt-5 rounded-sm  ">
                        <SiTypescript className="text-blue-500/80 size-7" />
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

                <Tooltip text="TaiwindCSS">
                    <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                        <RiTailwindCssFill className="text-cyan-400 size-7" />
                    </div>
                </Tooltip>

                <Tooltip text="Expressjs">
                    <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                        <SiExpress className="text-white/90 size-7" />
                    </div>
                </Tooltip>

                <Tooltip text="Github">
                    <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                        <FaGithub  className="text-white/90 size-7" />
                    </div>
                </Tooltip>

                <Tooltip text="Git">
                    <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                        <FaGitAlt className="text-red-600/90 size-7" />
                    </div>
                </Tooltip>

                <Tooltip text="MongoDB">
                    <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                        < SiMongodb  className="text-green-800 size-7" />
                    </div>
                </Tooltip>

                <Tooltip text="Shadcn">
                    <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                        <SiShadcnui className="text-white/90 size-7" />
                    </div>
                </Tooltip>

                <Tooltip text="Vercel">
                    <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                        <IoLogoVercel className="text-white/90 size-7" />
                    </div>
                </Tooltip>

                <Tooltip text="Framer Motion">
                    <div className="flex  justify-center items-center size-10 mt-5 rounded-sm ">
                        <TbBrandFramerMotion className="text-yellow-500/50 size-7" />
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

export default TechStack