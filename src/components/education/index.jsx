import { React, useState } from 'react'

import SectionHeader from '../section-header'

import EducationContainer from '../../assets/img/education-hero.png'

import * as Fa from "react-icons/fa";

function Education() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>
      <SectionHeader>qualification</SectionHeader>

      <div className='mt-4 flex flex-col items-center lg:flex-row justify-between'>
        <img src={EducationContainer} className='mb-8 sm:mb-0 lg:w-1/3 h-full' />

        <div className='sm:w-1/2 mt-4 lg:mt-0'> 
          <div>

            <div className='flex-center gap-4 cursor-pointer'>
              <div 
                className={toggleState === 1 ?  "text-primary flex-center gap-2" : "flex-center gap-2"} 
                onClick={() => toggleTab(1)}>
                <Fa.FaCode size={28} />
                Work Experience
              </div>
              <div 
                className={toggleState === 2 ?  "text-primary flex-center gap-2" : "flex-center gap-2"} 
                onClick={() => toggleTab(2)}>
                <Fa.FaGraduationCap size={28}/>
                Education
              </div>
            </div>

            <div className='mt-6'>

              <div className='flex-center items-start'>
                <div className={toggleState === 2 ? "active-content -mt-1 w-1/2 md:w-56" : " opacity-0 -mt-1 w-1/2 md:w-56"}>
                  <div className=" font-bold ">BS in Information System</div>
                  <div className="font-thin text-gray ">AMA University</div>
                  <div className="font-thin text-gray mt-1.5 flex items-center gap-1 "><Fa.FaCalendarAlt /> 2023 - Present</div>
                </div>

                <div className='flex flex-col items-center mx-2'>
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className=" w-0.5 bg-primary h-32"></div>
                </div>

                <div className={toggleState === 1 ? "active-content -mt-1 w-1/2 md:w-56" : "opacity-0 -mt-1 w-1/2 md:w-56"}>
                  <div className=" font-bold ">FullStack web development</div>
                  <div className="font-thin text-gray ">Kodego Bootcamp</div>
                  <div className="font-thin text-gray mt-1.5 flex items-center gap-1 "><Fa.FaCalendarAlt />2022 - 2023</div>
                </div>
              </div>

              <div className='flex-center items-start'>
                <div className={toggleState === 1 ? "active-content w-1/2 md:w-56" : "opacity-0 w-1/2 md:w-56"}>
                  <div className="font-bold  text-sm">UI/UX Apprenticeship</div>
                  <div className="font-thin text-gray ">Kadakareer</div>
                  <div className="font-thin text-gray mt-1.5 flex items-center gap-1 "><Fa.FaCalendarAlt />4 weeks</div>
                </div>

                <div className='flex flex-col items-center mt-1 mx-2'>
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className="w-0.5 bg-primary h-32"></div>
                </div>

                <div className={toggleState === 2 ? "active-content w-1/2 md:w-56" : " opacity-0 w-1/2 md:w-56"}>
                  <div className=" font-bold ">FullStack web development</div>
                  <div className="font-thin text-gray ">Kodego Bootcamp</div>
                  <div className="font-thin text-gray mt-1.5 flex items-center gap-1 "><Fa.FaCalendarAlt />2022 - 2023</div>
                </div>
              </div>

              <div className='flex-center items-start'>
                <div className={toggleState === 2 ? "active-content -mt-1 w-1/2 md:w-56" : " opacity-0 -mt-1 w-1/2 md:w-56"}>
                  <div className=" font-bold ">TVL - ICT (Senior High School)</div>
                  <div className="font-thin text-gray ">AMA University</div>
                  <div className="font-thin text-gray mt-1.5 flex items-center gap-1 "><Fa.FaCalendarAlt /> 2021 - 2023</div>
                </div>

                <div className='flex flex-col items-center mx-2'>
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className=" w-0.5 bg-primary h-32"></div>
                </div>

                <div className={toggleState === 1 ? "active-content -mt-1 w-1/2 md:w-56" : "opacity-0 -mt-1 w-1/2 md:w-56"}>
                  <div className=" font-bold ">System Developer</div>
                  <div className="font-thin text-gray ">Geoplan Philippines Inc.</div>
                  <div className="font-thin text-gray mt-1.5 flex items-center gap-1 "><Fa.FaCalendarAlt />June 2023 - Present</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Education