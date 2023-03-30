import facebook from '../assets/facebook.svg'
import twitter from '../assets/Twitter.svg'
import youtube from '../assets/YouTube.svg'
import instagram from '../assets/Instagram.svg'
import discord from '../assets/Discord.svg'

const Footer = () => {
  return (
    <div className='flex flex-col bg-[#000F24] py-2 px-6 text-white font-satoshi md:flex-row md:items-start md:gap-12'>
      <div>
        <p className="mt-8 text-2xl text-white font-normal font-amazingKids capitalize">techTime</p>
        <p className='mt-4 text-xl max-w-[280px]'>Reach out to us on any of our social media networks</p>
        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-4 mt-6">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
          <img src={instagram} alt="" />
          <img src={discord} alt="" />
        </div>
      </div>

      <div className='mt-12 capitalize md:mt-8'>
        <p className='mb-4 text-lg font-bold font-clashDisplay'>useful links</p>

        <ul className='space-y-2'>
            <li><a href="">home</a></li>
            <li><a href="">about us</a></li>
            <li><a href="">our courses</a></li>
            <li><a href="">testimonials</a></li>
            <li><a href="">our community</a></li>
        </ul>
      </div>

      <div className='mt-12 capitalize md:mt-8'>
        <p className='mb-4 text-lg font-bold font-clashDisplay'>community</p>

        <ul className='space-y-2'>
            <li><a href="">help centers</a></li>
            <li><a href="">connections</a></li>
            <li><a href="">our courses</a></li>
            <li><a href="">suggestion</a></li>
            <li><a href="">blog</a></li>
            <li><a href="">newsletter</a></li>
        </ul>
      </div>

      <div className='mt-8 md:w-[386px] md:mt-8'>
        <p className='mb-4 text-lg font-bold font-clashDisplay capitalize'>subscribe us</p>

        <div className='flex mb-16 md:w-full max-h-[50px]'>
            <input type="text" placeholder='nft123@gmail.com' className='bg-[#2A2A2B] w-[60%] px-3 py-4 border-2 border-[#054FB3] rounded-l-sm placeholder:text-[#424141] ' />
            <button className='bg-[#054FB3] px-6 py-2 text-white capitalize border-2 border-[#054FB3] rounded-r-sm hover:bg-[#004eb3e7]'>send message</button>
        </div>
      </div>

    </div>
  )
}

export default Footer
