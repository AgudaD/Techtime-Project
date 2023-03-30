import React from 'react'
import uxDesign from '../assets/ux design course.png'
import marketing from '../assets/marketing course.png'
import html from '../assets/html course.png'
import javascript from '../assets/javascript course.png'
import outroom from '../assets/outroom marketing course.png'
import marketingAnalysis from '../assets/marketingAnalysis.png'
import grade from '../assets/grade.svg'
import uxTutor from '../assets/ux tutor.svg'
import marketingTutor from '../assets/marketing tutor.svg'
import htmlTutor from '../assets/html tutor.svg'
import javascriptTutor from '../assets/javascript tutor.svg'
import outroomTutor from '../assets/outroom tutor.svg'
import analysisTutor from '../assets/analysis tutor.svg'
import schedule from '../assets/schedule.svg'
import menubook from '../assets/menubook.svg'

const TechtimeCourses = () => {
  return (
    <div className='mt-12 p-4'>
      <p className='text-3xl font-bold font-clashDisplay capitalize text-center mx-auto mt-20'>browse our popular courses</p>
      <p className='capitalize mx-auto text-gray-400 text-xs text-center font-satoshi font-light'>high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image</p>

      <div className='flex justify-evenly items-center font-satoshi font-medium  text-xs'>
            <p className='px-2 py-2 shadow-md capitalize text-[#004DB3]'>all categories</p>
            <p className='px-2 py-2 capitalize text-[#A1A1A1] hover:shadow-lg'>design</p>
            <p className='px-2 py-2 capitalize text-[#A1A1A1] hover:shadow-lg'>development</p>
            <p className='px-2 py-2 capitalize text-[#A1A1A1] hover:shadow-lg'>marketing</p>
      </div> 

      {/* COURSE LIST */}
      <div className='flex flex-wrap justify-center items-center gap-2 '>
        {/* COURSE 1 */}
        <div className='px-4 py-8 shadow-2xl rounded-md md:basis-1/4'>
            <img src={uxDesign} alt="" className='w-full h-auto' />
            <div className="flex justify-between items-center mt-2">
                <p className='bg-[#1E5DCE33] px-3 py-0.5 text-[7px] text-[#1E5DCE] rounded-full capitalize'>design</p>
                <div className='flex items-center gap-2 text-[7px] text-[#A1A1A1]'>
                    <div className='flex items-center gap-0.5'>
                        <p>4.7k</p>
                        <img src={grade} alt="" className='w-3 h-auto' />
                    </div>
                    <p>(32.7k+)</p>
                </div>
            </div>
            <p className='text-start text-xs font-semibold w-[155.47px] mt-3'>Introduction to user research in UX Design</p>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={schedule} alt="" className='w-2.5 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi'>23hrs 50mins</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={menubook} alt="" className='w-3 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi capitalize'>55 lessons</p>
                </div>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={uxTutor} alt="" className='w-6 h-auto' />
                    <p className='text-[10px] font-satoshi font-semibold capitalize'>leonard victor</p>
                </div>
                <p className='text-[12px] text-[#004DB3] font-satoshi font-semibold'>$15.00</p>
            </div>
        </div>
        {/* COURSE 2 */}
        <div className='px-4 py-8 shadow-2xl rounded-md md:basis-1/4'>
            <img src={marketing} alt="" className='w-full h-auto' />
            <div className="flex justify-between items-center mt-2">
                <p className='bg-[#1E5DCE33] px-3 py-0.5 text-[7px] text-[#1E5DCE] rounded-full capitalize'>marketing</p>
                <div className='flex items-center gap-2 text-[7px] text-[#A1A1A1]'>
                    <div className='flex items-center gap-0.5'>
                        <p>4.7k</p>
                        <img src={grade} alt="" className='w-3 h-auto' />
                    </div>
                    <p>(32.7k+)</p>
                </div>
            </div>
            <p className='text-start text-xs font-semibold w-[155.47px] mt-3'>Introduction to new marketing audience</p>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={schedule} alt="" className='w-2.5 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi'>22hrs 30mins</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={menubook} alt="" className='w-3 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi capitalize'>22 lessons</p>
                </div>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={marketingTutor} alt="" className='w-6 h-auto' />
                    <p className='text-[10px] font-satoshi font-semibold capitalize'>Jeffrey williams </p>
                </div>
                <p className='text-[12px] text-[#004DB3] font-satoshi font-semibold'>$32.00</p>
            </div>
        </div>
        {/* COURSE 3 */}
        <div className='px-4 py-8 shadow-2xl rounded- md:basis-1/4'>
            <img src={html} alt="" className='w-full h-auto' />
            <div className="flex justify-between items-center mt-2">
                <p className='bg-[#1E5DCE33] px-3 py-0.5 text-[7px] text-[#1E5DCE] rounded-full capitalize'>development</p>
                <div className='flex items-center gap-2 text-[7px] text-[#A1A1A1]'>
                    <div className='flex items-center gap-0.5'>
                        <p>4.7k</p>
                        <img src={grade} alt="" className='w-3 h-auto' />
                    </div>
                    <p>(32.7k+)</p>
                </div>
            </div>
            <p className='text-start text-xs font-semibold w-[155.47px] mt-3'>Introduction to html, css and bootstrap</p>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={schedule} alt="" className='w-2.5 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi'>45hrs 50mins</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={menubook} alt="" className='w-3 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi capitalize'>55 lessons</p>
                </div>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={htmlTutor} alt="" className='w-6 h-auto' />
                    <p className='text-[10px] font-satoshi font-semibold capitalize'>claretta mason</p>
                </div>
                <p className='text-[12px] text-[#004DB3] font-satoshi font-semibold'>$55.00</p>
            </div>
        </div>
        {/* COURSE 4 */}
        <div className='px-4 py-8 shadow-2xl rounded-md md:basis-1/4'>
            <img src={javascript} alt="" className='w-full h-auto' />
            <div className="flex justify-between items-center mt-2">
                <p className='bg-[#1E5DCE33] px-3 py-0.5 text-[7px] text-[#1E5DCE] rounded-full capitalize'>development</p>
                <div className='flex items-center gap-2 text-[7px] text-[#A1A1A1]'>
                    <div className='flex items-center gap-0.5'>
                        <p>4.7k</p>
                        <img src={grade} alt="" className='w-3 h-auto' />
                    </div>
                    <p>(32.7k+)</p>
                </div>
            </div>
            <p className='text-start text-xs font-semibold w-[155.47px] mt-3'>Introduction to javascript, git and github</p>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={schedule} alt="" className='w-2.5 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi'>30hrs 50mins</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={menubook} alt="" className='w-3 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi capitalize'>22 lessons</p>
                </div>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={javascriptTutor} alt="" className='w-6 h-auto' />
                    <p className='text-[10px] font-satoshi font-semibold capitalize'>jessica duke</p>
                </div>
                <p className='text-[12px] text-[#004DB3] font-satoshi font-semibold'>$45.00</p>
            </div>
        </div>
        {/* COURSE 5*/}
        <div className='px-4 py-8 shadow-2xl rounded-md md:basis-1/4'>
            <img src={outroom} alt="" className='w-full h-auto' />
            <div className="flex justify-between items-center mt-2">
                <p className='bg-[#1E5DCE33] px-3 py-0.5 text-[7px] text-[#1E5DCE] rounded-full capitalize'>marketing</p>
                <div className='flex items-center gap-2 text-[7px] text-[#A1A1A1]'>
                    <div className='flex items-center gap-0.5'>
                        <p>4.7k</p>
                        <img src={grade} alt="" className='w-3 h-auto' />
                    </div>
                    <p>(32.7k+)</p>
                </div>
            </div>
            <p className='text-start text-xs font-semibold w-[155.47px] mt-3'>Introduction to outroom marketing analysis</p>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={schedule} alt="" className='w-2.5 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi'>33hrs 50mins</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={menubook} alt="" className='w-3 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi capitalize'>26 lessons</p>
                </div>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={outroomTutor} alt="" className='w-6 h-auto' />
                    <p className='text-[10px] font-satoshi font-semibold capitalize'>samuel jacobs</p>
                </div>
                <p className='text-[12px] text-[#004DB3] font-satoshi font-semibold'>$25.00</p>
            </div>
        </div>
        {/* COURSE 6 */}
        <div className='px-4 py-8 shadow-2xl rounded-md md:basis-1/4'>
            <img src={marketingAnalysis} alt="" className='w-full h-auto' />
            <div className="flex justify-between items-center mt-2">
                <p className='bg-[#1E5DCE33] px-3 py-0.5 text-[7px] text-[#1E5DCE] rounded-full capitalize'>marketing</p>
                <div className='flex items-center gap-2 text-[7px] text-[#A1A1A1]'>
                    <div className='flex items-center gap-0.5'>
                        <p>4.7k</p>
                        <img src={grade} alt="" className='w-3 h-auto' />
                    </div>
                    <p>(32.7k+)</p>
                </div>
            </div>
            <p className='text-start text-xs font-semibold w-[155.47px] mt-3'>Introduction to live marketing analysis</p>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={schedule} alt="" className='w-2.5 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi'>10hrs 50mins</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={menubook} alt="" className='w-3 h-auto' />
                    <p className='text-[7px] text-[#A1A1A1] font-satoshi capitalize'>32 lessons</p>
                </div>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-1'>
                    <img src={analysisTutor} alt="" className='w-6 h-auto' />
                    <p className='text-[10px] font-satoshi font-semibold capitalize'>adam smith</p>
                </div>
                <p className='text-[12px] text-[#004DB3] font-satoshi font-semibold'>$25.00</p>
            </div>
        </div>
      </div>

        <div className="flex justify-center items-center mt-4">
            <button className='bg-[#004DB3] px-6 py-3 capitalize text-white rounded-md hover:bg-[#004eb3e7]'>view courses</button>
        </div>

    </div>
  )
}

export default TechtimeCourses
