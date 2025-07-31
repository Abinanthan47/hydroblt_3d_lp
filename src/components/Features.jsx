import Lightning from './ui/Lightning'

const Features = () => {
    return (
        <div className='h-screen flex justify-center overflow-hidden bg-[#091525] '>]


            <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <Lightning
                    hue={220}
                    xOffset={0}
                    speed={0.5}
                    intensity={0.5}
                    size={1.2}
                />
            </div>
            <div className='absolute z-60  flex top-[260px]  justify-center'>
                <img src="/product5.png" alt="thunderbolt" className='w-[30%] md:w-[40%] rotate-12 shadow-2xl  h-[50%] object-contain ' />

            </div>

            <div className=' flex  top-94  absolute items-center justify-center  z-50'>
                <img src="/image.png" alt="rock" className='w-[70%] h-full object-contain' />
            </div>

            <div className='absolute z-30 w-full flex  top-[40rem] md:top-[33rem] justify-center'>
                <img src="/smoky2.png" alt="cloud" className='w-full opacity-100 h-[65%] grayscale-100 object-fit' />
            </div>

            {/* <div className='absolute   z-70 mt-[620px] '>
                <img src="/c4.png" alt="thunderbolt" className='w-full  opacity-90 object-contain' />
            </div> */}
            <div className='absolute z-70 mt-[300px] w-full flex justify-between px-8 md:px-32'>
                <h1 className='text-yellow-500 tracking-wide font-mech-tech text-xl md:text-7xl font-bold hover:animate-pulse'>RECOVERY</h1>
                <h1 className='text-white text-xl md:text-7xl font-mech-tech  font-bold'>HYDRATION</h1>
            </div>
            <div className='absolute z-70 mt-[500px] w-full flex justify-between px-8 md:px-64'>
                <h1 className='text-white tracking-wide font-mech-tech text-xl md:text-7xl font-bold hover:animate-pulse'>ENERGY</h1>
                <h1 className='text-yellow-500 text-xl md:text-7xl font-mech-tech  font-bold'>PROTEIN</h1>
            </div>

        </div>
    )
}

export default Features