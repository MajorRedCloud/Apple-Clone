import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"


const Highlights = () => {

  useGSAP(() => {
    gsap.to('.title', {
      opacity:1,
      y : 0
    })

    gsap.to('.link', {
      opacity:1,
      y:0,
      delay:1,
      stagger:0.25
    })
  }, [])

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full 
                                        py-10 sm:px-10 px-5 bg-zinc'>
        <div className="screen-max-width">
          <div className="mb-12 w-full md:flex items-end justify-between ">
            <h1 className="title text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 
                            font-medium opacity-0 translate-y-20">
              Get the Highlights.
            </h1>

            <div className="flex flex-wrap items-end gap-5">
              <p className="link">Watch the Film
                <img src={watchImg} alt="watch Image" className="ml-2"/>
              </p>

              <p className="link">Watch the Event
                <img src={rightImg} alt="watch Image" className="ml-2"/>
              </p>

            </div>
          </div>

          <VideoCarousel />
        </div>

    </section>
  )
}

export default Highlights
