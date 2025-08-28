'use client'
import { useState } from 'react'

const skills = {
  design: [
    { name: 'Figma', level: 100 },
    { name: 'Adobe XD', level: 95 },
    { name: 'Adobe In-Design', level: 90 },
    { name: 'Photoshop', level: 80 },
    { name: 'Illustrator', level: 85 },
  ],
  development: [
    { name: 'HTML 5', level: 100 },
    { name: 'CSS 3', level: 100 },
    { name: 'JavaScript', level: 100 },
    { name: 'React.Js', level: 100 },
    { name: 'Next.Js', level: 100 },
  ],
}

const experienceData = {
  education: [
    {
      title: 'Computer Science & Engineering',
      institution: 'Uttora University (2017 – 2021)',
      gpa: '3.85/4',
      desc: 'The curriculum focused on developing strong problem-solving skills, programming expertise, and preparing students for careers in software development and IT sectors.',
    },
    {
      title: 'Higher Secondary Certificate',
      institution: 'Uttora Collage (2014 – 2016)',
      gpa: '4.50/5',
      desc: 'Focused on Mathematics, Physics, and Chemistry to build analytical skills and prepare for higher studies in science and technology.',
    },
  ],
  jobs: [
    {
      title: 'UI/UX Designer',
      company: 'BUYCEX (2021 – 2022)',
      location: 'India',
      desc: 'Designed and optimized user-friendly interfaces, improved user experience across web and mobile platforms, and collaborated with developers to deliver client-focused digital solutions.',
    },
    {
      title: 'Frontend Developer',
      company: 'Ipixel (2021 – 2025)',
      location: 'Bangladesh',
      desc: 'Developed and maintained responsive web applications using modern frameworks, optimized performance for scalability with cross-functional teams to deliver high-quality user experiences.',
    },
  ],
}

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section className='bg-[#1d1d1d] text-white py-16 px-6 md:px-16 lg:px-42'>
      <div className=' mx-auto text-center'>
        <p className='text-red-500 font-semibold mb-2'>
          4+ YEARS OF EXPERIENCE
        </p>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>
          UI/UX & Frontend Excellence
        </h2>

        <div className='inline-flex rounded-md bg-[#131313] p-1 mb-12 shadow-lg'>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              activeTab === 'skills'
                ? 'bg-[#1d1d1d] text-white'
                : 'text-gray-400'
            }`}
          >
            Professional Skills
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-[#1d1d1d] text-white'
                : 'text-gray-400'
            }`}
          >
            Experience
          </button>
        </div>

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className='grid md:grid-cols-2 gap-12 text-left'>
            {/* Design Skills */}
            <div>
              <h3 className='text-lg font-semibold mb-6 relative'>
                Design Skill
                <span className='block w-20 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mt-1' />
              </h3>
              {skills.design.map((skill, i) => (
                <div key={i} className='mb-6'>
                  <div className='flex justify-between mb-1 text-sm'>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className='w-full bg-gray-800 rounded-full h-2'>
                    <div
                      className='h-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-500'
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Development Skills */}
            <div>
              <h3 className='text-lg font-semibold mb-6 relative'>
                Development Skill
                <span className='block w-32 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mt-1' />
              </h3>
              {skills.development.map((skill, i) => (
                <div key={i} className='mb-6'>
                  <div className='flex justify-between mb-1 text-sm'>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className='w-full bg-gray-800 rounded-full h-2'>
                    <div
                      className='h-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-500'
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className='grid md:grid-cols-2 gap-12 text-left mt-12'>
            {/* Education */}
            <div>
              <h3 className='text-lg font-semibold mb-6'>
                Education Quality
                <span className='block w-32 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mt-1' />
              </h3>
              {experienceData.education.map((item, i) => (
                <div
                  key={i}
                  className='bg-[#2c2c2c] p-5 mb-6 rounded-lg shadow-md border-l-4 border-gray-700 relative'
                >
                  <h4 className='text-white text-md font-semibold flex justify-between'>
                    {item.title}
                    <span className='text-yellow-400 text-sm'>{item.gpa}</span>
                  </h4>
                  <p className='text-sm text-gray-400 mb-2'>
                    {item.institution}
                  </p>
                  <p className='text-sm text-gray-300'>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Jobs */}
            <div>
              <h3 className='text-lg font-semibold mb-6'>
                Job Experience
                <span className='block w-32 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mt-1' />
              </h3>
              {experienceData.jobs.map((job, i) => (
                <div
                  key={i}
                  className='bg-[#2c2c2c] p-5 mb-6 rounded-lg shadow-md border-l-4 border-gray-700 relative'
                >
                  <div className='flex justify-between items-center'>
                    <h4 className='text-white text-md font-semibold'>
                      {job.title}
                    </h4>
                    <span className='text-xs bg-yellow-500 text-black px-2 py-1 rounded-md'>
                      {job.location}
                    </span>
                  </div>
                  <p className='text-sm text-gray-400 mb-2'>{job.company}</p>
                  <p className='text-sm text-gray-300'>{job.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default SkillsSection
