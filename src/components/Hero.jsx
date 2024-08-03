import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {heroVideo, smallHeroVideo} from '../utils'
import { useEffect, useState } from "react"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSourceWidth = () => {
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSourceWidth)

    return () => {
      window.removeEventListener('resize', handleVideoSourceWidth)
    }
  }, [])
  


  useGSAP(() => {
    gsap.to('.hero', {
      opacity:1,
      duration:1,
      delay:1.8
    })

    gsap.to('.cta', {
      opacity:1,
      stagger:0.3,
      delay:2,
      duration:1,
      y:-50
    })
  }, [])

  const changeVHtoHighlights = () => {
    //scroll to next page down from the top
    gsap.to(window, { duration: 2, scrollTo: '#highlights', ease: 'power2.inOut' });
  }

  return (
    <section className='w-full nav-height bg-black relative main'>
      <div className='h-5/6 w-full flex items-center justify-center flex-col '>
        <p className='hero text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10'>
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline={true} key={videoSrc} >
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>

      </div>

      <div className="cta items-center justify-center flex flex-col opacity-0 translate-y-20">
        <button className="btn" onClick={changeVHtoHighlights}>Buy</button>
        <p className="font-normal text-lg">From ₹5,000/month or ₹90,000</p>
      </div>

    </section>
  )
}

export default Hero
