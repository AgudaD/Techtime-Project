import add from '../assets/add.svg'

const FAQs = () => {
  return (
    <div className='py-2 px-6 my-12 font-satoshi md:px-32'>
      <p className='text-center text-2xl font-bold font-clashDisplay capitalize'>frequently asked questions</p>
      <p className='capitalize mx-auto mt-2 text-gray-400 text-xs text-center font-satoshi font-light'>high-defination video is video of higher resolution and quality than standard definition. while there's no standard meaning for high definition, generally any standard video image</p>

      <p className='text-[#004DB3] text-xl font-bold mt-6'>Is there a free trial available?</p>
      <p className='capitalize mx-auto mt-2 text-gray-400 text-xs font-satoshi font-light'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. </p>

      <hr className='mt-4' />
      <div className='flex justify-between items-center mt-2 font-extrabold'>
        <p>Can I change my plan later?</p>
        <img src={add} alt="" className="w-3 h-3" />
      </div>
      <hr className='mt-4' />
      <div className='flex justify-between items-center mt-2 font-extrabold'>
        <p>Are the courses lifetime?</p>
        <img src={add} alt="" className="w-3 h-3" />
      </div>
      <hr className='mt-4' />
      <div className='flex justify-between items-center mt-2 font-extrabold'>
        <p>Do i get certified after taking courses?</p>
        <img src={add} alt="" className="w-3 h-3" />
      </div>
      <hr className='mt-4' />
      <div className='flex justify-between items-center mt-2 font-extrabold'>
        <p>How do i reach out to mentors?</p>
        <img src={add} alt="" className="w-3 h-3" />
      </div>
      <hr className='mt-4' />
      <div className='flex justify-between items-center mt-2 font-extrabold'>
        <p>Do we get job ready after taking courses?</p>
        <img src={add} alt="" className="w-3 h-3" />
      </div>
      <hr className='mt-4' />

    </div>
  )
}

export default FAQs
