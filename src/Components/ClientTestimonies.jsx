import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import bellaMoon from '../assets/bellaMoon.svg'
import avatar15 from '../assets/avatar15.svg'
import avatar16 from '../assets/avatar16.svg'
import { Autoplay, Pagination } from 'swiper';


const ClientTestimonies = () => {
  return (
    <div className='mt-16 p-4 '>
      <p className='text-3xl font-bold font-clashDisplay capitalize text-center mx-auto'>what our clients are saying</p>
      <p className='capitalize mx-auto text-gray-400 text-xs text-center font-satoshi font-light'>high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image</p>

      {/* TESTIMONIES */}
        <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay
        speed={1200}
        pagination={{ clickable: true }}
        className='w-full px-8 py-6 cursor-pointer '>
        <SwiperSlide className='min-w-[350px]'>
          <div className='bg-white px-6 py-4 text-[#A1A1A1] font-satoshi rounded-xl shadow-xl'>
            <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
            <div className='flex items-center gap-2 mt-6'>
              <img src={bellaMoon} alt="" className='w-10 h-auto' />
              <div className='font-satoshi capitalize'>
                <p className='text-black'>bella moon</p>
                <p className='text-xs'>product designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='min-w-[350px]'>
          <div className='bg-white px-6 py-4 text-[#A1A1A1] font-satoshi rounded-xl shadow-xl'>
            <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
            <div className='flex items-center gap-2 mt-6'>
              <img src={avatar15} alt="" className='w-10 h-auto' />
              <div className='font-satoshi capitalize'>
                <p className='text-black'>samuel fortune</p>
                <p className='text-xs'>product designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='min-w-[350px]'>
          <div className='bg-white px-6 py-4 text-[#A1A1A1] font-satoshi rounded-xl shadow-xl'>
            <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
            <div className='flex items-center gap-2 mt-6'>
              <img src={avatar16} alt="" className='w-10 h-auto' />
              <div className='font-satoshi capitalize'>
                <p className='text-black'>bryce jason</p>
                <p className='text-xs'>product designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default ClientTestimonies
