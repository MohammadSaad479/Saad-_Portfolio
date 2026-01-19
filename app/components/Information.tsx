import { CodeXmlIcon, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Information = () => {
    return (
        <div className='mt-10 flex gap-40 px-3 lg:px-0 md:px-0 '>
            <div>
                <div className='flex gap-3 items-center'>
                    <div className='size-6 border border-neutral-600 bg-neutral-800 rounded-md flex items-center justify-center'>
                        <CodeXmlIcon className='text-neutral-300 size-3' />
                    </div>
                    <span className='text-white/75 text-md'>Full-Stack Developer</span>
                </div>

                <div className='flex gap-3 mt-2 items-center'>
                    <div className='size-6 border border-neutral-600 bg-neutral-800 rounded-md flex items-center justify-center'>
                        <MapPin className='text-neutral-300 size-3' />
                    </div>
                    <span className='text-white/75 text-md'>New Delhi, India</span>
                </div>

                <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=saadqureshi479@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 mt-2 items-center hover:opacity-70 cursor-pointer"
                >
                    <div className="size-6 border border-neutral-600 bg-neutral-800 rounded-md flex items-center justify-center">
                        <Mail className="text-neutral-300 size-3" />
                    </div>
                    <span className="text-white/75 text-md">
                        saadqureshi479@gmail.com
                    </span>
                </Link>


            </div>


            <div className='hidden'>
                <div className='flex gap-3 items-center'>
                    <div className='size-6 border border-neutral-600 bg-neutral-800 rounded-md flex items-center justify-center'>
                        <CodeXmlIcon className='text-neutral-300 size-3' />
                    </div>
                    <span className='text-white/75 text-sm'>Full-Stack Developer</span>
                </div>

                <div className='flex gap-3 mt-2 items-center'>
                    <div className='size-6 border border-neutral-600 bg-neutral-800 rounded-md flex items-center justify-center'>
                        <MapPin className='text-neutral-300 size-3' />
                    </div>
                    <span className='text-white/75 text-sm'>New Delhi, India</span>
                </div>

                <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=saadqureshi479@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 mt-2 items-center hover:opacity-70 cursor-pointer"
                >
                    <div className="size-6 border border-neutral-600 bg-neutral-800 rounded-md flex items-center justify-center">
                        <Mail className="text-neutral-300 size-3" />
                    </div>
                    <span className="text-white/75 text-sm">
                        saadqureshi479@gmail.com
                    </span>
                </Link>


            </div>



        </div>
    )
}

export default Information