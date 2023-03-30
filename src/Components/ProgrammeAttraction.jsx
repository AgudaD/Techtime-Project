import avatar6 from '../assets/avatar6.svg'
import twoavatars from '../assets/twoavatars.svg'
import avatars from '../assets/avatars.svg'
import avatar8 from '../assets/avatar8.svg'
import crown from '../assets/crown.svg'
import highquality from '../assets/highquality.svg'
import audioIcon from '../assets/audioIcon.svg'
import liveIcon from '../assets/liveIcon.svg'
import recordingIcon from '../assets/recordingIcon.svg'
import notesIcon from '../assets/notesIcon.svg'
import mentorsIcon from '../assets/mentorsIcon.svg'
import userspriceIcon from '../assets/userspriceIcon.svg'
import priceIcon from '../assets/priceIcon.svg'
import learningIcon from '../assets/learningIcon.svg'

const ProgrammeAttraction = () => {
  return (
    <div className='bg-[#F8F9FC] mt-10 py-2 px-6 md:pl-20'>
        {/* <img src={crown} alt="" className='absolute -top-3 left-0' /> */}
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
                <p className='text-2xl font-bold text-center md:text-start '><span className='relative capitalize'>h
                <img src={crown} alt="" className='absolute -top-2 -left-3' />
                </span>igh quality video, audio & live classes</p>
            
                <p className='capitalize mx-auto text-gray-400 text-xs text-center font-satoshi font-light md:text-start'>high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image</p>
                <div className="flex justify-center items-center mt-4 md:justify-start">
                    <button className='bg-[#004DB3] px-6 py-3 capitalize text-white rounded-md hover:bg-[#004eb3e7]'>view courses</button>
                </div>
                <div className='flex justify-evenly items-center mt-12 mb-4 md:justify-start md:gap-6'>
                    <div className='flex items-center gap-3 bg-white px-4 py-2 shadow-xl rounded-md'>
                        <img src={audioIcon} alt="" className='h-6 w-6' />
                        <p className='capitalize'>audio classes</p>
                    </div>
                    <div className='flex items-center gap-3 bg-white px-4 py-2 shadow-xl rounded-md'>
                        <img src={liveIcon} alt="" className='h-6 w-6' />
                        <p className='capitalize'>live classes</p>
                    </div>
                </div>
                <div className='flex justify-evenly items-center mt-6 mb-4 md:justify-start md:gap-6'>
                    <div className='flex items-center gap-3 bg-white px-4 py-2 shadow-xl rounded-md'>
                        <img src={recordingIcon} alt="" className='h-6 w-6' />
                        <p className='capitalize'>recorded classes</p>
                    </div>
                    <div className='flex items-center gap-3 bg-white px-4 py-2 shadow-xl rounded-md'>
                        <img src={notesIcon} alt="" className='h-6 w-6' />
                        <p className='capitalize'>50+ notes</p>
                    </div>
                </div>
            </div>
            {/* AVATARS TEACHING AND LEARNING */}
                <div className="w-full">
                    <div className="relative mt-16 mx-auto h-60 max-w-[352px]">
                        <img src={twoavatars} alt="" />
                        <img src={avatars} alt="" className='absolute left-2 top-14 m-0 h-auto w-24 ' />
                    </div>
                </div>
        </div>

        <h1 className='text-3xl font-bold font-clashDisplay capitalize text-center mx-auto mt-20'>this is why we are best from others</h1>
        <p className='capitalize mx-auto text-gray-400 text-xs text-center font-satoshi font-light'>high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image</p>

        <img src={avatar8} alt="" className='mt-20 mx-auto' />

        {/* BEST FEATURES */}
        <div className='flex flex-col items-center gap-4 mt-12 sm:flex-row'>
            <div className='px-6 py-12 space-y-2 shadow-lg rounded-md'>
                <img src={mentorsIcon} alt="" />
                <p className='capitalize text-lg font-semibold font-satoshi'>experienced mentors</p>
                <p className='capitalize text-xs font-satoshi'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
            <div className='px-6 py-12 space-y-2 shadow-lg rounded-md'>
                <img src={userspriceIcon} alt="" />
                <p className='capitalize text-lg font-semibold font-satoshi'>affordable prices</p>
                <p className='capitalize text-xs font-satoshi'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-4 mt-12 sm:flex-row'>
            <div className='px-6 py-12 space-y-2 shadow-lg rounded-md'>
                <img src={priceIcon} alt="" />
                <p className='capitalize text-lg font-semibold font-satoshi'>affordable prices</p>
                <p className='capitalize text-xs font-satoshi'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
            <div className='px-6 py-12 space-y-2 shadow-lg rounded-md'>
                <img src={learningIcon} alt="" />
                <p className='capitalize text-lg font-semibold font-satoshi'>flexible learning</p>
                <p className='capitalize text-xs font-satoshi'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
        </div>
        {/* web version  */}
        
    </div>
  )
}

export default ProgrammeAttraction
