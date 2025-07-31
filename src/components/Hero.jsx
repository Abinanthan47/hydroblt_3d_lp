import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { ContainerTextFlip } from './ui/container-text-flip'

const Hero = () => {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const mountainLeftRef = useRef(null)
    const mountainRightRef = useRef(null)
    const smokyRef = useRef(null)

    useGSAP(() => {
        const container = containerRef.current
        if (!container) return

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window

            // Calculate normalized mouse position (-1 to 1)
            const mouseX = (clientX / innerWidth) * 2 - 1
            const mouseY = (clientY / innerHeight) * 2 - 1

            // Parallax effect for title
            if (titleRef.current) {
                gsap.to(titleRef.current, {
                    x: mouseX * 20,
                    y: mouseY * 10,
                    duration: 0.5,
                    ease: "power2.out"
                })
            }

            // Parallax effect for mountains
            if (mountainLeftRef.current) {
                gsap.to(mountainLeftRef.current, {
                    x: mouseX * -30,
                    y: mouseY * -15,
                    duration: 0.8,
                    ease: "power2.out"
                })
            }

            if (mountainRightRef.current) {
                gsap.to(mountainRightRef.current, {
                    x: mouseX * 30,
                    y: mouseY * -15,
                    duration: 0.8,
                    ease: "power2.out"
                })
            }

            // Subtle parallax for smoky background
            if (smokyRef.current) {
                gsap.to(smokyRef.current, {
                    x: mouseX * 15,
                    y: mouseY * 8,
                    duration: 1,
                    ease: "power2.out"
                })
            }
        }

        container.addEventListener('mousemove', handleMouseMove)

        return () => {
            container.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div ref={containerRef} className='relative bg-[#000609] min-h-[80vh] md:h-screen w-full overflow-hidden'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className='absolute inset-0 w-full h-full opacity-50 object-cover'
            >
                <source src="/thunderbg4.mp4" type="video/mp4" />

            </video>
            <div ref={smokyRef} className='absolute inset-0 -left-20 md:-left-20 flex -top-260 md:-top-260 grayscale-100'>
                <img src="/smoky.png" alt="thunderbolt" className='w-full rotate-180 h-full object-contain' />
                <img src="/c5.png" alt="thunderbolt" className='w-[1000px] left-10 -right-30 h-full object-contain' />

            </div>

            <div className='flex justify-center mt-16 md:mt-16'>
                <ContainerTextFlip className='font-mech-tech bg-blend-exclusion text-sm md:text-2xl'
                    words={["RECOVERY", "HYDRATION", "20 GRAMS OF PROTEIN", "PACKED IN ONE TINNY SHOT"]}
                />
            </div>
            <div className='absolute inset-0 flex top-14 md:top-14 justify-center'>

                <h1 ref={titleRef} className='text-yellow-500 text-[80px] md:text-[200px] font-mech-tech'>HYDROBLT</h1>
            </div>
            <div ref={mountainLeftRef} className='absolute -left-100 md:-left-100 flex top-48 md:top-48 justify-center'>
                <img src="/mountainbg.png" alt="thunderbolt" className='w-full h-full object-contain' />
            </div>
            <div ref={mountainRightRef} className='absolute -right-90 md:-right-90 -z-0 flex top-48 md:top-48 justify-center'>
                <img src="/mountainbg2.png" alt="thunderbolt" className='w-full h-full object-contain' />
            </div>


        </div>
    )
}

export default Hero