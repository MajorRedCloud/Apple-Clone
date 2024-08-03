import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { explore1Img, explore2Img, exploreVideo } from "../utils"
import { useRef } from "react"
import { animateWithGsap } from "../utils/animations"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

const Features = () => {

    const videoRef = useRef()

    useGSAP(() => {

        gsap.to('#explore-video', {
            scrollTrigger: {
                trigger: '#explore-video',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom'
            },
            onComplete: () => {
                videoRef.current.play()
            }
        })
        
        animateWithGsap('.h2-head', {opacity:1, delay: 0.5})
        animateWithGsap("#section_heading", { opacity: 1, y: 0 })
        animateWithGsap('.g_grow', { scale: 1, opacity: 1, ease: 'power1'},
                       {scrub: 5.5})
        animateWithGsap('.g_text', {opacity: 1, y:0, ease: 'power2.inOut', duration: 1, stagger:0.2})
    }, [])

  return (
    <section className="h-full w-full common-padding bg-zinc overflow-hidden">
        <div className="screen-max-width">
            <div className="w-full mb-12">
                <h1 id="section_heading" className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20">
                    Explore the Full Story.
                </h1>
            </div>

            <div className="flex flex-col justify-center overflow-hidden items-center">
                <div className="mt-34 mb-24 pl-24">
                    <h2 className="text-5xl lg:text-7xl font-semibold h2-head opacity-0">iPhone.</h2>
                    <h2 className="text-5xl lg:text-7xl font-semibold h2-head opacity-0">Forged in Titanium</h2>
                </div>

                <div className="flex-center flex-col sm:px-10">
                    <div className="relative h-[50vh] w-full flex items-center">
                        <video playsInline muted autoPlay className="h-full w-full object-cover object-center" preload="none" ref={videoRef} id="explore-video">
                            <source src={exploreVideo} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="flex flex-col w-full relative">
                        <div className="feature-video-container">
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <img src={explore1Img} alt="titanium" className="feature-video g_grow"/>
                            </div>
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <img src={explore2Img} alt="titanium" className="feature-video g_grow"/>
                            </div>
                        </div>

                        <div className="feature-text-container">
                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text">
                                    iPhone 15 Pro is {' '}
                                    <span className="text-white">
                                        the first iPhone to feature aerospace-grade titanium design 
                                    </span>
                                        {' '}using the same alloy that spacecrafts use for mission to Mars. 
                                </p>
                            </div>

                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text">
                                    Titanium has one of the best strength-to-weight ratios of any metal, mmaking these our {' '}
                                    <span className="text-white">
                                        lightest pro models ever. 
                                    </span>
                                        {' '}You{"'"}ll notice the difference at your first touch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

)
}

export default Features