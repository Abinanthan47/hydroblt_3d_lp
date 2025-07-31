import { useState } from 'react'
import LightRays from './ui/LightRays'

const WaitlistCTA = () => {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true)
            setIsLoading(false)
            setEmail('')
        }, 1500)
    }

    return (
        <div className='relative h-screen bg-[#000000] flex items-center justify-center overflow-hidden'>
            {/* Background effects */}
            <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#189DEB"
                    raysSpeed={1}
                    lightSpread={0.9}
                    rayLength={1.9}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.06}
                    className="custom-rays"
                />
            </div>
            <div className='absolute inset-0 bg-transparent'></div>

            {/* Animated lightning effects */}
            {/* <div className='absolute top-0 left-1/4 w-1 h-32 bg-yellow-400 animate-pulse opacity-60'></div>
            <div className='absolute top-20 right-1/3 w-1 h-24 bg-blue-400 animate-pulse opacity-40'></div>
            <div className='absolute bottom-20 left-1/2 w-1 h-16 bg-purple-400 animate-pulse opacity-50'></div> */}

            <div className='relative z-10 text-center max-w-2xl mx-auto px-6'>
                {/* Main heading */}
                <h1 className='text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
                    <span className='bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent'>
                        JOIN THE
                    </span>
                    <br />
                    <span className='text-white font-mech-tech'>WAITLIST</span>
                </h1>

                {/* Subtitle */}
                <p className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed'>
                    Be the first to experience the raw power of nature's most potent energy source
                </p>

                {/* Stats */}
                <div className='flex justify-center gap-8 mb-12'>
                    <div className='text-center'>
                        <div className='text-3xl font-bold text-yellow-400'>500+</div>
                        <div className='text-sm text-gray-400'>Already Waiting</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-3xl font-bold text-blue-400'>24/7</div>
                        <div className='text-sm text-gray-400'>Energy Boost</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-3xl font-bold text-purple-400'>100%</div>
                        <div className='text-sm text-gray-400'>Natural</div>
                    </div>
                </div>

                {/* Form */}
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
                        <div className='relative mb-6'>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your email address'
                                required
                                className='w-full px-6 py-4 text-lg bg-white/10 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300 backdrop-blur-sm'
                            />
                        </div>

                        <button
                            type='submit'
                            disabled={isLoading}
                            className={`relative w-full px-8 py-4 text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${isLoading
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black shadow-lg hover:shadow-xl'
                                }`}
                        >
                            {isLoading ? (
                                <div className='flex items-center justify-center'>
                                    <div className='w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3'></div>
                                    Joining...
                                </div>
                            ) : (
                                <div className='flex items-center justify-center'>
                                    <span>JOIN WAITLIST</span>
                                    <svg className='w-6 h-6 ml-2 animate-pulse' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                    </svg>
                                </div>
                            )}
                        </button>
                    </form>
                ) : (
                    <div className='max-w-md mx-auto'>
                        <div className='bg-green-500/20 border border-green-400 rounded-lg p-6 text-center'>
                            <div className='text-green-400 text-6xl mb-4'>✓</div>
                            <h3 className='text-2xl font-bold text-white mb-2'>You're on the list!</h3>
                            <p className='text-gray-300'>We'll notify you as soon as HYDROBLT is ready to launch.</p>
                        </div>
                    </div>
                )}

                {/* Additional info */}
                <div className='mt-12 text-center'>
                    <p className='text-gray-400 text-sm'>
                        🔥 Limited spots available • No spam, ever • Unsubscribe anytime
                    </p>
                </div>
            </div>

            {/* Floating particles */}
            <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-60'></div>
            <div className='absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40'></div>
            <div className='absolute top-1/2 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50'></div>
        </div>
    )
}

export default WaitlistCTA 