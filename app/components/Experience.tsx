import React from 'react'

const Experience = () => {
  return (
    <>
    <div className='mt-5 pb-2 px-3 md:px-0 lg:px-0 '>
        <h2 className='text-white/90  text-sm'>Experience</h2>
        <p className='mt-1 text-gray-400/50 text-sm'>Summary of my professional work experience.</p>
    </div>
    
    {/* Card-1 */}
    <div className='px-3 md:px-0 lg:px-0'>
  <div className='bg-gray-950/50 md:w-200 md:h-50 mt-2 pb-10 rounded-sm border border-dashed border-neutral-400/40 
hover:shadow-[0_0_30px_rgba(255,255,255,0.099)] transition-shadow duration-300 '>

  <div className='  md:flex md:justify-between mt-5 px-5'>
    <div className='md:flex gap-4'>
      <img
        className='size-10 rounded-lg'
        src="https://media.licdn.com/dms/image/v2/D560BAQGvCo-bS-mZeA/company-logo_200_200/B56Zt1TUT.JoAI-/0/1767199557611/cepialabs_logo?e=1770249600&v=beta&t=kLKCGA4xP4GgCpuQuly7MJAx2nR2bRePszxda6cmdDs"
        alt=""
      />
      <div>
        <h2 className='text-white/90 mt-5 md:mt-0'>Frontend Developer</h2>
        <p className='text-gray-400/50 text-sm'>CepiaLabs - Remote, Full-time</p>
      </div>
    </div>

    <div>
      <p className='text-gray-400/50 text-sm mt-3 md:mt-0 lg:mt-0'>Sept 2025 - Present</p>
    </div>
  </div>

  <div className='md:ml-6 mt-3 ml-4'>
    <p className='text-gray-400/60 md:w-180 hover:opacity-80  md:tracking-normal'>
      Built responsive web apps with React and Tailwind, developed backend APIs using Node.js and Express, deployed projects, and fixed bugs to ensure smooth performance.
    </p>
  </div>

</div>
</div>
        {/* Card-2 */}
   <div className='px-3 md:px-0 lg:px-0' >
      <div className='bg-gray-950/50 md:w-200 md:h-50 pd-10 pb-10 rounded-sm border border-dashed border-neutral-400/40 
hover:shadow-[0_0_30px_rgba(255,255,255,0.099)] transition-shadow duration-300 mt-5 '>

  <div className=' md:flex md:justify-between mt-5 px-5'>
    <div className='md:flex gap-4'>
      <img
        className='size-10 rounded-lg'
        src="https://media.licdn.com/dms/image/v2/D560BAQFXDrcQfxvfwA/company-logo_200_200/company-logo_200_200/0/1731222432134/gohypemedia_logo?e=1770249600&v=beta&t=lj_yN1A9qxDlGkMFFORCYK-Ue4BA2eIg7DgSLDW8i6I"
        alt=""
      />
      <div>
        <h2 className='text-white/90 mt-5 md:mt-0 lg:mt-0'>Full-Stack Developer - Intern</h2>
        <p className='text-gray-400/50 text-sm'>Go Hype Media, Full-time</p>
      </div>
    </div>

    <div>
      <p className='text-gray-400/50 text-sm mt-3 md:mt-0 lg:mt-0'> Mar 2025 - June 2025</p>
    </div>
  </div>

  <div className='md:ml-6 ml-4 mt-3'>
    <p className='text-gray-400/60 md:w-180 hover:opacity-80 tracking-tighter md:tracking-normal'>
     Built full-stack web applications with modern frontend tools, reliable backend services, smooth integrations, and stable deployments.
    </p>
  </div>

</div>
</div>

    </>
  )
}

export default Experience