import Main from "./Components/Main"
import zoomIcon from './assets/zoomIcon.svg'
import stripeIcon from './assets/stripeIcon.svg'
import mondayIcon from './assets/mondayIcon.svg'
import dropboxIcon from './assets/dropboxIcon.svg'
import slackIcon from './assets/slackIcon.svg'
import ProgrammeAttraction from "./Components/ProgrammeAttraction"
import TechtimeCourses from "./Components/TechtimeCourses"
import ClientTestimonies from "./Components/ClientTestimonies"
import Community from "./Components/Community"
import FAQs from "./Components/FAQs"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="relative">
      <Main />

      {/* SOCIAL PLATFORMS */}
      <div className='flex justify-evenly items-center bg-[#CCDBF0] px-4 py-8'>
        <img src={zoomIcon} alt="" />
        <img src={stripeIcon} alt="" />
        <img src={mondayIcon} alt="" />
        <img src={dropboxIcon} alt="" />
        <img src={slackIcon} alt="" />
      </div>

      <ProgrammeAttraction />
      <TechtimeCourses />
      <ClientTestimonies />
      <Community />
      <FAQs />
      <Footer />
    </div>
  )
}

export default App
