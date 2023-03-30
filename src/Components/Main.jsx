import { useState } from 'react';
import outwardarrow from '../assets/outwardarrow.svg';
import avatar1 from '../assets/avatar1.svg';
import avatar2 from '../assets/avatar2.svg';
import avatar3 from '../assets/avatar3.svg';
import avatar4 from '../assets/avatar4.svg';
import avatar5 from '../assets/avatar5.svg';
import twirlyarrow from '../assets/twirlyarrow.svg'
import heroImage from '../assets/heroImage.svg'
import figmaIcon from '../assets/figmaIcon.svg'
import vscodeIcon from '../assets/vscodeIcon.svg'
import wordpressIcon from '../assets/wordpressIcon.svg'
import lightbulbIcon from '../assets/lightbulbIcon.svg'
import yellowtriangle from '../assets/yellowtriangle.svg'
import yellowcircle from '../assets/yellowcircle.svg'
import greencircle from '../assets/greencircle.svg'

const Main = () => {
    const [open, setOpen] = useState(false);

    let links = [
        {name:"home", link:"/" },
        {name:"about us", link:"/" },
        {name:"courses", link:"/" },
        {name:"testimonials", link:"/" },
        {name:"community", link:"/" },
    ];


  return (
    <div className="relative bg-[#004DB3] p-6 text-white">

        {/* LOGO AND NAVIGATION */}
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-normal font-amazingKids capitalize">techTime</h1>

            {/* BURGER MENU */}
            <div className='text-3xl cursor-pointer z-20 md:hidden' onClick={() => setOpen(!open)} style={{
                transition: open ? 'all' : '',
                transitionDuration: open ? '1000' : '' 
            }} >
                <ion-icon name={open ? 'close-outline' : "menu-outline"}></ion-icon>
            </div>
            
            <nav className='hidden md:flex items-center gap-4 text-white text-center font-satoshi'>
                <ul className='flex items-center gap-4 text-xs font-semibold font-satoshi capitalize'>
                    {
                        links.map((link) => (
                            <li >
                                <a href={link.link} className="text-[#AAC4E6] hover:border-b-2 border-white active:text-white">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>

                <button className='bg-white px-4 py-2 capitalize font-satoshi font-semibold text-xs text-blue-600 rounded-sm hover:bg-[#f1f1f1f3]'>enroll now</button>
            </nav>
        </div>

        {/* Navigation Menu */}
      <div className="relative">
          <nav className='flex flex-col justify-center items-center bg-[#004DB3] w-full h-screen text-white text-center font-satoshi fixed top-0 -right-[1100px] z-50 transition-all duration-1000' style={{
            right: open ? '0' : ''
          }} >
            <div className='text-3xl cursor-pointer z-20 md:hidden absolute top-6 right-8' onClick={() => setOpen(!open)} >
                <ion-icon name={open ? 'close-outline' : "menu-outline"}></ion-icon>
            </div>
                <ul className='space-y-6 text-xl font-semibold font-satoshi capitalize'>
                    {
                        links.map((link) => (
                            <li>
                                <a href={link.link} className="hover:border-b-2 border-white">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <button className='bg-white px-5 py-2 mt-16 capitalize font-satoshi font-semibold text-blue-600 rounded-md hover:bg-[#f1f1f1f3]'>enroll now</button>
            </nav>
      </div>

        {/* Navigation menu end */}

        <div className="flex flex-col items-center md:flex-row ">
            <div className="flex flex-col items-center md:items-start">
                <p className='max-w-[28rem] mx-auto mt-12 text-4xl text-center font-clashDisplay font-bold md:text-start'>Grow your skills to advance your career path </p>
                <p className='mt-6 font-satoshi capitalize text-xs text-center md:text-start'>build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                {/* BUTTONS TO ENROLL/GET STARTED */}
                <div className='flex items-center gap-6 mt-8'>
                    <div className="flex justify-center items-center gap-1 px-6 py-2 border-2 border-white rounded-md hover:bg-[#ffffff41]">
                        <p className='capitalize text-xs font-normal font-satoshi'>get started now</p>
                        <img src={outwardarrow} alt="" />
                    </div>
                    <button className='bg-white px-5 py-2 capitalize font-satoshi font-normal text-xs text-blue-600 rounded-md hover:bg-[#f1f1f1f3]'>enroll now</button>
                </div>
            
                {/* AVATARS THAT HAVE VIEWED THE PROGRAMME */}
                <div className=' flex justify-center items-center gap-6 mt-4'>
                    <div className='relative flex items-center w-[121px]'>
                        <img src={avatar1} alt="" className='w-12 h-12'/>
                        <img src={avatar2} alt="" className='absolute w-12 h-12 left-[22px]'  />
                        <img src={avatar3} alt="" className='absolute w-12 h-12 left-[45px]' />
                        <img src={avatar4} alt="" className='absolute w-12 h-12 left-[67px]' />
                        <img src={avatar5} alt="" className='absolute w-12 h-12 left-[89px]' />
                    </div>
                    <div className='-space-y-1 font-clashDisplay'>
                        <p className='text-2xl text-center font-bold '>255K+</p>
                        <p className='text-xs text-center'>Previews</p>
                    </div>
                </div>
            </div>
            <img src={twirlyarrow} alt="" className='absolute right-2 top-[22rem] ' />
            <div className="w-full">
                <div className="relative max-w-[395px] mx-auto mt-14">
                    <img src={heroImage } alt="" className='mx-auto ' />
                    <img src={vscodeIcon} alt="" className='absolute top-8 right-8' />
                    <img src={lightbulbIcon} alt="" className='absolute top-0 -left-8' />
                    <img src={greencircle} alt=""  className='absolute top-36 left-8' />
                    <img src={figmaIcon} alt=""  className='absolute top-72 -left-4' />
                    <img src={yellowcircle} alt=""  className='absolute top-96 left-8' />
                    <img src={yellowtriangle} alt="" className='absolute top-44 right-8'/>
                    <img src={wordpressIcon} alt="" className='absolute bottom-2 right-2' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main