import maps from '../assets/maps.svg'
import avatar1 from '../assets/avatar1.svg'
import avatar4 from '../assets/avatar4.svg'
import avatar5 from '../assets/avatar5.svg'
import avatar9 from '../assets/avatar9.svg'
import avatar10 from '../assets/avatar10.svg'
import avatar11 from '../assets/avatar11.svg'
import avatar12 from '../assets/avatar12.svg'
import avatar13 from '../assets/avatar13.svg'
import avatar14 from '../assets/avatar14.svg'
import javascriptTutor from '../assets/javascript tutor.svg'

const Community = () => {
  return (
    <div className='bg-[#004DB3] mt-12 py-10 px-6 text-white text-center font-satoshi'>
      <p className='uppercase text-sm'>join our community</p>
      <p className='text-2xl font-bold font-clashDisplay'>Are you  ready to connect with the future talent of the tech world</p>
      <p className='capitalize text-xs '>meet up with other techstars and grow together</p>


        {/* COMMUNITY WITH AVATARS */}
        <div className="w-full mt-8 flex justify-center ">    
          <div className="p-8 relative w-[395px]">
            <img src={maps} alt="" />
    
    
          <img src={avatar1} alt="" className='absolute w-[25px] h-[25px] top-[52px] left-[54px]' />
          <img src={avatar4} alt="" className='absolute w-[20px] h-[20px] top-[96px] left-[277px]' />
          <img src={avatar5} alt="" className='absolute w-[20px] h-[20px] top-[70px] left-[190px]' />
          <img src={avatar9} alt=""  className='absolute w-[25px] h-[25px] top-[71px] left-[227px]' />
          <img src={avatar10} alt="" className='absolute w-[15px] h-[15px] top-[54px] left-[140px]' />
          <img src={avatar11} alt=""  className='absolute w-[25px] h-[25px] top-[125px] left-[168px]' />
          <img src={avatar12} alt="" className='absolute w-[25px] h-[25px] top-[131px] left-[252px]' />
          <img src={avatar13} alt="" className='absolute w-[20px] h-[20px] top-[36px] left-[267px]' />
          <img src={avatar14} alt="" className='absolute w-[30px] h-[30px] top-[80px] left-[103px]' />
          <img src={javascriptTutor} alt="" className='absolute top-[140px] left-[105px]' />
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
            <button className='bg-white px-6 py-3 capitalize text-[#004DB3] font-semibold rounded-md hover:bg-[#faf5f5fb]'>join our community</button>
        </div>

    </div>
  )
}

export default Community
